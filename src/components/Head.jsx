import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {
    const dispatch=useDispatch();
    const  toggleMenuHandler=()=>{
    dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-4 m-1 shadow-lg">
           <div className="flex col-span-2">
            <img onClick={()=>toggleMenuHandler()}
            className="h-9 cursor-pointer" alt="menu" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"></img>
            <img className="h-10 w-24 ml-2" alt="youtubelogo" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"></img>
           </div>
           <div className="col-span-9">
          <input className="w-1/2 border border-gray-400 rounded-l-full p-1 px-3 " type="text" placeholder="Search "></input>
          <button className="p-1 px-2 border border-gray-400 rounded-r-full bg-gray-100">🔍</button>
           </div>
           <div className="col-span-1">
            <img className="h-8" alt="usericon" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"></img>
           </div>
        </div>
    )
}

export default Head;