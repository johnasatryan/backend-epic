const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Anauthorized user...' });
  }

  const verifiedToken = jwt.verify(token, Config.secret_key);

  if (!verifiedToken.id) {
    return res.status(403).json({ message: 'Token expired' });
  }

  req.userId = verifiedToken.id;
  next();
};

module.exports = verifyUser;
