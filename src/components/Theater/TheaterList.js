import React from 'react'
import { useEffect, useState } from "react";
import{Theater} from './Theater'
import "./Theater.css"


export function TheaterList() {
   
    const [theaterList,setTheaterList]=useState([]);
      
    const get=()=>{
       fetch("https://61c41708f1af4a0017d992ac.mockapi.io/Theater")
       .then((data)=>data.json())
       .then((th)=>setTheaterList(th))
    }   
    useEffect(get,[]);
 return (
        <div className='theaterlist'>
            <h1>Theaters List</h1>
            {theaterList.map(({ id,name,movies,showtimes}) => 
      <Theater id={id} name={name} movies={movies} showtimes={showtimes} />)}
        </div>
    );
 }
