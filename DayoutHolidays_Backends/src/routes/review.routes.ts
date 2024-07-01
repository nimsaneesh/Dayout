// src/routes/review.routes.ts

import { Router } from "express";
import ReviewController from "../controllers/review";

class ReviewRoutes {
  router = Router();
  controller = new ReviewController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    /**
     * @swagger
     * tags:
     *   name: Reviews
     *   description: Operations related to Reviews
     */

    /**
     * @swagger
     * /api/reviews:
     *   post:
     *     summary: Add a new review
     *     tags: [Reviews]
     *     requestBody:
     *       description: Review data
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/ReviewInput'
     *     responses:
     *       201:
     *         description: Successfully added
     *       500:
     *         description: Internal server error
     */
    this.router.post("/api/reviews", this.controller.addReview);

    /**
     * @swagger
     * /api/reviews:
     *   get:
     *     summary: Get all reviews
     *     tags: [Reviews]
     *     responses:
     *       200:
     *         description: Successfully retrieved
     *       500:
     *         description: Internal server error
     */
    this.router.get("/api/reviews", this.controller.getReviews);
  }
}

export default new ReviewRoutes().router;
