const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    // sendgrid specific setup
    this.from_email = new helper.Email('no-reply@mightymail.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients); //specifies that im sending emails to multiple people
  }
}

module.exports = Mailer;
