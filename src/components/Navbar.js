import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DarkModeToggle from "react-dark-mode-toggle";
import avatar from '../assets/avatar.jpg'



const pages = ['Work Experience','Projects', 'Contact'];

const Navbar = ({mode,changeMode}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [page,setPage]=React.useState("/");
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (location) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{background: 'transparent'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem   onClick={()=>{window.location.href="/"; handleCloseNavMenu();}}>
                  <Typography textAlign="center"> Home</Typography>
                </MenuItem>
              
                <MenuItem   onClick={()=>{window.location.href="work"; handleCloseNavMenu();}}>
                  <Typography textAlign="center"> Work Experience</Typography>
                </MenuItem>
                <MenuItem   onClick={()=>{window.location.href="projects"; handleCloseNavMenu();}}>
                  <Typography textAlign="center"> Projects</Typography>
                </MenuItem>
                <MenuItem  onClick={()=>{window.location.href="campus"; handleCloseNavMenu();}}>
                  <Typography textAlign="center"> Campus Experience</Typography>
                </MenuItem>
                
             
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            
          <Button
                
                onClick={()=>{window.location.href="/"; handleCloseNavMenu();}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>

            <Button    
                onClick={()=>{window.location.href="work"; handleCloseNavMenu();}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Work Experience
              </Button>
              <Button
                
                onClick={()=>{window.location.href="projects"; handleCloseNavMenu();}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Projects
              </Button>
              <Button
                
                onClick={()=>{window.location.href="campus"; handleCloseNavMenu();}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Campus Experience
              </Button>
              
          </Box>
          
                
          <Box sx={{flexGrow: 0 }}>
            <Tooltip title="Home Page">
              <IconButton onClick={()=>{window.location.href='/'}} sx={{ m:1 }}>
                <Avatar alt="Matthew Hanson" src={avatar} />
              </IconButton>
            </Tooltip>

           

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;