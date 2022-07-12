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

  const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});
	
	const initPayment = (data) => {
		const options = {
			key: "rzp_test_GdM9bftAUebbNz",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8080/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		//const rzp1 = new window.Razorpay(options);
		//rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:8080/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: book.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

const {uname,mName,time,tName,seats} = useContext(context);
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
 <img draggable="false" className="h-6 w-6 object-contain" src="https://rukminim1.flixcart.com/www/96/96/promos/01/09/2020/a07396d4-0543-4b19-8406-b9fcbf5fd735.png" alt="Paytm Logo" />
 </div>
    <Button color="success" variant="outlined" onClick={handlePayment}>PAY</Button>
      {show ? <Alert style={summaryStyle} className="Aletr" severity="success">Booking is Successful!</Alert> : ""} 
</div>
    );
}