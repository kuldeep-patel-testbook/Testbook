const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/', // Directory where files will be stored
  filename: (req, file, cb) => {
    // Set the filename to be the original name of the file
    cb(null, file.originalname);
  }
});

// Initialize upload
const upload = multer({ storage: storage });

// Create a simple route to handle file uploads
app.post('/upload', upload.single('myFile'), (req, res) => {
  try {
    res.send({message:`File uploaded successfully`, originalname: `${req.file.originalname}`, name: `${req.file.filename}`});
  } catch (err) {
    res.sendStatus(500);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
