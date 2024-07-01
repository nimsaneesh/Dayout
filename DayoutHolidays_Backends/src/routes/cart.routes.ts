// src/routes/cart.routes.ts

import { Router } from "express";
import CartController from "../controllers/cart.controller";

class CartRoutes {
  router = Router();
  controller = new CartController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", this.controller.createcart);
  }
}

export default new CartRoutes().router;
