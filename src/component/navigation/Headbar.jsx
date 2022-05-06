import React,{useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import axios from 'axios';
import {config} from '../utils'

const Headbar = () => {
  const [auth] = useState(true);
  const [user, setuser] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // get the user detail using the axios call 
  useEffect(() => {
    axios.get("http://localhost:8080/auth/getuser", config).then((data) => {
     setuser(data.data.name)
    })
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="fixed" style={{
        Top: 0,
        backgroundImage: "linear-gradient( to right, #7b4397, #dc2430)"
      }}  >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Inventory App
          </Typography>
          {auth && (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography variant="h6" >
                {user}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Headbar;