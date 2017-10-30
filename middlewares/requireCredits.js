module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  next();
};

// 402 => payment required is not available yet.
// so we are using 403 => Forbidden
