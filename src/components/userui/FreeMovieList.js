import React from 'react'
import './Movies.css'
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Card} from "react-bootstrap";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
  

// Movies which everyone can see even Without Login
export  function  FreeMovieList() {
    const get=()=>{
        fetch("https://hacckathon-2-backend-sanjeev.herokuapp.com/movies")
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
      <FreeMovie 
      watchbtn={<Button  variant="danger" className='delete' color='secondary'
      onClick={()=>history.push(`/movie/${id}`) }>Watch-Movie</Button> }
      id={id} name={name} poster={poster} rating={rating} votes={votes} genres={genres} />)}
        </div>
        </>
    );
}


 function FreeMovie({ watchbtn,id,name,poster,rating,votes,genres }) {
    return (
    <Card className='movie'>
      <img src={poster} alt="" className='movie-poster' />
      <h4 className='movie-name'>{name}</h4>
      <div className='movie-specs'>
          <p><FavoriteBorderOutlinedIcon/>{rating}</p>
          <p>{votes}K Votes</p>
      </div>
      {watchbtn}
    </Card>);
}

