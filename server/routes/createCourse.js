const createCourse = require("express").Router();
const Course = require("../models/Course");
const draftValidation = require("./draftValidation");

createCourse.post("/createCourse", async (req, res) => {
  //   const { error } = draftValidation(req.body);
  //   if (error) return res.status(400).send(error.details[0].message);

  const newCourse = new Course({
    instructorName: req.body.instructorName,
    subject: req.body.subject,
    courseTitle: req.body.courseTitle,
    academicYear: req.body.academicYear,
    term: req.body.term,
    program: req.body.program,
    numClass: req.body.numClass,
    dayofWeek: req.body.dayofWeek,
    material: req.body.material,
    exComponent: req.body.exComponent,
    courseGoal: req.body.courseGoal,
    courseDescription: req.body.courseDescription,
  });
  try {
    const savedCourse = await newCourse.save();
    res.send(savedCourse);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = createCourse;
