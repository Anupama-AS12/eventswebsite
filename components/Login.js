import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#000",
    fontFamily: "Apple Chancery, cursive",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "90px",
  },
  paper: {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  },
  avatar: {
    backgroundColor: "#DC143C",
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
  link: {
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
  logo: {
    maxWidth: 50,
    maxHeight: 100,
    borderRadius: 35,
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
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
      <Paper className={classes.paper} elevation={10}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <img
              src="https://stgabrielshuyton.net/nursery1920/wp-content/uploads/sites/30/2019/10/star-3.png"
              alt="logo"
              className={classes.logo}
            />
          </Avatar>
          <h2>
            Sign in
            <br />
          </h2>
        </Grid>
        <form>
          <TextField
            name="email"
            label="Email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
          <h6>{passwordError}</h6>
          <Button
            variant="contained"
            size="medium"
            className={classes.signin}
            elevation={1}
            fullWidth
            onClick={handleLogin}
            component={MyLink}
          >
            Submit
          </Button>
        </form>

        <Typography className={classes.link}>
          <Link to="/forgotpassword" className={classes.link}>
            {" "}
            Forgot Password?
            <br />{" "}
          </Link>
          New User?
          <Link to="/signup" className={classes.link} href="#">
            {" "}
            SignUp{" "}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
