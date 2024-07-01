// src/models/CartModel.ts

import mongoose, { Schema, Document } from "mongoose";

export interface CartDocument extends Document {
  name: string;
  rate: string;
  description: string;
  imageUrl: string;
  tripOutline: string;
  tripInstruction: string;
  tripIncludes: string;
  quantity: number;
}

const CartSchema = new Schema({
  name: { type: String, required: true },
  rate: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false },
  tripOutline: { type: String, required: true },
  tripInstruction: { type: String, required: true },
  tripIncludes: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const CartModel = mongoose.model<CartDocument>("cart", CartSchema);

export default CartModel;
