import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./mcg_logo.png";
import Box from "@material-ui/core/Box";
import InputField from "../components/InputField";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

import { useForm } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";

/* styles */
const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 40px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0 60px",
    },
  },
  logo: {
    position: "absolute",
    width: "96px",
    height: "86px",
    left: "50%",
    transform: "translate(-50%)",
    top: "30px",
  },
  paper: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    minHeight: "435px",
    [theme.breakpoints.down("sm")]: {
      width: "320px",
      marginTop: "150px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "400px",
      marginTop: "190px",
    },
    backgroundColor: "#f9fbfd",
  },
  button: {
    backgroundColor: "orange",
    color: "white",
    fontWeight: "bold",
    height: "55.39px",
    fontSize: "18px",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "28px",
    },
    marginTop: "32px",
    marginBottom: "32px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "15px",
    fontWeight: "normal",
  },
  HyperColor: {
    color: "#ff9d00",
    fontWeight: "bold",
  },
  forget: {
    width: "100%",
    textAlign: "right",
    marginTop: "15px",
  },
  InputField: {
    marginBottom: "30px",
  },
  IconColor: {
    color: "#4b4c4c",
  },
  resMessage: {
    marginTop: "0",
    color: "red",
    // textAlign: 'left',
    fontSize: "14px",
    marginBottom: "5px",
  },
}));

function Login() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const classes = useStyles();

  const [message, setMessage] = useState("");

  const logoStyles = {
    position: "absolute",
    width: "96px",
    height: "86px",
    left: "50%",
    transform: "translate(-50%)",
    top: "30px",
  };

  async function communicationAPI(data) {
    console.log(JSON.stringify(data));
    const res = await fetch("api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const msg = await res.text();
    const status = await res.status;
    console.dir(msg);
    status === 200 ? setMessage("") : setMessage("Error: " + msg);
  }

  return (
    <Box className={classes.center}>
      <DevTool control={control} />
      {/* mcg logo */}

      <img
        className={classes.logo}
        style={logoStyles}
        src={logo}
        alt="mcg logo"
      />

      <Paper className={classes.paper} elevation={4}>
        <div className={classes.container}>
          <div
            className={classes.title}
            style={{ marginBottom: message ? "12px" : "32px" }}
          >
            Welcome back!
            <div className={classes.subtitle}>Sign in to continue</div>
          </div>
          <div className={classes.resMessage}>{message}</div>
          <form onSubmit={handleSubmit(communicationAPI)}>
            {/* email input */}
            <InputField
              className={classes.InputField}
              icon={<EmailIcon className={classes.IconColor} />}
              // type="email"
              placeholder="Email"
              name="email"
              inputRef={register()}
              required
              fullWidth
            />

            {/* password input */}
            <InputField
              icon={<LockIcon className={classes.IconColor} />}
              type="password"
              placeholder="Password"
              name="password"
              inputRef={register()}
              required
              fullWidth
            />

            <div className={classes.forget}>
              <a href="#">Forgot password?</a>
            </div>

            {/* login button */}
            <p>
              <Button
                type="submit"
                className={classes.button}
                id="login_button"
                fullWidth
              >
                LOGIN
              </Button>
            </p>
          </form>
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </Paper>
    </Box>
  );
}

export default Login;
