// src/controllers/cart.controller.ts

import { Request, Response } from "express";
import CartModel, { CartDocument } from "../models/cart.model";

export default class CartController {
  async createcart(req: Request, res: Response): Promise<void> {
    try {
      const cartData: CartDocument = req.body;
      const createdCart = await CartModel.create(cartData);
      res.status(201).json(createdCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
