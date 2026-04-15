require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { ImageModule } = require('./models/image');
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

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './uploads';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage })
app.post('/upload', upload.single('image'), async (req, res) => {
  try {    
    const {path, filename} = req.file;
    const image = new ImageModule({ path, filename });
    await image.save();
    res.status(200).json({ message: "Upload successful", image });
  } catch (error) {
    res.status(500).json({"error": "Unable to upload image", details: error.message});
  }
});