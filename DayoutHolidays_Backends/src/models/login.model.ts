// models/login.model.ts
import mongoose, { Schema } from "mongoose";

const LoginSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const login = mongoose.model('Login', LoginSchema);

export default login;
