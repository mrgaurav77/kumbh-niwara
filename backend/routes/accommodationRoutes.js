const express = require('express');
const router = express.Router();
const Accommodation = require('../models/Accommodation');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/accommodations
// @desc    Create a new accommodation listing
// @access  Private (Requires Token)
router.post('/', protect, async (req, res) => {
  try {
    const { title, description, price, location, images, accommodationType, providingFood, guestsCount } = req.body;

    // Validate simple required fields
    if (!title || !description || !price || !location || !accommodationType || !providingFood || !guestsCount) {
      return res.status(400).json({ message: 'Please provide all required fields (title, description, price, location, accommodationType, providingFood, guestsCount)' });
    }

    const newAccommodation = await Accommodation.create({
      user: req.user.userId,
      title,
      description,
      price,
      location,
      images: images || [],
      accommodationType,
      providingFood,
      guestsCount,
    });

    res.status(201).json({
      message: 'Accommodation added successfully',
      data: newAccommodation
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error adding accommodation', error: error.message });
  }
});

// @route   GET /api/accommodations
// @desc    Get all accommodations (Public example)
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Optionally populate the user's name if we want to show it on frontend
    const accommodations = await Accommodation.find().populate('user', 'name email');
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching accommodations', error: error.message });
  }
});

module.exports = router;
