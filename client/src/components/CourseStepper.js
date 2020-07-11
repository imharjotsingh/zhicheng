import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CreateCourseP1 from "./CreateCourseP1";
import {
  useState,
  useForm,
  FormContext,
  useFormContext,
} from "react-hook-form";

// import { DevTool } from "react-hook-form-devtools";
import Browser from "./Browser";
import Navbar from "./nav/nav";

import { connect } from 'react-redux';
import { startSaveUserData } from "../actions/user";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100",
    // marginTop: "3%",
    paddingLeft: "20%",
    paddingRight: "20%",
    marginBottom: "5%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepperLabelRoot: {
    color: "red",
  },
  displayFlex: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },
}));

function getSteps() {
  return [
    "Enter course details",
    "Select course standards",
    "Share with others",
  ];
}


class CourseStepper extends React.Component {
  
  state = {
    ActiveStep: 0,
    name: "",
    test: ""
  }

  //changes the state
  onChange = (type, e) => {
    this.setState({ [type]: e.target.value })
  }

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        //passing the onChange function as props
        return <CreateCourseP1 onChange={this.onChange} currentState={this.state} />;
      case 1:
        return <Browser />;
      case 2:
        return "Third Step";
      default:
        return "Unknown stepIndex";
    }
  }

  handleNext = (data) => {
    this.setState({ActiveStep: this.state.ActiveStep + 1});
    //save data in a store
  };

  handleBack = () => {
    this.setState({ActiveStep: this.state.ActiveStep - 1});
  };

  handleReset = () => {
    this.setState({ActiveStep: 0});
  };

  handleSubmit = () => {
    console.log("Testing submit")
  }

  onSubmit = () => {
    this.props.startSaveUserData({
        name: this.state.name,
        test: this.state.test,
      })
      .then((data) => {
        alert("Successfully submitted");
      })
      .catch((error) => {
        alert("Error submitting")
      })
    }
  

  render() {
    const { classes } = this.props;
    const steps = getSteps();
  return (
    <div className={classes.root}>

      <Navbar />

      <Stepper activeStep={this.state.ActiveStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              classes={{
                root: classes.root,
                active: classes.activeLabel,
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {this.state.ActiveStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={this.handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <FormContext>
                <form onSubmit={this.handleSubmit}>
                  <div className={classes.instructions}>
                    {this.getStepContent(this.state.ActiveStep)}
                  </div>
                  <div className={classes.displayFlex}>
                    <Button
                      disabled={this.state.ActiveStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton}
                      size="small"
                    >
                      Prev
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                    >
                      Save as a Draft
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      size="small"
                    >
                      {this.state.ActiveStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </form>
              </FormContext>
            </div>
        )}
      </div>
    </div>
  );}

}

const mapDispatchToProps = (dispatch) => ({
  startSaveUserData: (Obj) => dispatch(startSaveUserData(Obj)),
});

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(CourseStepper));
