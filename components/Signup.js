import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  FormControlLabel,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
//import { Formik, Form, Field } from "formik";
//import * as Yup from "yup";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Apple Chancery, cursive",
    color: "#000",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  paper: {
    padding: 20,
    height: "90vh",
    width: 350,
    margin: "20px auto",
  },
  logo: {
    maxWidth: 50,
    maxHeight: 100,
    borderRadius: 35,
  },
  signin: {
    backgroundColor: "#DC143C",
    margin: "25px auto",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: " #0000ff",
    },
  },
}));

export default function Signup(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    emailError,
    passwordError,
  } = props;

  const MyLink = (props) => (
    <Link
      to={{
        pathname: "/content",
      }}
      {...props}
    />
  );
  return (
    <Grid className={classes.grid}>
      <Paper className={classes.paper} elevation={20}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <img
              src="https://stgabrielshuyton.net/nursery1920/wp-content/uploads/sites/30/2019/10/star-3.png"
              alt="logo"
              className={classes.logo}
            />
          </Avatar>
          <h2>
            Sign Up
            <br />
          </h2>
        </Grid>

        <form noValidate autoComplete="off">
          <TextField
            required
            name="fullname"
            label="FullName"
            placeholder="Enter your fullName"
            fullWidth
          />
          <TextField
            required
            name="username"
            label="Username"
            placeholder="Enter your username"
            /*error={!!fullnameErrorText}
                helperText={fullnameErrorText}
                onChange={(e) => setFullname(e.target.value)}*/
            fullWidth
          />
          <TextField
            required
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // placeholder="Enter your email"
            /*error={!!emailErrorText}
                helperText={emailErrorText}
                onChange={(e) => setEmail(e.target.value)}*/
            fullWidth
          />
          <h6>{emailError}</h6>

          <TextField
            required
            name="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{ maxLength: 14 }}
          />
          <h6>{passwordError}</h6>
          <TextField
            required
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            /* error={!!confirmpasswordErrorText}
                helperText={confirmpasswordErrorText}
                onChange={(e) => setConfirmpassword(e.target.value)}*/
            fullWidth
            inputProps={{ maxLength: 14 }}
          />
          <FormControlLabel
            className={classes.checkBox}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="I agree to the terms and conditions"
          />
          <Button
            size="medium"
            className={classes.signin}
            elevation={0}
            fullWidth
            onClick={handleSignup}
            component={MyLink}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
