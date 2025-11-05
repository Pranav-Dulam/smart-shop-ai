import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
// CORS configuration
app.use(
    cors({
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/smartshopai");
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

// Routes
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1 style='font-family:sans-serif;color:#00FF99;'>🚀 SmartShop AI Backend is Running...</h1>");
});

// Test summarization API endpoint
app.post("/api/summarize", (req, res) => {
    console.log("🟢 /api/summarize route is active");
    const { reviewText } = req.body;

  if (!reviewText) {
    return res.status(400).json({ error: "Review text is required" });
  }

  // Temporary mock logic - will later be replaced with AI summarization
  res.json({
    summary: `Summary for review: ${reviewText}`,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));