import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  Style: {
    textAlign: "left",
    marginBottom: "25px",
  },
  marginTop: {
    marginTop: "3px",
  },
}));

function CourseInput(props) {
  const classes = useStyles();
  const { title, ...otherProps } = props;
  return (
    <div className={classes.Style}>
      <b>{title}</b>
      <br></br>
      <TextField
        variant="outlined"
        size="small"
        className={classes.marginTop}
        {...otherProps}
      />
    </div>
  );
}

export default CourseInput;
