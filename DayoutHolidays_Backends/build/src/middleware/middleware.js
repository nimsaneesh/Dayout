"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//multer file
const multer_1 = __importDefault(require("multer"));
// Configure the storage for uploaded images
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        // Set the destination folder for uploaded images
        callback(null, 'src/uploads'); // You can customize the destination path
    },
    filename: (req, file, callback) => {
        // Set the filename for the uploaded image
        callback(null, Date.now() + '_' + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
