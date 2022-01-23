import { Button,TextField  } from '@mui/material';
import { useState, useEffect } from "react";
import { useHistory,useParams} from "react-router-dom";

export function UpdateTheater(){
  const {id}= useParams();
  const [theater,setTheater]=useState([]);
  const getTheater=()=>{
    fetch(`https://61c41708f1af4a0017d992ac.mockapi.io/Theater/${id}`,
    {method:"GET"}).then((data)=>data.json()).then((th)=>setTheater(th));
  };
 
 useEffect(getTheater);

  return (theater? <EditTheater theater={theater}/>:"");
}


function EditTheater({theater}) {
  const history=useHistory();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const updateTheater=() => {
    const newTheater = {
        id,
        name,
        movies,
        showtimes
    }
    fetch(`https://hacckathon-2-backend-sanjeev.herokuapp.com/theaters/${theater.id}`,{
      method:"PUT",
      body: JSON.stringify(newTheater),
      headers:{"Content-Type": "application/json"},
    })
    .then((data)=>data.json())
    .then(()=>history.push("/admin/theaters"));
  }
  return (
    <div className="add-movie">
        <h2>Update Theater</h2>
        <TextField 
        onChange={(event) => setId(event.target.value)}
        placeholder="Enter Theater Id" />
      <TextField 
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter TheaterName" />
      <TextField 
        onChange={(event) => setMovies(event.target.value)}
        placeholder="Enter Movies" />
      <TextField 
        onChange={(event) => setShowtimes(event.target.value)}
        placeholder="Enter Showtimes" />
        
      <br />
      <Button
        className="add-btn"
        variant="outlined"
        onClick={updateTheater}
      >
        Save
      </Button>
    </div>
  );
}
