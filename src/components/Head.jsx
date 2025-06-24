import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { FaMicrophone } from 'react-icons/fa';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions,setSuggesions]=useState([])
   const [showSuggestions,setShowSuggestions]=useState(false)
    const searchCache=useSelector(store=>store.search)

    useEffect(()=>{

        const timer=setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggesions(searchCache[searchQuery])
            }else{
            getSearchSuggestions()}},200);

        return ()=>{
            clearTimeout(timer);  
        }

    },[searchQuery])


  const getSearchSuggestions=async()=>{
       const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
       const json=await data.json(); 
       setSuggesions(json[1])
       dispatch(cacheResults({
        [searchQuery]:json[1]
       }))
  }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-4 m-1 shadow-lg">
            <div className="flex col-span-2">
                <img onClick={() => toggleMenuHandler()}
                    className="h-9 cursor-pointer" alt="menu" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"></img>
                <img className="h-10 w-24 ml-2" alt="youtubelogo" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"></img>
            </div>

            <div className="col-span-9">
                <div className="flex">
                <input className="w-1/2 border border-gray-400 rounded-l-full p-1 px-3 " type="text" placeholder="Search"
                    value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} 
                    onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}></input>
                <button className="p-1 px-2 border border-gray-400 rounded-r-full bg-gray-100">🔍</button>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 ml-3">
      <FaMicrophone className="w-5 h-5 text-gray-600" />
    </div>
                </div>
             
               
            {showSuggestions && searchQuery &&   <div className="fixed p-2 bg-white w-[520px] shadow-lg rounded-lg border border-gray-100 ">
                    <ul> 
                        
                        { 
                            suggestions.map((s)=>(
                                <li key={s} className="py-2 px-3 hover:bg-gray-100 ">🔍{s}</li>
                            ))
                        }
                        
                    
                    </ul>
                </div>}

            </div>

            <div className="col-span-1">
                <img className="h-8 rounded-full" alt="usericon" src="https://lh3.googleusercontent.com/ogw/AF2bZyhj13bzJooeBvioImitbj4j_K8jfpB0utepUE2y4ApyiA=s64-c-mo"></img>
            </div>
           
        </div>
    )
}

export default Head;