import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom'


 const LoginRoutes = ()=> {
    const icon_style = {
        color: "#dddae0",
        margin: 3
    }
    return (
        <Box sx={{ display: 'flex' }}>


            <Drawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 200,
                        boxSizing: 'border-box',
                        marginTop: 8,
                        backgroundColor: "#3b2c4d"
                    },
                }}
                variant="permanent"
                anchor="left"
            >

                <Divider />


                <List style={icon_style}>
                    <ListItem button key="login"  >
                        <LoginIcon style = {{margin:10}} />
                        <ListItemText primary="login" />
                    </ListItem>

                    <ListItem button key="Register"  >
                        <HowToRegIcon style = {{margin:10}} />
                        <ListItemText primary="Register" />
                    </ListItem>    
                </List>
            </Drawer>


        </Box>

    );
}
export default LoginRoutes;