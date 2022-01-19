import React from 'react'
import './user.css'
import {useState} from 'react'
import {Button} from '@mui/material';
import { useHistory,useParams} from "react-router-dom";
import TextField from '@mui/material/TextField';


export function EditUser( {users,setUser}) {
 
    const history = useHistory();
    let {id} = useParams(); 
    const user=users.find(user=>user.id===+id);
    const [name,setName] = useState(user.name);
    const [age,setAge] = useState(user.age);
    const [position,setPosition] = useState(user.position);
    const [office,setOffice] = useState(user.office);
    const [salary,setSalary] = useState(user.salary);
   
    return (
        <div className='adduser'>
             <h2>Edit Users</h2>
            <br/>
            <TextField id="standard-basic" value={name} label="Name" variant="standard"  onChange={(event) => setName(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" value={age} label="Age" variant="standard" onChange={(event) => setAge(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" value={position} label="Position" variant="standard"  onChange={(event) => setPosition(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" value={office} label="Office" variant="standard"  onChange={(event) => setOffice(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" value={salary} label="Salary" variant="standard" onChange={(event) => setSalary(event.target.value)}/>
            <br/>
            <Button type="submit" variant="contained"
            onClick={() => {
                const newUser = {...user,
                    name,position,office,age,salary
                };
               const ind=users.indexOf(user);
               users[ind]=newUser;
               setUser(users);
                history.push(`/users`);
              }
              }
                >Save</Button>
        </div>
    )
}


