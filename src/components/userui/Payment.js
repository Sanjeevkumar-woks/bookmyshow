import React from 'react';
import axios from "axios";
import {useContext,useState } from "react";
import { useHistory} from "react-router-dom";
import {context}  from '../../App'
import { Button,Alert} from '@mui/material';
import './payment.css'
// using uuidv4 for generating unique id 
import { v4 as uuid } from 'uuid';

export  function Payment() {

  
	
	const initPayment = (data) => {
		const options = {
			key: "rzp_test_GdM9bftAUebbNz",
			amount: data.amount,
			currency: data.currency,
			name: movied.name,
			description: "Test Transaction",
			image: movied.poster,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "https://razorpaybackend.herokuapp.com/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
          addbooking();
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "https://razorpaybackend.herokuapp.com/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: amount });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

const {uname,mName,time,tName,seats,movied,amount} = useContext(context);
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

const dseat=seats.toString()
  return (
<div className='payment'>
    <h1>Booking Details</h1>
<div className='movie-d'>
    <div className='movieb-name'>
        <h4>{mName}</h4>
        <h5>Seats {dseat}</h5>
    </div>
    <div className='theater-d'>
        <h5>Time-{time}</h5>
        <h5>@{tName}</h5>
    </div>
</div>
<div>
 </div>
    <Button color="success" variant="outlined" onClick={handlePayment}>PAY</Button>
      {show ? <Alert style={summaryStyle} className="Aletr" severity="success">Booking is Successful!</Alert> : ""} 
</div>
    );
}