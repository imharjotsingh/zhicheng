var mongoose = require("mongoose");
// const { number } = require('@hapi/joi');

var CourseSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
    },
    status: {
      type: String,
    },
    academicYear: {
      type: String,
    },
    term: {
      type: String,
    },
    courseTitle: {
      type: String,
    },
    grade: {
      type: String,
    },
    instructorName: {
      type: String,
    },
    numClass: {
      type: Number,
    },
    program: {
      type: String,
    },
    dayOfWeek: {
      type: String,
    },
    courseGoal: {
      type: String,
    },
    courseDescription: {
      type: String,
    },
    material: {
      type: String,
    },
    vocab: {
      type: [String],
    },
    exComponent: {
      type: String,
    },
    bigIdea: {
      type: [String],
    },
    essentialQuestion: {
      type: [String],
    },
    user: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
