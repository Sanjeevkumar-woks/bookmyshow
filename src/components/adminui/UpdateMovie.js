import { Button,TextField  } from '@mui/material';
import { useState, useEffect } from "react";
import { useHistory,useParams} from "react-router-dom";

export function UpdateMovie(){
  const {id}= useParams();
  const [movie,setMovie]=useState([]);
  const getMovie=()=>{
    fetch(`https://61c41708f1af4a0017d992ac.mockapi.io/movies/${id}`,
    {method:"GET"}).then((data)=>data.json()).then((mv)=>setMovie(mv));
  };
 
 useEffect(getMovie);

  return (movie? <EditMovie movie={movie}/>:"");
}


function EditMovie({movie}) {
  const history=useHistory();
  const [id, setId] = useState(movie.id);
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [votes, setVotes] = useState(movie.votes);
  const [genres, setGenres] = useState(movie.genres);
  const [language, setLanguage] = useState(movie.language);
  const [duration, setDuration] = useState(movie.duration);
  const [releaseDate, setReleaseDate] = useState(movie.releaseDate);
  const addmovie=() => {
    const updatedMovie = {
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
    fetch(`http://hacckathon-2-backend-sanjeev.herokuapp.com/movies/${movie.id}`,{
        method:"PUT",
        body: JSON.stringify(updatedMovie),
        headers:{"Content-Type": "application/json"},
      })
      .then((data)=>data.json())
    .then(()=>history.push("/admin/movies"));
  }
  return (
    <div className="add-movie">
        <h2>Update Movie</h2>
        <TextField 
        onChange={(event) => setId(event.target.value)}
        placeholder="Enter Movie Id" 
        value={id}/>
      <TextField 
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Movie Name" 
        value={name}/>
      <TextField 
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter PosterUrl" 
        value={poster}/>
      <TextField 
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter Movie Ratings"
        value={rating} />
         <TextField 
        onChange={(event) => setVotes(event.target.value)}
        placeholder="Enter Movie Votes"
        value={votes} />
         <TextField 
        onChange={(event) => setGenres(event.target.value)}
        placeholder="Enter Movie Ratings" />
         <TextField 
        onChange={(event) => setLanguage(event.target.value)}
        placeholder="Enter Movie Language" 
        value={language}/>
         <TextField 
        onChange={(event) => setDuration(event.target.value)}
        placeholder="Enter Movie Duration" />
         <TextField 
        onChange={(event) => setReleaseDate(event.target.value)}
        placeholder="Enter Movie ReleaseDate"
        value={releaseDate} />
         
      <br />
      <Button
        className="add-btn"
        variant="outlined"
        onClick={addmovie}
      >
        Save
      </Button>
    </div>
  );
}
