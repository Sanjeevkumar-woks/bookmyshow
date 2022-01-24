import React from 'react'
import {AppBar,Box,Toolbar,Typography,Button } from '@mui/material';
import { useHistory} from "react-router-dom";


export  function AdminNav() {
    const history=useHistory();   
    return (
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className='main' variant="h6" color="inherit" component="div">
          <Button color="error" onClick={()=>history.push("/admin/movies")}>Movies</Button> 
          <Button color="error" onClick={()=>history.push("/admin/theaters")}>Theater</Button>
          <Button color="error" onClick={()=>history.push("/admin/users")}>Users</Button>
          <Button color="error" onClick={()=>history.push("/admin/booking")}>Bookings</Button>   
          </Typography>      
        </Toolbar>
      </AppBar>
    </Box>
    )
}


