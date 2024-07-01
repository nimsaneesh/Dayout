// src/routes/adventure.routes.ts

import { Router } from "express";
import AdventurePackageController from "../controllers/adventurePackage.controller";

class AdventurePackageRoutes {
  router = Router();
  controller = new AdventurePackageController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    /**
     * @swagger
     * tags:
     *   name: AdventurePackages
     *   description: Operations related to Adventure Packages
     */

    /**
     * @swagger
     * /api/adventure-packages:
     *   post:
     *     summary: Create a new Adventure Package
     *     tags: [AdventurePackages]
     *     requestBody:
     *       description: Adventure Package data
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/AdventurePackageInput'
     *     responses:
     *       201:
     *         description: Successfully created
     *       500:
     *         description: Internal server error
     */
    this.router.post("/api/adventure-packages", this.controller.createAdventurePackage);

    /**
     * @swagger
     * /api/adventure-packages:
     *   get:
     *     summary: Get all Adventure Packages
     *     tags: [AdventurePackages]
     *     responses:
     *       200:
     *         description: Successfully retrieved
     *       500:
     *         description: Internal server error
     */
    this.router.get("/api/adventure-packages", this.controller.getAdventurePackages);

    /**
     * @swagger
     * /api/adventure-packages/{id}:
     *   get:
     *     summary: Get an Adventure Package by ID
     *     tags: [AdventurePackages]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the Adventure Package
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Successfully retrieved
     *       404:
     *         description: Adventure Package not found
     *       500:
     *         description: Internal server error
     */
    this.router.get("/api/adventure-packages/:id", this.controller.getAdventurePackageById);
  }
}

export default new AdventurePackageRoutes().router;
