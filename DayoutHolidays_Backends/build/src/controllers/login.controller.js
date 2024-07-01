"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// controllers/login.controller.ts
const login_model_1 = __importDefault(require("../models/login.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, password } = req.body;
                // Check if the user exists in the database
                const user = yield login_model_1.default.findOne({ userName });
                if (!user || !bcrypt_1.default.compareSync(password, user.password)) {
                    return res.status(401).json({ message: "Invalid username or password" });
                }
                // Generate a JWT token
                const token = jsonwebtoken_1.default.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
                res.status(200).json({
                    message: "Login successful",
                    token,
                });
            }
            catch (err) {
                console.error('Error during login:', err);
                res.status(500).json({
                    message: "Internal Server Error",
                });
            }
        });
    }
}
exports.default = LoginController;
