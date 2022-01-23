import React from 'react'
import './user.css'
import {useState} from 'react'
import {Button} from '@mui/material';
import { useHistory} from "react-router-dom";
import TextField from '@mui/material/TextField';


export function AddUsers( ) {
    const history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const adduser=() => {
        const newUser = {
            name,
            email
        }
        fetch("https://61c41708f1af4a0017d992ac.mockapi.io/Users",{
            method:"POST",
            body: JSON.stringify(newUser),
            headers:{"Content-Type": "application/json"},
          })
          .then((data)=>data.json())
          .then(()=>history.push("/admin/users"));
        }
   
    return (
        <div className='adduser'>
             <h2>Add Users</h2>
            <br/>
            <TextField id="standard-basic" label="Name" variant="standard"  onChange={(event) => setName(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setEmail(event.target.value)}/>
            <br/>
            <Button type="submit" variant="contained"
            onClick={adduser}
                >Add User</Button>
        </div>
    )
}


