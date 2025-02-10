const jwt = require('jsonwebtoken');
const { User } = require('../models');
const settings = require('../configs/settings');

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res
        .status(401)
        .json({ error: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, settings.JWT_SECRET);
    req.user = await User.findByPk(decoded.userId);
    if (!req.user) {
      return res.status(401).json({ error: 'Invalid token. User not found.' });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized. Invalid token.' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Admins only.' });
  }
  next();
};

module.exports = { authenticateUser, isAdmin };
