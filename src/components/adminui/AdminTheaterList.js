import React from 'react'
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import{AdminTheater} from './AdminTheater'
import { Button} from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import "./Theater.css"


export function AdminTheaterList() {
   
    const [theaterList,setTheaterList]=useState([]);
      
    const get=()=>{
       fetch("https://hacckathon-2-backend-sanjeev.herokuapp.com/theaters")
       .then((data)=>data.json())
       .then((th)=>setTheaterList(th))
    }   

    const del=(id)=>{
        fetch(`https://hacckathon-2-backend-sanjeev.herokuapp.com/theaters/${id}`,{ method:'DELETE',}).then((data)=>data.json()).then(()=>get());
      }
    useEffect(get,[]);
    const history=useHistory();
 return (
        <div className='theaterlist'>
            <h1>Theaters List</h1>
            <br/>
            <Button variant="outlined" color="error" onClick={()=>history.push("/admin/addtheater")}><AddIcon/>Add-Theaer</Button>
            <br/>
            {theaterList.map(({ id,name,movies,showtimes}) => 
      <AdminTheater
      deletButton={<Button className='delete' color='error'
        onClick={() =>del(id) 
        }><DeleteForeverTwoToneIcon /></Button>}
        
        editbtn={<Button className='delete' color='secondary'
        onClick={() =>history.push(`/update/theater/${id}`) }><ModeEditOutlineOutlinedIcon /></Button>}

      id={id} name={name} movies={movies} showtimes={showtimes} />)}
        </div>
    );
 }
