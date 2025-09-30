const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video py-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-lg w-1/4 py-6">{overview}</p>
        <div>
            <button className="bg-white text-gray-500 text-lg p-4 px-12  rounded-lg hover:bg-opacity-80">▶️play</button>
            <button className="bg-gray-500 mx-2 text-white text-lg p-4 px-12 bg-opacity-50 rounded-lg">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;