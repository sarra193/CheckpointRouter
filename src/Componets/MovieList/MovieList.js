import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
import AddMovie from '../AddMovie/AddMovie'
const MovieList = ({ filterByName,AddNewMovie,movies}) => {
      
      return (
            

            <div>
            <div
            style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: '10px 20px'
            }}
            >
            {movies.map((movie, i) => (
            
            <MovieCard  {...movie} movies={movie} key={i} /> 
             
           
            
            ))}
            </div>
      <AddMovie AddNewMovie={AddNewMovie} /> 
      </div>
      )
}

export default MovieList