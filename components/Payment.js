import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Apple Chancery, cursive",
    marginTop: "90px",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  paper: {
    padding: 20,
    height: "79vh",
    width: 650,
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
  date: {
    width: 300,
  },
  cvv: {
    marginLeft: "8px",
    width: 300,
  },
  title: {
    fontSize: "1rem",
  },
  Button: {
    backgroundColor: "#DC143C",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: " #0000ff",
    },
  },
}));

export default function Payment() {
  const classes = useStyles();
  const MyLink = (props) => (
    <Link
      to={{
        pathname: "/content",
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
            <h2 className={classes.grid}>Payment</h2>
            <p className={classes.title}>
              Please enter your credit/debit card details to confirm the booking
            </p>
          </Grid>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="cardHolderName"
              label="Card Holder name"
              variant="outlined"
              required
              fullWidth
            />
            <br />
            <br />
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              required
              fullWidth
              inputProps={{ maxLength: 16 }}
            />
            <br />
            <br />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              variant="outlined"
              defaultValue="2000-02-12"
              className={classes.date}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="cvvnumber"
              label="CVV"
              type="password"
              variant="outlined"
              className={classes.cvv}
              required
              inputProps={{ maxLength: 3 }}
            />
            <br />
            <br />
            <Button variant="contained" className={classes.Button} disabled>
              Pay Rs.1000
            </Button>
            &nbsp; &nbsp;
            <Button
              variant="contained"
              className={classes.Button}
              component={MyLink}
            >
              Go Back
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
