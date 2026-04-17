const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  accommodationType: {
    type: String,
    enum: ['house', 'flat/apartment', 'tent', 'beds in a shared room', 'room with your family'],
    required: true,
  },
  providingFood: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
  guestsCount: {
    type: Number,
    required: true,
  },
  isFull: {
    type: Boolean,
    default: false,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);
module.exports = Accommodation;
