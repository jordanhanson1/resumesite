import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import ArticleIcon from '@mui/icons-material/Article';
import Paper from '@mui/material/Paper';
import pdf from '../assets/MatthewHansonResume.pdf';



const Footer = () => {
  

  return (
    <Paper sx={{ background: 'transparent', position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={2}>
        <BottomNavigation sx={{background: 'transparent'}}
            showLabels
            >
            
            <a href="https://github.com/jordanhanson1" target="_blank">
            <BottomNavigationAction 
            label="Github" 
            icon={<GitHubIcon />}
            
            >
            </BottomNavigationAction>
            </a>
            
            <a href="https://www.linkedin.com/in/matthew-jordan-hanson-62b8171b6/" target="_blank">
            <BottomNavigationAction label="Linked In" icon={<LinkedInIcon />} />
            </a>
            <a target="_blank" href="mailto: matthew.hanson.tech@gmail.com">
            <BottomNavigationAction label="Email" icon={<EmailIcon />} />
            </a>
            <a href="https://jordanhanson1.github.io/resume/" target="_blank">
            <BottomNavigationAction label="Resume" icon={<ArticleIcon />} />
            </a>
        </BottomNavigation>
</Paper>
  );
};

export default Footer;