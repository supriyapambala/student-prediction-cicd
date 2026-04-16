const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema({
  fileName: String,
  prediction: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Prediction", predictionSchema);
