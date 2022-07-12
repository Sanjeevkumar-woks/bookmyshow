import './App.css';
import { Switch, Route} from "react-router-dom";
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Login from './components/userui/Login';
import Signup from './components/userui/Signup';
import { MovieList } from './components/userui/MovieList';
import { MovieDetails } from './components/userui/MovieDetails';
import { Topbar } from './components/navigation/Topbar';
import {TheaterList} from './components/Theater/TheaterList'
import { Seat } from './components/Theater/Seats/Seat';
import { useState } from "react";
import {Button,Paper} from '@mui/material';
import { AdminNav } from './components/adminui/AdminNav';
import { AddMovies } from './components/adminui/AddMovie';
import { AdminMovieList } from './components/adminui/AdminMovieList';
import { AdminTheaterList } from './components/adminui/AdminTheaterList';
import { AddTheater } from './components/adminui/AddTheater';
import { UpdateMovie } from './components/adminui/UpdateMovie';
import { UpdateTheater } from './components/adminui/UpdateTheater';
import { UserList } from './components/adminui/users/UserList';
import { AddBooking, BookingsList } from './components/adminui/Bookings';
import { createContext } from 'react';
import { ContactUs } from './components/userui/ContactUs';
import { FreeMovieList } from './components/userui/FreeMovieList';
import { Payment } from './components/userui/Payment';

export const context = createContext("");

function App() {

  const [mode,setMode]=useState("dark");
  
  const[uname, setUname]=useState("");
  const[email,setemail]=useState("");
  const[mName,setMName]=useState("");
  const [time,setTime]=useState("");
  const [seats,setSeats]=useState("");
  const[tName,setTName]=useState("");


   const theme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    // creating Contaxt For seating up Booking Details
    <context.Provider value={{uname,setUname,email,setemail,mName,setMName,time,setTime,seats,setSeats,tName,setTName}}>
    <div className="App">
      <ThemeProvider theme={theme}>
<Paper sx={{minHeight:'100vh'}} elevation={20} >
      <Topbar  button={<Button onClick={()=>setMode(mode==='dark'?'light':'dark')}>{mode==='dark'?<LightModeIcon/>:<DarkModeIcon/>}</Button>}/>
        <Switch>
           <Route exact path="/">
           {/* <CarouselList/> */}
           <FreeMovieList/>
          </Route>
          <Route exact path="/login">
             <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/contactus">
            <ContactUs/>
          </Route>
          <Route exact path="/movies">
            <MovieList/>
          </Route>
          <Route path="/movie/:id">
            <MovieDetails/>
          </Route>
          <Route path="/admin/home">
            <AdminNav/>
            <MovieList/>
          </Route>
          <Route path="/admin/movies">
            <AdminNav/>
            <AdminMovieList/>
          </Route>
          <Route path="/admin/addmovie">
            <AdminNav/>
            <AddMovies/>
          </Route>
          <Route path="/update/movies/:id">
            <AdminNav/>
            <UpdateMovie/>
          </Route>
          <Route path="/admin/theaters">
            <AdminNav/>
            <AdminTheaterList/>
          </Route>
          <Route path="/admin/addtheater">
            <AdminNav/>
            <AddTheater/>
          </Route>
          <Route path="/update/theater/:id">
            <AdminNav/>
            <UpdateTheater/>
          </Route>
          <Route path="/admin/users">
            <AdminNav/>
            <UserList/>
          </Route>
          <Route path="/admin/booking">
            <AdminNav/>
            <BookingsList/>
          </Route>
          <Route path="/admin/addbooking">
            <AdminNav/>
            <AddBooking/>
          </Route>
           <Route exact path="/theatersList">
            {uname? (<TheaterList/>):(<Login/>)}
           </Route>
          <Route path="/seatselection">
          <Seat/>
          </Route> 
           <Route path="/payment">
             <Payment/>
          </Route>  
        </Switch>
        </Paper>
        </ThemeProvider>
        </div>
        </context.Provider>
  );
}

export default App;
