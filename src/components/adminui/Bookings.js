import React from 'react'
import {Button} from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory} from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';


export function BookingsList() {
    const get=()=>{
        fetch("https://61c41708f1af4a0017d992ac.mockapi.io/Bookings")
        .then((data)=>data.json())
        .then((bk)=>setBookingList(bk))
      }
      const del=(bookingid)=>{
        fetch(`https://61c41708f1af4a0017d992ac.mockapi.io/Bookings${bookingid}`,{ method:'DELETE',}).then((data)=>data.json()).then(()=>get());
      }
      const [bookingList,setBookingList]=useState([]);
      const history=useHistory();
       useEffect(get,[]);

    return (
        <div className='users'>
            <h1>All Bookings</h1>
            <br/>
            <Button variant="outlined" color="error" onClick={()=>history.push("/admin/addbooking")}><AddIcon/>Add-Booking</Button>    
        { bookingList.map(({bookingid,username,email,movieName,time,noOfSeats,theaterName},index)=>(
                    <Bookings
                    deletButton={<Button className='delete' color='error'
                    onClick={() =>del(bookingid) 
                    }><DeleteForeverTwoToneIcon /></Button>}

                    editButton={<Button sx={{marginRight:6}}
                        onClick={()=>{history.push(`/editbooking/${bookingid}`)}}>
                    
                        <EditIcon/></Button>}
                   key={index} bookingid={bookingid} username={username} email={email} movieName={movieName} time={time} noOfSeats={noOfSeats}theaterName={theaterName} />
                ))
            }
        </div>
    )
}




export function Bookings({deletButton,editButton,bookingid,username,email,movieName,time,noOfSeats,theaterName}) {
    return (
        <div className='user'> 
      <p><span>{bookingid}</span>
      <span >{username}</span>
      <span>{email}</span>
      <span>{movieName}</span>
      <span>{noOfSeats}</span>
      <span>{theaterName}</span>
      <span>{deletButton}</span>
      <span>{editButton}</span></p>
        </div>
    )
}

export function AddBooking( ) {
    const history = useHistory();
    const [bookingid,setBookigid] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [movieName,setMovieName] = useState('');
    const [noOfSeats,setNoOfSeats] = useState('');
    const [theaterName,setTheaterName] = useState('');
    const addbooking=() => {  
       const newBooking={ 
           bookingid,
           username,
           email,
           movieName,
           noOfSeats,
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
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setEmail(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setMovieName(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setNoOfSeats(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setTheaterName(event.target.value)}/>
            <br/>
            <Button type="submit" variant="contained"
            onClick={addbooking}
                >Add Booking</Button>
        </div>
    )

}

