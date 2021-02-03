import "./App.css";
import React,{ useState } from "react";
import NavBar from './Componets/Header/NavBar/NavBar'
import Footer from './Componets/Footer/Footer'
import { Data } from './data'
import MovieList from './Componets/MovieList/MovieList'
import bg from './img/IoAdd.jpg'
import { Route } from 'react-router-dom'
import MovieInformation from "./Componets/MovieInfo/MovieInformation"
function App() {

    const [rating, setRating] = useState("")
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState(Data)

  const handleChange = (value) => {
      setRating(value);
      }
  
  /* Search by name function */
     

  
      
      

/* adding object to data */
    const AddNewMovie=(x)=>{setMovies([...movies, x])}


  return(
    <div style={{ backgroundImage: `url(${bg})` }}>
      <NavBar movies={movies} setSearch={setSearch} handleChange={handleChange} rating={rating} />
      <Route exact path="/" render={ ()=>(<MovieList movies={movies.filter((movie) => movie.Title.toLowerCase().includes(search.toLowerCase().trim()) &&
      movie.imdbRating >= rating)} AddNewMovie={AddNewMovie} /> )}/>
    

      <Route path="/MovieInformation/:id" render={(props) => (<MovieInformation {...props} movies={ movies}/>) }/>
      
    <Footer/>
    </div>
  )
}

export default App;
