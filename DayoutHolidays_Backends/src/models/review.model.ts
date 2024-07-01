// src/models/TourPackageModel.ts

import mongoose, { Schema, Document } from "mongoose";



export interface ReviewDocument extends Document {
  name: string;
  email: string;
  description: string;
  
  
}



const RevieweSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
 

});

const ReviewModel = mongoose.model<ReviewDocument>("Review", RevieweSchema);

export default ReviewModel;
