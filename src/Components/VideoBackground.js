import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieID}) => {
  const Trailervideo=useSelector(store=>store.movies?.TrailerVideo);
  useMovieTrailer(movieID);
  
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+Trailervideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe></div>
  )
}

export default VideoBackground;