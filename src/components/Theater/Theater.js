import React from 'react'
import "./Theater.css"
import { Button} from '@mui/material';
import { useHistory} from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {useContext } from "react";
import {context}  from '../../App'

export function Theater({id,name,movies,showtimes}) {
    const history=useHistory();
    const {setTName} = useContext(context);
    const {setTime} = useContext(context);
    setTName(name);
    setTime(showtimes[0]);
    return (
        <div className='theater'>
            <div>      
            <h2><span><FavoriteBorderOutlinedIcon color='error'/></span>{name}</h2>
            </div>
            <div className='time'>
               <Button onClick={()=>history.push(`/seatselection`)} variant="outlined">{showtimes[0]}</Button>
               <Button onClick={()=>history.push(`/seatselection`)} variant="outlined">{showtimes[1]}</Button>
               <Button onClick={()=>history.push(`/seatselection`)} variant="outlined">{showtimes[2]}</Button>
            </div>
        </div>
    )
}
