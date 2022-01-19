import React from 'react'
import './Movies.css'
import { useEffect, useState } from "react";
import { useHistory,useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



export function MovieDetails() {
    
    const {id}= useParams();
    console.log(id);
  const [movie,setMovie]=useState([]);
  const getMovie=()=>{
    fetch(`https://61c41708f1af4a0017d992ac.mockapi.io/movies/${id}`,
    {method:"GET"}).then((data)=>data.json()).then((mv)=>setMovie(mv));
  };
 
 useEffect(getMovie);
    const history=useHistory();
    const[{name,poster,rating,votes,genres,language,duration, releaseDate}]=[movie]
 
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
