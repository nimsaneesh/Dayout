// controllers/signUp.controller.ts
import bcrypt from 'bcrypt';
import SignUpModel from '../models/signUp.model';
import { Request, Response } from 'express';

export default class SignUpController {
  async signup(req: Request, res: Response) {
    try {
      const { userName, email, password } = req.body;

      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      const existingUser = await SignUpModel.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          message: 'User with this email already exists',
        });
      }

      const newContact = await SignUpModel.create({
        userName,
        email,
        password: hashedPassword, // Save the hashed password to the database
      });

      console.log('Contact saved:', newContact);

      res.status(200).json({
        message: 'Contact created successfully',
        contact: newContact,
      });
    } catch (err) {
      console.error('Error creating contact:', err);
      res.status(500).json({
        message: 'Internal Server Error',
      });
    }
  }
}
