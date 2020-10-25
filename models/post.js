const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  office: { type: String, required: true },
  date: { type: Date, default: Date.now, },
  salary: { type: String, required: true }
});

module.exports = mongoose.model("Post", postSchema);
