import React from 'react'
import {User} from './User'
import './user.css'
import {Button} from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory} from "react-router-dom";
import { useEffect, useState } from "react";



export function UserList() {
    const get=()=>{
        fetch("https://61c41708f1af4a0017d992ac.mockapi.io/Users")
        .then((data)=>data.json())
        .then((us)=>setUserList(us))
      }
      const del=(_id)=>{
        fetch(`https://61c41708f1af4a0017d992ac.mockapi.io/Users${_id}`,{ method:'DELETE',}).then((data)=>data.json()).then(()=>get());
      }
      const [userList,setUserList]=useState([]);
      const history=useHistory();
       useEffect(get,[]);

    return (
        <div className='users'>
            <h1>All Users</h1>
            <br/>
            <Button variant="outlined" color="error" onClick={()=>history.push("/admin/adduser")}><AddIcon/>Add-User</Button>
            
  { userList.map(({_id,username,email},index)=>(
                    <User 
                    deletButton={<Button className='delete' color='error'
                    onClick={() =>del(_id) 
                    }><DeleteForeverTwoToneIcon /></Button>}

                    editButton={<Button sx={{marginRight:6}}
                        onClick={()=>{history.push(`/edituser/${_id}`)}}>
                    
                        <EditIcon/></Button>}
                   key={index} _id={_id} username={username} email={email} />
                ))
            }
        </div>
    )
}


