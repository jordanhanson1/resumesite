import React, {Component, useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import "../assets/work.css"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import giganetworks from '../assets/giganetworks.jpeg';
import JavascriptIcon from '@mui/icons-material/Javascript';
import Javascript from '@mui/icons-material/Javascript';
import { Avatar } from '@mui/material';


const Campus = ()=>{
    
    const [flip1,setFlip1]=useState(false);
    const [flip2,setFlip2]=useState(false);
    const [expande3,setExapande3]=useState(false);

      

    return (     
  <Box component="div" align="center" style={{justifyContent: 'center'}} style={{height: "100%"}} >
        <Typography align={'center'} variant={'h3'}>Campus Experience</Typography>
      <Grid container align="center" style={{justifyContent: 'center'}} justify="center">
          <Grid item xs={12} sm={8} md={4}>
              <ReactCardFlip isFlipped={flip1} flipDirection="vertical">

                {/* Card  Giga */}
                <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                        <CardActionArea  >
                          
                          <CardMedia
                            component="img"
                            alt="Giganetworks Logo"
                            height="140"
                            image={require("../assets/acm.jpg")}
                          />
                          <CardContent  >
                            <Typography align='center' variant="h4" gutterBottom>
                              UF ACM
                            </Typography>
                            <Typography align='center' variant="h6" color="textSecondary">
                              Marketing Lead
                            </Typography>
                            <Typography align='center' variant="h8" color="textSecondary">
                              Summer 2021 to Summer 2022
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{justifyContent: 'center'}}>
                       
                         
                          <Button variant="contained" size="small" onClick={()=>setFlip1(!flip1)}>
                            Description
                          </Button>
                        
                         
                        </CardActions>
                      </Card>

                      {/* Card 2 Giga */}
                      <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                        <CardActionArea  >
                          
                          <CardContent>
                              <br></br>
                              <br></br>
                            <Typography align='center' variant="h5" gutterBottom>
                            Description
                            </Typography>
                            
                            <Typography align='center' variant="body2" color="textSecondary">
                                Increased ACM virtual membership by over 400 members by making announcements in classes with CS students and reaching out to potential members on social media.
                                Worked with a team of 8 other officers to host professional and social events for a club with 950+ members.
                            </Typography>
        

                            
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{justifyContent: 'center'}}>
                        <br></br>
                        
                          <Button variant="contained" size="small" onClick={()=>setFlip1(!flip1)}>
                            Click to Flip
                          </Button>
                        </CardActions>
                      </Card>
            </ReactCardFlip>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <ReactCardFlip isFlipped={flip2} flipDirection="vertical">

                {/* Card  AMEX */}
                <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                        <CardActionArea  >
                          
                          <CardMedia
                            component="img"
                            alt="Amex Logo"
                            height="140"
                            image={require("../assets/dm.jpeg")}
                          />
                          <CardContent  >
                            <Typography align='center' variant="h4" gutterBottom>
                             UF Dance Marathon
                            </Typography>
                            <Typography align='center' variant="h6" color="textSecondary">
                              Captain
                            </Typography>
                            <Typography align='center' variant="h8" color="textSecondary">
                              Fall 2020 to Summer 2022
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{justifyContent: 'center'}}>
                       
                          
                          <Button variant="contained" size="small" onClick={()=>setFlip2(!flip2)}>
                            Description
                          </Button>
                        
                         
                        </CardActions>
                      </Card>

                      {/* Card 2 AMEX */}
                      <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                        <CardActionArea  >
                          
                          <CardContent>
                          <br></br>
                          <br></br>
                            <Typography align='center' variant="h5" gutterBottom>
                            Description
                            </Typography>
                            <Typography align='center' variant="body2" color="textSecondary">
                                Raised $2,700+ for Shands Children’s Hospital by reaching out to connections using social media and email.
                                Collaborating with a team to implement maintenance and content management for the Dance Marathon Website and iOS app using JavaScript, Swift, and PHP.
                            </Typography>
                        
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{
                          justifyContent: 'center'
                            }}>
                          <Button  variant="contained" size="small" onClick={()=>setFlip2(!flip2)}>
                            Click to Flip
                          </Button>
                        </CardActions>
                      </Card>
            </ReactCardFlip>
            </Grid>
        </Grid>
    </Box>
);
}


export default Campus;