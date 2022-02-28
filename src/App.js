import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WorkExperience from './components/WorkExperience';
import Navbar from './components/Navbar';
import { SetMealOutlined } from '@mui/icons-material';
import Projects from './components/Projects';
import ParticlesBackground from './components/ParticlesBackground';
import Fade from 'react-reveal/Fade';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
import Campus from './components/Campus'




const sidebar = {
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};



export default function App() {

  

  const [mode,setMode]= React.useState('dark');

  const changeMode=()=>{
    if (mode==='dark'){
      setMode('light');
    }
    else{
      setMode('dark');
    }
  }

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <div>
      
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      <Router>
      
        <ParticlesBackground/>
        
        <Navbar mode={mode==='dark'? true: false} changeMode={changeMode}></Navbar>
        
        
        <Routes>
          <Route path="/" element={<Home></Home>}>
              
            </Route>
            
            <Route path="/work" element={<WorkExperience></WorkExperience>}>
              
              
              
            </Route>

            <Route path="/projects" element={<Projects ></Projects>}>
            </Route>
            <Route path="/campus" element={<Campus ></Campus>}>
            </Route>


          </Routes>
              <br></br> <br></br>
            <Footer></Footer>
            
          </Router>

         
      
    </ThemeProvider>
    </div>
  );
}

