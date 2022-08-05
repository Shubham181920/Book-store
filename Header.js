import React from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {NavLink} from 'react-router-dom';
 

const Header = () => {
  return (
    <div>
        <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
            <Toolbar>
        <NavLink to="/" style={{color:"white"}} >
        <Typography><AutoStoriesIcon/></Typography> 
        </NavLink> 
        <Tabs sx={{ml:'auto'}} textColor="inherit" >        
            <Tab LinkComponent={NavLink} to ="/books" label='Books' />
            <Tab LinkComponent={NavLink} to ="/add" label='Add Books'/>
            <Tab LinkComponent={NavLink} to ="/about" label='About Us' />
        </Tabs>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Header;
