const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');

// @route   GET /api/user/profile
// @desc    Get logged in user profile
// @access  Private (Requires Token)
router.get('/profile', protect, async (req, res) => {
  try {
    // req.user is set in the authMiddleware once token is verified
    const user = await User.findById(req.user.userId).select('-password');

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
