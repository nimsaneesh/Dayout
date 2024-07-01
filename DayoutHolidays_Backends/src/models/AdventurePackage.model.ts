// src/models/TourPackageModel.ts

import mongoose, { Schema, Document } from "mongoose";



export interface AdventurePackageDocument extends Document {
  name: string;
  rate: string;
  description: string;
  imageUrl: string;
  tripOutline: string;
  tripInstruction: string;
  tripIncludes: string;
  
}



const AdventurePackageSchema = new Schema({
  name: { type: String, required: true },
  rate: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false },
  tripOutline: { type: String, required: true },
  tripInstruction: { type: String, required: true },
  tripIncludes: { type: String, required: true },

});

const AdventurePackageModel = mongoose.model<AdventurePackageDocument>("AdventurePackage", AdventurePackageSchema);

export default AdventurePackageModel;
