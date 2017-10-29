const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500, // 500 cents = 5 dollars
      currency: 'usd',
      description: '$5 dollars for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save(); // req.user is the user model.

    res.send(user);
  });
};
