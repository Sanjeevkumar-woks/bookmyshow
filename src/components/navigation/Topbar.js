import React, { useContext } from 'react';
import './navbar.css'
import { Navbar,Container,Nav} from 'react-bootstrap';
import { useHistory} from "react-router-dom";
import {Button,Stack} from '@mui/material';
import MovieFilterTwoToneIcon from '@mui/icons-material/MovieFilterTwoTone';
import { context } from '../../App';

export  function Topbar({ button }) {
  const {uname} = useContext(context);

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
      {
        uname? (<p>{uname}</p>):
        (<Button variant="outlined" onClick={()=>history.push("/login")}>Login</Button>)
      }

    </Stack>
    {button}
  </Navbar>
  );
}
