import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  /*root: {
    minHeight: "100vh",
    backgroundImage: `url(${"https://youthincmag.com/wp-content/uploads/2019/03/event-management.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },*/
  grid: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  paper: {
    padding: 20,
    height: "100vh",
    width: 550,
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
  dateTime: {
    marginTop: "8px",
  },
  attendees: {
    marginTop: "20px",
  },
  budget: {
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#DC143C",
    color: "#fff",
    marginTop: "10px",
    textAlign: "center",
    fontFamily: "Apple Chancery, cursive",
    "&:hover": {
      backgroundColor: " #0000ff",
    },
  },
  title: {
    fontFamily: "Apple Chancery, cursive",
  },
}));

const events = [
  {
    value: "Wedding",
    label: "Wedding Ceremony",
  },
  {
    value: "Birthdays",
    label: "Birthdays Celebration",
  },
  {
    value: "Anniversary",
    label: "Anniversary celebration",
  },
  {
    value: "House Warming",
    label: "House Warming ceremony",
  },
  {
    value: "Naming ceremonies",
    label: "Naming ceremony",
  },
  {
    value: "Baby Shower",
    label: "Baby Shower ceremony",
  },
  {
    value: "offical/unoffucial",
    label: "Offical/Unoffucial party",
  },
];
export default function Events() {
  const classes = useStyles();
  const [event, setEvents] = React.useState("Wedding ceremony");
  const MyLink = (props) => (
    <Link
      to={{
        pathname: "/payment",
      }}
      {...props}
    />
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEvents(event.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
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
            <h2 className={classes.title}>
              Add an Event
              <br />
            </h2>
          </Grid>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              required
              className={classes.name}
              id="select-event"
              select
              label="Event"
              value={event}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            >
              {events.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="datetime"
              label="Date & Time"
              type="datetime-local"
              defaultValue="2000-02-12T10:10"
              className={classes.dateTime}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              id="no of attendees"
              label="Number of attendees"
              defaultValue="000"
              variant="outlined"
              className={classes.attendees}
              fullWidth
            />
            <TextField
              required
              className={classes.budget}
              id="budget"
              label="Budget"
              defaultValue="Minimum should be Rs.2500/- "
              variant="outlined"
              fullWidth
            />
            <TextField
              id="extra"
              label="Extra Suggestions"
              multiline
              rows={5}
              defaultValue="If you want any specific theme specify here "
              variant="outlined"
              className={classes.budget}
              fullWidth
            />
          </form>
          <Button
            variant="contained"
            component={MyLink}
            className={classes.button}
          >
            Next
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}
