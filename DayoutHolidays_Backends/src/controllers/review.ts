// controllers/signUp.controller.ts
import bcrypt from 'bcrypt';
import ReviewModel, { ReviewDocument } from '../models/review.model';
import { Request, Response } from 'express';

export default class ReviewController {


  async addReview(req: Request, res: Response): Promise<void> {
    try {
      const revieweData: ReviewDocument = req.body;
      const files = req.file;
      let image="";

      const reviewPackage = await ReviewModel.create(revieweData);
      res.status(201).json(reviewPackage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async getReviews(req: Request, res: Response): Promise<void> {
    try {
      const reviewPackage = await ReviewModel.find();
      res.status(200).json(reviewPackage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
