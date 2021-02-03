import React,{useEffect,useState} from 'react'
import './MovieInformation.css'

                  function MovieInformation({ match, movies }) {
                        
                        const [movie, setMovie] = useState({});
                        
                        useEffect(() => {
                              setMovie(movies.find((movie)=> movie.id === +match.params.id))
                        }, [])

                              return (
                                    <div>
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
      <div className="blur_back " style={{ backgroundImage: `url(${movie.Poster})`,backgroundRepeat:"no-repeat",backgroundSize: "cover"}}></div>
      </div>
                                          
     <iframe width="1519" height="581" title={movie.Title} src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                              )
                        }

                        export default MovieInformation
