"use strict";
// src/routes/cart.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../controllers/cart.controller"));
class CartRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new cart_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.controller.createcart);
    }
}
exports.default = new CartRoutes().router;
