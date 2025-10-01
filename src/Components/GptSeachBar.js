import { useSelector } from "react-redux";
import lang from "../Utils/LanguageConstants";
const GptSeachBar = () => {
    const langKey=useSelector(store=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[langKey].getGptSearchPlaceHolder}/>
            <button className="px-4 py-2 col-span-3 m-4 bg-red-500 text-white rounded-lg">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSeachBar;