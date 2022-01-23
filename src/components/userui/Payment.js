import React from 'react';
import {useContext,useState } from "react";
import { useHistory} from "react-router-dom";
import {context}  from '../../App'
import { Button,Alert} from '@mui/material';
import './payment.css'
// using uuidv4 for generating unique id 
import { v4 as uuid } from 'uuid';

export  function Payment() {
const {uname,mName,time,tName,seats} = useContext(context);
console.log(uname,mName,time,tName,seats);
const [show, setShow] = useState(false);
  const summaryStyle = { display: show ? "block" : "none" }

  const history = useHistory();
  
  const addbooking=() => { 
    const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const bookingid=small_id
    const username=uname;
    const movieName =mName;
    const Seats= seats
    const theaterName = tName 
     const newBooking={ 
         bookingid,
         username,
         movieName,
        Seats,
         theaterName,
         time
      }

      fetch("https://61c41708f1af4a0017d992ac.mockapi.io/Bookings",{
          method:"POST",
          body: JSON.stringify(newBooking),
          headers:{"Content-Type": "application/json"},
        })
        .then((data)=>data.json())
  .then(()=>history.push("/movies"));
    
  setShow(!show)
      }



  return (
<div className='payment'>
    <h1>Booking Details</h1>
<div className='movie-d'>
    <div className='movieb-name'>
        <h4>{mName}</h4>
        <h5>Seats {seats}</h5>
    </div>
    <div className='theater-d'>
        <h5>Time-{time}</h5>
        <h5>@{tName}</h5>
    </div>
</div>
    <Button color="success" variant="outlined" onClick={addbooking}>PAY</Button>
      {show ? <Alert style={summaryStyle} className="Aletr" severity="success">Booking is Successful!</Alert> : ""} 
</div>
    );
}