import React from 'react'
import { Movie } from './Movie';
import './Movies.css'
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";

  
export  function  MovieList() {
    const get=()=>{
        fetch("https://61c41708f1af4a0017d992ac.mockapi.io/movies")
        .then((data)=>data.json())
        .then((mvi)=>setMovieList(mvi))
      }
      const [movieList,setMovieList]=useState([]);
      const history=useHistory();
       useEffect(get,[]);
    
    return (
        <>
        <br/>
        <h1>Recommanded Movie</h1>
        <div className='movie-container'>
            {movieList.map(({id,name,poster,rating,votes,genres}) => 
      <Movie 
      watchbtn={<Button  variant="danger" className='delete' color='secondary'
      onClick={()=>history.push(`/movie/${id}`) }>Watch-Movie</Button> }
      id={id} name={name} poster={poster} rating={rating} votes={votes} genres={genres} />)}
        </div>
        </>
    );
}
