import React from 'react'
import {User} from './User'
import './user.css'
import { useEffect, useState } from "react";

export function UserList() {
    const get=()=>{
        fetch("https://hacckathon-2-backend-sanjeev.herokuapp.com/users")
        .then((data)=>data.json())
        .then((us)=>setUserList(us))
      }
      const [userList,setUserList]=useState([]);
       useEffect(get,[]);

    return (
        <div className='users'>
            <h1>All Users</h1>        
  { userList.map(({_id,username,email},index)=>(
                    <User key={index} _id={_id} username={username} email={email} />
                ))
            }
        </div>
    )
}


