// src/models/TourPackageModel.ts

import mongoose, { Schema, Document } from "mongoose";

export interface DayPackage {
  numberOfDays: number;
  amount: string;
}

export interface TourPackageDocument extends Document {
  name: string;
  rate: string;
  description: string;
  imageUrl: string;
  tripOutline: string;
  tripInstruction: string;
  tripIncludes: string;
  daysPackages: DayPackage[];
}

const DayPackageSchema = new Schema({
  numberOfDays: { type: Number, required: true },
  amount: { type: String, required: true },
});

const TourPackageSchema = new Schema({
  name: { type: String, required: true },
  rate: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false },
  tripOutline: { type: String, required: true },
  tripInstruction: { type: String, required: true },
  tripIncludes: { type: String, required: true },
  daysPackages: { type: [DayPackageSchema], required: true },
});

const TourPackageModel = mongoose.model<TourPackageDocument>("TourPackage", TourPackageSchema);

export default TourPackageModel;
