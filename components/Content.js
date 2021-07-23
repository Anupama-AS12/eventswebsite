import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";
import HomeHeader from "../components/HomeHeader";
import ImageSlider from "../components/ImageSlider";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  contentofw: {
    width: 450,
    textAlign: "center",
    color: "#000",
    fontFamily: "Apple Chancery, cursive",
  },
  mediaofw: {
    height: 350,
    width: 550,
  },
  root: {
    marginTop: "60px",
    justifyContent: "space-around",
  },
  mediaofb: {
    height: 350,
    width: 550,
  },
  contentofb: {
    width: 450,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Apple Chancery, cursive",
  },
  mediaofa: {
    height: 350,
    width: 550,
  },
  contentofa: {
    width: 450,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Apple Chancery, cursive",
  },
  mediaofh: {
    height: 350,
    width: 550,
  },
  contentofh: {
    width: 450,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Apple Chancery, cursive",
  },
  mediaofn: {
    height: 350,
    width: 550,
  },
  contentofn: {
    width: 450,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Apple Chancery, cursive",
  },
  card: {
    width: 550,
    marginBottom: "50px",
  },
  footer: {
    backgroundColor: "#cc4069",
    width: "100%",
    height: "300px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#000",
    fontFamily: "Apple Chancery, cursive",
  },
  description: {
    marginBottom: "50px",
  },
  logo: {
    maxWidth: 50,
    maxHeight: 100,
    borderRadius: 35,
  },
  avatar: {
    backgroundColor: "#cc4069",
  },
  footerContent: {
    marginLeft: "25px",
    marginTop: "10px",
    fontFamily: "Apple Chancery, cursive",
  },
  ftitle: {
    textAlign: "left",
    marginLeft: "48px",
    marginTop: "-30px",
    fontFamily: "Apple Chancery, cursive",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#fff",
    marginLeft: "20px",
    marginTop: "-20px",
  },
  address: {
    marginLeft: "65px",
    marginTop: "-37px",
    fontFamily: "Apple Chancery, cursive",
  },
  copyright: {
    marginLeft: "55px",
    marginTop: "-26px",
  },
  mail: {
    marginLeft: "65px",
    marginTop: "-34px",
  },
  add: {
    backgroundColor: "#26269c",
    color: "#fff",
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    "&:hover": {
      backgroundColor: " #2eb82e",
    },
  },
  addIcon: {
    fontSize: "2rem",
  },
  nav: {
    backgroundColor: "#FF8C00",
    color: "#fff",
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 85,
    left: "auto",
    position: "fixed",
    "&:hover": {
      backgroundColor: " #2eb82e",
    },
  },
});

export default function Content(props) {
  const classes = useStyles();
  const MyLink = (props) => (
    <Link
      to={{
        pathname: "/events",
      }}
      {...props}
    />
  );
  const { handleLogout } = props;
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };
  return (
    <Router>
      <div>
        <HomeHeader handleLogout={handleLogout} />
        <ImageSlider />
        <Grid container spacing={3} className={classes.root}>
          <Fab className={classes.nav} onClick={handleClick}>
            <NavigationIcon className={classes.extendedIcon} />
          </Fab>
          <IconButton className={classes.add} component={MyLink}>
            <AddIcon className={classes.addIcon} />
          </IconButton>
          {/*wedding */}
          <Grid className={classes.contentofw}>
            <Typography variant="body1" color="textSecondary" component="p">
              <span className={classes.title}>Wedding </span>
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid>
            <Card className={classes.card}>
              <CardMedia
                className={classes.mediaofw}
                component="img"
                alt="Wedding"
                image="https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/IWP-Indian_Wedding_Planners/iwp-14.jpg"
                title="Wedding"
              />
            </Card>
          </Grid>
          {/*birthday */}
          <Grid>
            <Card className={classes.card}>
              <CardMedia
                className={classes.mediaofb}
                component="img"
                alt="Birthdays"
                image="https://4.imimg.com/data4/AJ/LR/ANDROID-15068978/product-500x500.jpeg"
                title="Birthdays"
              />
            </Card>
          </Grid>
          <Grid className={classes.contentofb}>
            <Typography
              className
              variant="body1"
              color="textSecondary"
              component="p"
            >
              <span className={classes.title}>Birthdays </span>
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
          {/*anniversay */}
          <Grid className={classes.contentofa}>
            <Typography
              className={classes.description}
              variant="body1"
              color="textSecondary"
              component="p"
            >
              <span className={classes.title}>Anniversaries </span>
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid>
            <Card className={classes.card}>
              <CardMedia
                className={classes.mediaofa}
                component="img"
                alt="Annivesary"
                image="https://tngtong.com/assets/images/page/anniversary2.jpg"
                title="Annivesary"
              />
            </Card>
          </Grid>
          {/*House Warming */}
          <Grid>
            <Card className={classes.card}>
              <CardMedia
                className={classes.mediaofh}
                component="img"
                alt="House Warming Ceremony"
                image="https://acdn.indiabizclub.com/upload15A/33/2016/axq4zqsuax9z9z03qrt/house-warming-ceremony-service-1-878.jpg"
                title="House Warming Ceremony"
              />
            </Card>
          </Grid>
          <Grid className={classes.contentofh}>
            <Typography
              className={classes.description}
              variant="body1"
              color="textSecondary"
              component="p"
            >
              <span className={classes.title}>House Warming Ceremonies </span>
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
          {/*Naming ceremony*/}
          <Grid className={classes.contentofn}>
            <Typography
              className={classes.description}
              variant="body1"
              color="textSecondary"
              component="p"
            >
              <span className={classes.title}>Naming Ceremonies </span>
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid>
            <Card className={classes.card}>
              <CardMedia
                className={classes.mediaofn}
                component="img"
                alt="Naming Ceremony"
                image="https://i.pinimg.com/originals/d4/8e/8f/d48e8fef8878c556386a00abbefb0caf.jpg"
                title="Naming Ceremony"
              />
            </Card>
          </Grid>
          <div className={classes.footer}>
            <div className={classes.footerContent}>
              <Avatar className={classes.avatar}>
                <img
                  src="https://stgabrielshuyton.net/nursery1920/wp-content/uploads/sites/30/2019/10/star-3.png"
                  alt="logo"
                  className={classes.logo}
                />
              </Avatar>
              <h2 className={classes.ftitle}>Star Events</h2>
            </div>
            <IconButton aria-label="location" className={classes.icon}>
              <LocationOnIcon />
            </IconButton>
            <h4 className={classes.address}>
              2nd floor, A-212 <br />
              Annapoorna Complex,Bangalore-560056
            </h4>
            <IconButton aria-label="email" className={classes.icon}>
              <EmailIcon />
            </IconButton>
            <h4 className={classes.mail}>anupamaas12@gmail.com</h4>
            <br />
            <IconButton className={classes.icon}>
              <FacebookIcon />
              &nbsp;
              <InstagramIcon />
              &nbsp;
              <LinkedInIcon />
              &nbsp;
              <TwitterIcon />
              &nbsp;
              <YouTubeIcon />
              &nbsp;
            </IconButton>
            <br />
            <IconButton>
              <CopyrightIcon
                style={{
                  fontSize: "small",
                  color: "white",
                  marginLeft: "20px",
                }}
              />
            </IconButton>
            <h5 className={classes.copyright}>
              Star Events.All rights are reserved.
            </h5>
          </div>
        </Grid>
      </div>
    </Router>
  );
}
