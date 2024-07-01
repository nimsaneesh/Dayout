"use strict";
// src/routes/review.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_1 = __importDefault(require("../controllers/review"));
class ReviewRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new review_1.default();
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
exports.default = new ReviewRoutes().router;
