// src/routes/tourPackage.routes.ts

import { Router } from "express";
import tourPackageController from "../controllers/tourPackage.controller";

const router = Router();

router.post("/", tourPackageController.createTourPackage);
router.get("/", tourPackageController.getTourPackages); // New route for GET method

export default router;
