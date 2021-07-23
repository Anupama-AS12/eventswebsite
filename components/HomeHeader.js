import React from "react";
//import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Avatar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
//import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: " #cc4069",
    width: "100%",
    height: "55px",
    fontFamily: "Apple Chancery, cursive",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 50,
    maxHeight: 100,
    borderRadius: 35,
  },
  avatar: {
    backgroundColor: "#cc4069",
  },
  list: {
    width: 250,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#cc4069",
    fontWeight: "bold",
    fontFamily: "Apple Chancery, cursive",
    color: "#fff",
  },
  link: {
    fontSize: "1rem",
    fontWeight: "400",
    color: "#fff",
    fontFamily: "Apple Chancery, cursive",
  },
}));

export default function HomeHeader(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => {}}
          className={classes.drawer}
        >
          <div className={classes.list}>
            <Box textAlign="centre" p={1} fontSize="1.5rem">
              Home
            </Box>
            <Divider />
            <List>
              &nbsp;
              <ListItem button onClick={() => {}}>
                <Link to="/events" className={classes.link}>
                  Add Event
                </Link>
              </ListItem>{" "}
              &nbsp;
              <ListItem button onClick={() => {}}>
                <Link to="/" className={classes.link}>
                  Privacy policy
                </Link>
              </ListItem>{" "}
              &nbsp;
              <ListItem button onClick={() => {}}>
                <Link to="/contactus" className={classes.link}>
                  Contact Us
                </Link>
              </ListItem>
              &nbsp;
              <ListItem button onClick={() => {}}>
                <Link to="/header" className={classes.link}>
                  Sign out
                </Link>
              </ListItem>{" "}
              &nbsp;
            </List>
          </div>
        </SwipeableDrawer>
        <Typography variant="h5" className={classes.title}>
          Star Events
        </Typography>
        <Avatar className={classes.avatar}>
          <img
            src="https://stgabrielshuyton.net/nursery1920/wp-content/uploads/sites/30/2019/10/star-3.png"
            alt="logo"
            className={classes.logo}
          />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}
