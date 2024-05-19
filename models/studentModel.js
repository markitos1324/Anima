const mongoose = require("mongoose");

let steps = new mongoose.Schema({
});

const StudentSchema = new mongoose.Schema(
  {
    studentname: {
      type: String,
    },
    steps: {
      type: [steps],
      default: {
        name: "Register",
        number: 0,
        isComplete: false,
      },
    },
  },
  { timestamps: true }
);

const modelAssitant = mongoose.model("Student", StudentSchema);

module.exports = modelAssitant;
