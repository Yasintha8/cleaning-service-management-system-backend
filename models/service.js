import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true, 
      trim: true
    }
  }, {
    timestamps: true 
  });

const Service = mongoose.model("services", serviceSchema)
export default Service;