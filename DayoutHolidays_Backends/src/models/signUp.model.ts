import mongoose, { Schema, Document } from "mongoose";

const SignUpSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const signup = mongoose.model('Signup', SignUpSchema);

export default signup;
