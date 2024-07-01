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
// controllers/signUp.controller.ts
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUp_model_1 = __importDefault(require("../models/signUp.model"));
class SignUpController {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, email, password } = req.body;
                // Hash the password before saving it to the database
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                const existingUser = yield signUp_model_1.default.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({
                        message: 'User with this email already exists',
                    });
                }
                const newContact = yield signUp_model_1.default.create({
                    userName,
                    email,
                    password: hashedPassword, // Save the hashed password to the database
                });
                console.log('Contact saved:', newContact);
                res.status(200).json({
                    message: 'Contact created successfully',
                    contact: newContact,
                });
            }
            catch (err) {
                console.error('Error creating contact:', err);
                res.status(500).json({
                    message: 'Internal Server Error',
                });
            }
        });
    }
}
exports.default = SignUpController;
