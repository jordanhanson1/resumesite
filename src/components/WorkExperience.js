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


const WorkExperience = ()=>{
    
    const [flip1,setFlip1]=useState(false);
    const [flip2,setFlip2]=useState(false);
    const [expande3,setExapande3]=useState(false);

      

    return (     
  <Box component="div" align="center" style={{justifyContent: 'center'}} style={{height: "100%"}} >
        <Typography align={'center'} variant={'h3'}>Work Experience</Typography>
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
                            image={require("../assets/giganetworks.jpeg")}
                          />
                          <CardContent  >
                            <Typography align='center' variant="h4" gutterBottom>
                              Giganetworks
                            </Typography>
                            <Typography align='center' variant="h6" color="textSecondary">
                              Software Engineering Intern
                            </Typography>
                            <Typography align='center' variant="h8" color="textSecondary">
                              Summer 2021
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{justifyContent: 'center'}}>
                       
                          <Button target="_blank" href={"https://giganetworks.com/"} size="small" color="primary">
                            Company Link
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
                            Lead developer of a team of 3 other Interns to develop a full-stack CRM web application which improved the organization of projects, clients, sales, events, and renewals. 
                            Directed weekly meetings to ascertain the team’s design needs and functionality requirements. 
                            Implemented features such as soft deletes, email remainders, user authentication, and database backups.
                            </Typography>
        

                             <CardActions style={{justifyContent: 'center'}}>
                            <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Javascript" color="info" size="small"  ></Chip>
                            <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Ruby on Rails" color="info" size="small"  ></Chip>
                            <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="MySQL" color="info" size="small"  ></Chip>
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

                {/* Card  AMEX */}
                <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                        <CardActionArea  >
                          
                          <CardMedia
                            component="img"
                            alt="Amex Logo"
                            height="140"
                            image={require("../assets/amex.jpeg")}
                          />
                          <CardContent  >
                            <Typography align='center' variant="h4" gutterBottom>
                              American Express
                            </Typography>
                            <Typography align='center' variant="h6" color="textSecondary">
                              Incoming SWE Intern
                            </Typography>
                            <Typography align='center' variant="h8" color="textSecondary">
                              Summer 2022
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{justifyContent: 'center'}}>
                       
                          <Button target="_blank" href={"https://www.americanexpress.com/"} size="small" color="primary">
                            Company Link
                          </Button>
                          <Button variant="contained" size="small" onClick={()=>setFlip2(!flip2)}>
                            Description
                          </Button>
                        
                         
                        </CardActions>
                      </Card>

                      {/* Card 2 AMEX */}
                      <Card variant="outlined" style={{height:350,maxWidth:345, margin:"3rem auto"}} >
                        <CardActionArea  >
                          
                          <CardContent>
                            <Typography align='center' variant="h5" gutterBottom>
                            Description
                            </Typography>
                            <Typography align='center' variant="body2" color="textSecondary">
                            Incoming Software Engineering Intern for American Express in Phoenix, Arizona. 
                            Excited to learn and develop software for AMEX.
                            </Typography>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            
                            

                             <CardActions style={{justifyContent: 'center'}}>
                            <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Excited" color="info" size="small"  ></Chip>
                            <Chip  style={{justifyContent: 'center',margin:"0.2rem"}} label="Prepared" color="info" size="small"  ></Chip>
                            </CardActions>
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


export default WorkExperience;