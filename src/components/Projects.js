import React, {useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxWidth } from "@mui/system";
import ReactCardFlip from 'react-card-flip';
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'





const Projects = ({mode}) => {
  const [flip1,setFlip1]=useState(false);
  const [flip2,setFlip2]=useState(false);
  const [flip3,setFlip3]=useState(false);

  

    
  return (
    <Box component="div" style={{height: "100%"}} >
        <Typography align={'center'} variant={'h3'}>Projects</Typography>
      <Grid container justify="center">
        {/* Projects */}
          <Grid item xs={12} sm={8} md={4}>
          <ReactCardFlip isFlipped={flip1} flipDirection="vertical">

            {/* Card  Giga */}
            <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                    <CardActionArea  >
                      
                      <CardMedia
                        component="img"
                        alt="Hatch Logo"
                        height="140"
                        image={require("../assets/hatch.png")}
                      />
                      <CardContent  >
                        <Typography align='center' variant="h4" gutterBottom>
                          Hatch
                        </Typography>
                        <Typography align='center' variant="h6" color="textSecondary">
                          Full Stack Web App
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                   
                      <Button target="_blank" href={"https://hatchmatch.app/"} size="small" color="primary">
                        Site Link
                      </Button>
                      <Button variant="contained" size="small" onClick={()=>setFlip1(!flip1)}>
                        Description
                      </Button>
                    
                     
                    </CardActions>
                  </Card>

                  {/* Card 2 Giga */}
                  <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                    <CardActionArea  >
                      
                      <CardContent>
                        <Typography align='center' variant="h5" gutterBottom>
                        Description
                        </Typography>
                        <Typography align='center' variant="body2" color="textSecondary">
                        Developed a platform to give college entrepreneurs the tools to connect and grow an idea. 
                        Currently in MVP phase with over 40 users testing. 
                        Created a real-time chat by using a Firebase Function that listens for changes. 
                        Designed a filtering feature that filters users by passions, skills, or city using a Firestore database document.
                        </Typography>
    

                         <CardActions style={{justifyContent: 'center'}}>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="React" color="info" size="small"  ></Chip>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Firebase" color="info" size="small"  ></Chip>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Javascript" color="info" size="small"  ></Chip>
                        </CardActions>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                      <Button variant="contained" size="small" onClick={()=>setFlip1(!flip1)}>
                        Click to Flip
                      </Button>
                    </CardActions>
                  </Card>
        </ReactCardFlip>
        </Grid>
        
        <Grid item xs={12} sm={8} md={4}>
          <ReactCardFlip isFlipped={flip2} flipDirection="vertical">

            {/* Card  Giga */}
            <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                    <CardActionArea  >
                      
                      <CardMedia
                        component="img"
                        alt="resQ Logo"
                        height="140"
                        image={require("../assets/resq.png")}
                      />
                      <CardContent  >
                        <Typography align='center' variant="h4" gutterBottom>
                          ResQ
                        </Typography>
                        <Typography align='center' variant="h6" color="textSecondary">
                          Full Stack Mobile Application
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                   
                      <Button target="_blank" href={"https://devpost.com/software/resq-3tng2a"} size="small" color="primary">
                        Devpost Link
                      </Button>
                      <Button variant="contained" size="small" onClick={()=>setFlip2(!flip2)}>
                        Description
                      </Button>
                    
                     
                    </CardActions>
                  </Card>

                  {/* Card 2 Giga */}
                  <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                    <CardActionArea  >
                      
                      <CardContent>
                        <Typography align='center' variant="h5" gutterBottom>
                        Description
                        </Typography>
                        <Typography align='center' variant="body2" color="textSecondary">
                        Developed a full stack mobile application with three other students in 36 hours, 
                        resulting in 1st Overall.
                        </Typography>
    

                         <CardActions style={{justifyContent: 'center'}}>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="React Native" color="info" size="small"  ></Chip>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Firebase" color="info" size="small"  ></Chip>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Google Cloud Functions" color="info" size="small"  ></Chip>
                        </CardActions>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                      <Button variant="contained" size="small" onClick={()=>setFlip2(!flip2)}>
                        Click to Flip
                      </Button>
                    </CardActions>
                  </Card>
        </ReactCardFlip>
        </Grid>

        <Grid item xs={12} sm={8} md={4}>
          <ReactCardFlip isFlipped={flip3} flipDirection="vertical">

            {/* Card  Giga */}
            <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                    <CardActionArea  >
                      
                      <CardMedia
                        component="img"
                        alt="MissionDM Logo"
                        height="140"
                        image={require("../assets/missionDM.jpeg")}
                      />
                      <CardContent  >
                        <Typography align='center' variant="h4" gutterBottom>
                          MissionDM
                        </Typography>
                        <Typography align='center' variant="h6" color="textSecondary">
                          Full Stack Node and React App
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                   
                      <Button target="_blank" href={"https://missiondmatuf.com/"} size="small" color="primary">
                        Site Link
                      </Button>
                      <Button variant="contained" size="small" onClick={()=>setFlip3(!flip3)}>
                        Description
                      </Button>
                    
                     
                    </CardActions>
                  </Card>

                  {/* Card 2 Giga */}
                  <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                    <CardActionArea  >
                      
                      <CardContent>
                        <Typography align='center' variant="h5" gutterBottom>
                        Description
                        </Typography>
                        <Typography align='center' variant="body2" color="textSecondary">
                        Created a full-stack web app with — users resulting in — for Shands Children’s Hospital.
                        The app is an assassins style game using React.js for the frontend and Node/Express API using Firebase Firestore and Google Cloud hosting.</Typography>
    

                         <CardActions style={{justifyContent: 'center'}}>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="React" color="info" size="small"  ></Chip>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Node" color="info" size="small"  ></Chip>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Express" color="info" size="small"  ></Chip>
                        <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Firebase" color="info" size="small"  ></Chip>
                        </CardActions>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                      <Button variant="contained" size="small" onClick={()=>setFlip3(!flip3)}>
                        Click to Flip
                      </Button>
                    </CardActions>
                  </Card>
        </ReactCardFlip>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Projects;