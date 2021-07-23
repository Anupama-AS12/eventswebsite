import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { AppBar, Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Collapse from "@material-ui/core/Collapse";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: `url(${"https://youthincmag.com/wp-content/uploads/2019/03/event-management.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  appbar: {
    marginTop: "-30px",
    background: "none",
  },
  toolbar: {
    fontSize: "0.9rem",
    width: " 100%",
    margin: "0 auto",
  },
  logo: {
    maxWidth: 50,
    maxHeight: 100,
    borderRadius: 35,
  },
  heading: {
    fontFamily: "Apple Chancery, cursive",
    flexGrow: "1",
    color: "#fff",
    backgroundColor: "transparent",
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  title: {
    color: " #fff",
    fontFamily: "Brush Script MT, Brush Script Std, cursive",
    textAlign: "center",
    fontSize: "7rem",
    backgroundColor: "transparent",
  },
  container: {
    textAlign: "center",
  },
  arrow: {
    color: "#fff",
    fontSize: "2.5rem",
  },
  subtitle: {
    color: " #fff",
    fontWeight: "bold",
    fontFamily: "Apple Chancery, cursive",
    fontSize: "1.3rem",
    backgroundColor: "transparent",
    marginTop: "-39px",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    fontFamily: "Apple Chancery, cursive",
    fontSize: "0.9rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#DC143C",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });

  const MyLink = (props) => (
    <Link
      to={{
        pathname: "/login",
      }}
      {...props}
    />
  );
  const MyLink1 = (props) => (
    <Link
      to={{
        pathname: "/signup",
      }}
      {...props}
    />
  );
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <img
            src="https://stgabrielshuyton.net/nursery1920/wp-content/uploads/sites/30/2019/10/star-3.png"
            alt="logo"
            className={classes.logo}
          />
          <p className={classes.heading}>Star Events</p>

          <Button
            component={MyLink}
            elevation={3}
            variant="contained"
            className={classes.button}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> Star Events
          </h1>
          <p className={classes.subtitle}>Creating Priceless Memories</p>{" "}
          <IconButton component={MyLink1}>
            <ArrowForwardIosIcon className={classes.arrow} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}
