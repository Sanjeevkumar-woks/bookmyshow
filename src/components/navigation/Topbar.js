import React from 'react';
import './navbar.css'
import { Navbar,Container,Nav} from 'react-bootstrap';
import { useHistory} from "react-router-dom";
import {Button,Stack} from '@mui/material';
import MovieFilterTwoToneIcon from '@mui/icons-material/MovieFilterTwoTone';

export  function Topbar({ button }) {
  const history=useHistory(); 
  return (
    <Navbar className='mainnav' bg="dark" variant="dark"> 
    <Container>
    <Navbar.Brand href="/">BookMyshow<MovieFilterTwoToneIcon/></Navbar.Brand>
    <Nav className="me-auto left">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/movies">Movies</Nav.Link>
      <Nav.Link href="/theatersList">Theater</Nav.Link>
      <Nav.Link href="/contactus">Contact-Us</Nav.Link>
    </Nav>
    </Container>
    <Stack className='rigth' direction="row" spacing={2}>
    <Button variant="outlined" onClick={()=>history.push("/login")}>Login</Button>
    <Button color="success" variant="outlined" onClick={()=>history.push("/signup")}>Signup</Button>
    <Button color="secondary" variant="outlined" onClick={()=>history.push("/admin/home")}>AdminUser</Button>
    </Stack>
    {button}
  </Navbar>
  );
}
