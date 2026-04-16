const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Prediction = require("./models/Prediction");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/predictionDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Save prediction record
app.post("/save", async (req, res) => {
  const data = new Prediction(req.body);
  await data.save();
  res.json({ message: "Saved successfully" });
});

// Get history
app.get("/history", async (req, res) => {
  const history = await Prediction.find().sort({ createdAt: -1 });
  res.json(history);
});

// Insert sample data for testing
app.get("/testsave", async (req, res) => {
  const data = new Prediction({
    fileName: "sample.txt",
    prediction: "Positive"
  });

  await data.save();
  res.send("Sample saved successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
