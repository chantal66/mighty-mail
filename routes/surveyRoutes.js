const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const events = _.map(req.body, event => {
      const pathname = new URL(event.url).pathname; // extracting /api/surveys/:survey_id/yes or no
      const parser = new Path('/api/surveys/:survey_id/:choice'); // parser will return :survey_id and :choice otherwise it'll be null
      const match = p.test(pathname);
      if (match) {
        return {
          email: event.email,
          survey_id: match.survey_id,
          choice: match.choice
        };
      }
    });
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // here i'll send the email.
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user); // sending back updated user with remaining credits
    } catch (err) {
      res.status(422).send(err); // 422 unprocessable entity => something is wrong with data
    }
  });
};
// TODO refactor app.post it's too long.
