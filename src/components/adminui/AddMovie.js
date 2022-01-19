import './Movies.css'
import { Button,TextField  } from '@mui/material';
import { useState } from "react";
import { useHistory} from "react-router-dom";

export function AddMovies() {

  const history=useHistory();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [votes, setVotes] = useState("");
  const [genres, setGenres] = useState("");
  const [language, setLanguage] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const addmovie=() => {
    const newMovie = {
        id,
        name,
        poster,
        rating,
        votes,
        genres,
        language,
        duration,
        releaseDate
    }
    fetch("https://61c41708f1af4a0017d992ac.mockapi.io/movies",{
      method:"POST",
      body: JSON.stringify(newMovie),
      headers:{"Content-Type": "application/json"},
    })
    .then((data)=>data.json())
    .then(()=>history.push("/admin/movies"));
  }
  return (
    <div className="add-movie">
        <h2>Add Movie</h2>
        <TextField 
        onChange={(event) => setId(event.target.value)}
        placeholder="Enter Movie Id" />
      <TextField 
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Movie Name" />
      <TextField 
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter PosterUrl" />
      <TextField 
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter Movie Ratings" />
         <TextField 
        onChange={(event) => setVotes(event.target.value)}
        placeholder="Enter Movie Votes" />
         <TextField 
        onChange={(event) => setGenres(event.target.value)}
        placeholder="Enter Movie Ratings" />
         <TextField 
        onChange={(event) => setLanguage(event.target.value)}
        placeholder="Enter Movie Language" />
         <TextField 
        onChange={(event) => setDuration(event.target.value)}
        placeholder="Enter Movie Duration" />
         <TextField 
        onChange={(event) => setReleaseDate(event.target.value)}
        placeholder="Enter Movie ReleaseDate" />
         
      <br />
      <Button
        className="add-btn"
        variant="outlined"
        onClick={addmovie}
      >
        Add-Movie
      </Button>
    </div>
  );
}
