import React from 'react'
import './Movies.css'
import { useEffect, useState } from "react";
import { useHistory,useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {useContext } from "react";
import {context}  from '../../App'



export function MovieDetails() {
    
    const {id}= useParams();
  const [movie,setMovie]=useState([]);
  const getMovie=()=>{
    fetch(`https://hacckathon-2-backend-sanjeev.herokuapp.com/movies/${id}`,
    {method:"GET"}).then((data)=>data.json()).then((mv)=>setMovie(mv));
  };
 
 useEffect(getMovie);
    const history=useHistory();
    const[{name,poster,rating,votes,genres,language,duration, releaseDate}]=[movie]
    //seting movie name to the boooking variable
    const {setMName} = useContext(context);
    setMName(name);
    return (
        <div className='movie-details'>
            <div className='Bck-poster'>
        <img src={poster}className='movie-pos' alt=""/>
            </div>
            <div className='summery'>
                <h1>{name}</h1>
                <h2><FavoriteBorderOutlinedIcon color="error"/>&nbsp;{rating}Ratings&nbsp;&nbsp; {votes}K Votes</h2>
                <h3>{language}</h3>
                <h4>{genres}</h4>
                <h5>Duration {duration}&nbsp;&nbsp;Released On:{releaseDate}</h5>
                <Button  variant="danger"
                 onClick={()=>history.push(`/theatersList`)}
                 >Book-Tickets</Button>
            </div>
        </div>
    )
}
