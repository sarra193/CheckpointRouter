import React,{useEffect,useState} from 'react'
import './MovieInformation.css'
import { useHistory } from "react-router-dom";
function MovieInformation({ match, movies }) {
    const history = useHistory();
      const [movie, setMovie] = useState({});
                        
      useEffect(() => {
            setMovie(movies.find((movie)=> movie.id === +match.params.id))
      }, [])

      return (
      <div>
     
      <button onClick={() => {history.goBack()}} class="button">Back Home</button>


      <div className="movie_card" id="bright">
      <div className="info_section">
      <div className="movie_header">
            <img className="locandina" src={movie.Poster} alt={movie.Poster } />
            <h1>{movie.Title}</h1>
            <h4>{ movie.Year}</h4>
            
      </div>
      <div className="movie_desc">
      <p className="text">
      {movie.Plot}
      </p>
      </div>
            
      </div>
      <div className="blur_back " style={{ backgroundImage: `url(${movie.Poster})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                                                
      </div>
                                          
      <iframe width="1000" height="581"
      title={movie.Title} src={movie.trailer} frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      style={{marginLeft:'auto',marginRight:'auto',marginBottom:'20px',borderRadius:'15px' ,display: "block"}}
                                          
      ></iframe>
                                                      
                                    </div>
                              )
                        }

                        export default MovieInformation
