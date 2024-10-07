const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static('public'));

// Handle file upload and detection
app.post('/detect', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Simulate detection process
    setTimeout(() => {
        const result = Math.random() > 0.5 ? 'Authorities Detected' : 'No Authorities Detected';
        res.json({ result: result });
    }, 2000);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});