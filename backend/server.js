require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // JSON middleware for parsing req.body
app.use(cors());         // Enable CORS for frontend requests

// Define API routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/accommodations', accommodationRoutes);

// Root endpoint just for testing
app.get('/', (req, res) => {
  res.send('KumbhNivas API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
