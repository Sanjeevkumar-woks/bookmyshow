import React from 'react'
import './Movies.css'
import { Card} from "react-bootstrap";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export  function Movie({ watchbtn,id,name,poster,rating,votes,genres }) {

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

