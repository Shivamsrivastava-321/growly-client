import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  businessType: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Lead = mongoose.model("Lead", leadSchema);
