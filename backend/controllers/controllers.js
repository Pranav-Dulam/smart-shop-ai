import axios from "axios";

export const summarizeReview = async (req, res) => {
  try {
    const { reviewText } = req.body;

    // Example placeholder response
    const summary = `Summary for review: ${reviewText.substring(0, 50)}...`;
    
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
