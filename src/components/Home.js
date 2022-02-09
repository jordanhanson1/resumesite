import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from '../assets/avatar.jpg'


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(2),
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    margin:"auto"
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Matthew Hanson" />
      </Grid>
      <Typography align='center' className={classes.title} variant="h4">
        <Typed strings={["Jordan Matthew Hanson"]} typeSpeed={20} />
      </Typography>

      <Typography align='center' className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Computer Scientist",
            "Software Engineer",
            "Life Long Learner"
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Home;