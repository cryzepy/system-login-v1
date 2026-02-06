const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  User.findByEmail(email, (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    User.create(
      { name, email, password: hashedPassword },
      (err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        res.json({ message: 'Register success' });
      }
    );
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

  User.findByEmail(email, (err, results) => {
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Login success',
      token
    });
  });
};
