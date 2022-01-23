import { Button,TextField  } from '@mui/material';
import { useState } from "react";
import { useHistory} from "react-router-dom";

export function AddTheater() {

  const history=useHistory();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const addTheater=() => {
    const newTheater = {
        id,
        name,
        movies,
        showtimes
    }
    fetch("https://hacckathon-2-backend-sanjeev.herokuapp.com/theaters",{
      method:"POST",
      body: JSON.stringify(newTheater),
      headers:{"Content-Type": "application/json"},
    })
    .then((data)=>data.json())
    .then(()=>history.push("/admin/theaters"));
  }
  return (
    <div className="add-movie">
        <h2>Add Theater</h2>
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
        onClick={addTheater}
      >
        Add-Theater
      </Button>
    </div>
  );
}
