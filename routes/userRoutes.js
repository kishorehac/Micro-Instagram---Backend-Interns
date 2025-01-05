const express = require('express');
const { User } = require('../models');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
});

// Create a new user (just for completeness)
router.post('/', async (req, res) => {
  try {
    const { name, mobileNumber, address } = req.body;
    const user = await User.create({ name, mobileNumber, address, postCount: 0 });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
});

// Additional routes for user-related operations can be added here

module.exports = router;
