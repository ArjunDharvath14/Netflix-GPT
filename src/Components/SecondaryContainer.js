import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies=useSelector(Store=>Store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing"} Movies={movies.NowPlayingMovies}/>
      <MovieList title={"Popular"} Movies={movies.PopularMovies}/>
      <MovieList title={"Top Rated"} Movies={movies.TopRatedMovies}/>
      <MovieList title={"Up Coming"} Movies={movies.UpComingMovies}/>
      
      </div>
      
    </div>
  )
}

export default SecondaryContainer;