import { Button} from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import './Movies.css'
import { Card } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export function AdminMovieList() {
  const get=()=>{
    fetch("https://hacckathon-2-backend-sanjeev.herokuapp.com/movies")
    .then((data)=>data.json())
    .then((mvi)=>setMovieList(mvi))
  }
  const del=(id)=>{
    fetch(`https://hacckathon-2-backend-sanjeev.herokuapp.com/movies/${id}`,{ method:'DELETE',}).then((data)=>data.json()).then(()=>get());
  }
  const [movieList,setMovieList]=useState([]);
  const history=useHistory();
   useEffect(get,[]);
  return (
    <div className='movie-container'>
      
      <Button variant="outlined" color="error" onClick={()=>history.push("/admin/addmovie")}><AddIcon/>Add-Movie</Button>
     
      {movieList.map(({ id,name,poster,rating,votes,genres }) => 
      <AdminMovie 

      deletButton={<Button className='delete' color='error'
        onClick={() =>del(id) 
        }><DeleteForeverTwoToneIcon /></Button>}
        
        editbtn={<Button className='delete' color='secondary'
        onClick={() =>history.push(`/update/movies/${id}`) }><ModeEditOutlineOutlinedIcon /></Button>}

      key={id} name={name} poster={poster} rating={rating} votes={votes} genres={genres} />)}
    </div>
  );
}


 function AdminMovie({ deletButton,editbtn,id,name,poster,rating,votes,genres }) {
    return (
    <Card className='movie'>
      <img src={poster} alt="" className='movie-poster' />
      <h4 className='movie-name'>{name}</h4>
      <div className='movie-specs'>
          <p><span><FavoriteBorderOutlinedIcon/>{rating}</span></p>
          <p>{votes}K Votes</p>
      </div>
      {deletButton} {editbtn}
    </Card>);
}

