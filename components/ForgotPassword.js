import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "130px",
  },
  paper: {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "20px auto",
    borderRadius: "20px",
  },
  avatar: {
    backgroundColor: "#DC143C",
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
  },
}));

export default function Login() {
  const classes = useStyles();
  const MyLink = (props) => (
    <Link
      to={{
        pathname: "/login",
      }}
      {...props}
    />
  );
  return (
    <div className={classes.root}>
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
            <h2 className={classes.grid}>Forgot Password</h2>
          </Grid>
          <form>
            <TextField
              name="currentPassword"
              label="Current-password"
              type="password"
              fullWidth
              required
            />
            <TextField
              name="newPassword"
              label="New-password"
              type="password"
              fullWidth
              required
            />
            <Button
              variant="contained"
              size="medium"
              className={classes.signin}
              elevation={1}
              fullWidth
              component={MyLink}
            >
              Reset
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
