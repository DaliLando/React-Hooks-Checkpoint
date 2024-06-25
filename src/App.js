import React, { useState } from "react";
import MovieList from "./Components/movieList";
import { liste } from "./data";
import AddMovie from "./Components/addMovie";
import NavScrollExample from "./navBar";


function App() {

const [movie,setMovie]= useState(liste)
const [show,setShow]=useState(false)

const toggle = ()=> {
  setShow(!show);
}
const [movieFilter,setMovieFilter]=useState(movie)
// create a new movie
const add =(newMovie)=>{
  setMovieFilter([...movieFilter , newMovie])
}

// filtration

const filtration = (value) =>{
  setMovieFilter(movie.filter((item)=>{
   return  item.title.toLowerCase()===value.toLowerCase() || item.rating===Number(value)
  })) 
}
  return (
    <div>
      <NavScrollExample filtration ={filtration}/>
    <div >
      <MovieList movie={movieFilter}/>
       
  </div>
  <button onClick={toggle} style={{marginLeft:"45%",marginTop:"30px",marginBottom:"10px"}}>Add new movie</button>
      { show && <AddMovie add={add} toggle ={toggle}/>} 
      
  </div>
  );
}

export default App;
