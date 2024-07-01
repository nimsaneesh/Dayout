// controllers/login.controller.ts
import login from "../models/login.model";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class LoginController {
  async login(req: Request, res: Response) {
    try {
      const { userName, password } = req.body;

      // Check if the user exists in the database
      const user = await login.findOne({ userName });

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

      res.status(200).json({
        message: "Login successful",
        token,
      });
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
