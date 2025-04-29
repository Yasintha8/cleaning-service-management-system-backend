import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password_hash: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' }
  });

const User = new mongoose.model("users", userSchema);  // collection in database , that name - users

export default User;
