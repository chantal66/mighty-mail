module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!!!' });
  }

  next();
};

// 401 code is Unauthorized. meaning user have to log in.
