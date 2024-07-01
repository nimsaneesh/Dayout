"use strict";
// src/routes/tourPackage.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tourPackage_controller_1 = __importDefault(require("../controllers/tourPackage.controller"));
const router = (0, express_1.Router)();
router.post("/", tourPackage_controller_1.default.createTourPackage);
router.get("/", tourPackage_controller_1.default.getTourPackages); // New route for GET method
exports.default = router;
