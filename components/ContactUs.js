import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

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
}));

function App() {
  const classes = useStyles();
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
            <h2 className={classes.grid}>Contact Us</h2>
            <Link
              component="button"
              variant="body1"
              color="black"
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            >
              anupamaas12@gmail.com
              <br /> amruthata@gmail.com
            </Link>
            <h4>
              +919380688630
              <br />
              +918762713859
            </h4>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default App;
