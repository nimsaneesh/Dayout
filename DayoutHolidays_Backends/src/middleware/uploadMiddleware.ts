// uploadMiddleware.ts
import multer from 'multer';
import { RequestHandler } from 'express';
import path from 'path';
import express from 'express';

// Set up Multer middleware for handling image uploads
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'src/uploads');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '_' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'src/uploads' directory
export const serveUploads = express.static(path.join(__dirname, 'src/uploads'));

// Handle image upload logic
export const handleImageUpload: RequestHandler = (req, res, next) => {
  upload.single('image')(req, res, (err) => {
    try {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error uploading file' });
      }

      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file provided' });
      }

      const imageUrl = '/uploads/${file.filename}';

      // You can do additional processing with the imageUrl as needed

      res.json({ imageUrl });
    } catch (error) {
      console.error('Error handling image upload:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
};
