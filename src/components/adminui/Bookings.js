import React from 'react'
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useHistory} from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';


export function BookingsList() {
    const get=()=>{
        fetch("https://61c41708f1af4a0017d992ac.mockapi.io/Bookings")
        .then((data)=>data.json())
        .then((bk)=>setBookingList(bk))
      }
    //   const del=(bookingid)=>{
    //     fetch(`https://61c41708f1af4a0017d992ac.mockapi.io/Bookings${bookingid}`,{ method:'DELETE',}).then((data)=>data.json()).then(()=>get());
    //   }
      const [bookingList,setBookingList]=useState([]);
      const history=useHistory();
       useEffect(get,[]);

    return (
        <div className='users'>
            <h1>All Bookings</h1>
            <br/>
            <Button variant="outlined" color="error" onClick={()=>history.push("/admin/addbooking")}><AddIcon/>Add-Booking</Button>    
        { bookingList.map(({bookingid,username,movieName,time,Seats,theaterName},index)=>(
                    <Bookings key={index} bookingid={bookingid} username={username} movieName={movieName} time={time} noOfSeats={Seats}theaterName={theaterName} />
                ))
            }
        </div>
    )
}




export function Bookings({bookingid,username,movieName,time,Seats,theaterName}) {
    return (
        <div className='user'> 
      <p><span>{bookingid}</span>
      <span >{username}</span>
      <span>{movieName}</span>
      <span>{Seats}</span>
      <span>{theaterName}</span></p>
        </div>
    )
}

export function AddBooking( ) {
    const history = useHistory();
    const [bookingid,setBookigid] = useState('');
    const [username,setUsername] = useState('');
    const [movieName,setMovieName] = useState('');
    const [Seats,setSeats] = useState('');
    const [theaterName,setTheaterName] = useState('');
    const addbooking=() => {  
       const newBooking={ 
           bookingid,
           username,
           movieName,
           Seats,
           theaterName
        }

        fetch("https://61c41708f1af4a0017d992ac.mockapi.io/Bookings",{
            method:"POST",
            body: JSON.stringify(newBooking),
            headers:{"Content-Type": "application/json"},
          })
          .then((data)=>data.json())
    .then(()=>history.push("/admin/booking"));
      
        }
    return (
        <div className='adduser'>
             <h2>Add Users</h2>
            <TextField id="standard-basic" label="Id" variant="standard" onChange={(event) => setBookigid(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Name" variant="standard"  onChange={(event) => setUsername(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setMovieName(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setSeats(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setTheaterName(event.target.value)}/>
            <br/>
            <Button type="submit" variant="contained"
            onClick={addbooking}
                >Add Booking</Button>
        </div>
    )

}

