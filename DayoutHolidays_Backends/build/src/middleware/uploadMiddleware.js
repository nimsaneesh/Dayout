"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleImageUpload = exports.serveUploads = void 0;
// uploadMiddleware.ts
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
// Set up Multer middleware for handling image uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'src/uploads');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '_' + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
// Serve static files from the 'src/uploads' directory
exports.serveUploads = express_1.default.static(path_1.default.join(__dirname, 'src/uploads'));
// Handle image upload logic
const handleImageUpload = (req, res, next) => {
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
        }
        catch (error) {
            console.error('Error handling image upload:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
};
exports.handleImageUpload = handleImageUpload;
