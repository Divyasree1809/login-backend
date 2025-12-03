const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Token usually in Authorization: Bearer <token>
  const authHeader = req.header('Authorization') || req.header('authorization');

  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const parts = authHeader.split(' ');
  const token = parts.length === 2 ? parts[1] : parts[0];

  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // contains payload (e.g., userId)
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
