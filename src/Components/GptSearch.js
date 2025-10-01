import { BG_URL } from "../Utils/Constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSeachBar from "./GptSeachBar";

const GptSearch = () => {
  return (
    <div>
        <div className="absolute  -z-10">
                <img src={BG_URL} alt="body-logo"/>
            </div>
        <GptSeachBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;