import React from "react";
import Navbar from "./nav/nav";
// import { ThemeProvider } from "@material-ui/core/styles";
// import HorizontalLabelPositionBelowStepper from "../components/stepper";
import CourseInput from "./CourseInput";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useFormContext } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  coursePage: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },
  upperFields: {
    // [theme.breakpoints.down("sm")]: {
    // },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
}));

class  CreateCourseP1 extends React.Component {

  render() {
  const { classes } = this.props;
  return (
    <div className={classes.coursePage}>
      <br></br>
      <div className={classes.upperFields}>
        <div>
          <CourseInput
            title="Instructor Name"
            name="instructorName"
            value={this.props.currentState.name}
            //using the onCHange function through props and changing the state of  "name" to the new text
            onChange={text => this.props.onChange("name",text)}
          />
          <CourseInput title="Subject" name="subject"  />
          <CourseInput
            title="Course Titile"
            name="courseTitle"
            value={this.props.currentState.test}
            onChange={text => this.props.onChange("test",text)}
          />
          <CourseInput
            title="Academic Year"
            style={{ width: "50%" }}
            name="academicYear"
          />
          <CourseInput title="Term" name="term" />
          <CourseInput title="Program" name="program" />
          <CourseInput
            title="Total Number of Classes"
            style={{ width: "50%" }}
            name="numClass"
          />
          <CourseInput
            title="Day of Week"
            name="dayofWeek"
          />
        </div>
        <div>
          <CourseInput
            title="Matrials and Equipment Needed"
            multiline
            rows={5}
            fullWidth
            name="material"
          />
          <CourseInput
            title="Experimental Components"
            multiline
            rows={5}
            fullWidth
            name="exComponent"
          />
        </div>
      </div>
      <div>
        <CourseInput
          title="Course Goal"
          rows={5}
          multiline
          fullWidth
          name="courseGoal"
        />
        <CourseInput
          title="Course Description"
          rows={5}
          multiline
          fullWidth
          name="courseDescription"
        />
      </div>
    </div>
  );
}}

export default (withStyles(useStyles)(CreateCourseP1));
