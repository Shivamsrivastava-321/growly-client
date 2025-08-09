import express from "express";
import { Lead } from "../Models/lead.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, businessType, message } = req.body;
    if (!name || !email || !phone || !businessType || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required. Please fill in all the details.",
      });
    }
    const existingLead = await Lead.findOne({ email });

    if (existingLead) {
      return res.status(400).json({
        success: false,
        message:
          "This email has already been used. Please use a different email.",
      });
    }
    const newLead = new Lead({ name, email, phone, businessType, message });
    await newLead.save();
    res.status(200).json({ success: true, message: "Form submitted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

router.get("/admin/leads", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }); // This sorts the leads by createdAt in descending order (latest lead comes first).
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leads" });
  }
});

export default router;
