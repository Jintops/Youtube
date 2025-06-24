import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import  {profileurl} from '../utils/helper'
import { FaYoutube, FaMusic, FaChild } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { MdPlaylistPlay, MdVideoLibrary, MdWatchLater, MdThumbUp } from "react-icons/md";
import { MdWhatshot,MdShoppingBag, MdMusicNote,MdLocalMovies,MdLiveTv,MdSportsSoccer, MdSportsEsports, MdSchool, MdPodcasts,MdCheckroom} from "react-icons/md";
import {MdSettings,MdOutlineFeedback,MdHelpOutline,MdHistory} from "react-icons/md";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

const supportItems = [
  { name: "Settings", icon: <MdSettings className="mr-4 text-lg" /> },
  { name: "Report History", icon: <MdHistory className="mr-4 text-lg" /> },
  { name: "Help", icon: <MdHelpOutline className="mr-4 text-lg" /> },
  { name: "Send Feedback", icon: <MdOutlineFeedback className="mr-4 text-lg" /> },
];


const exploreItems = [
  { name: "Trending", icon: <MdWhatshot className="mr-4 text-lg" /> },
  { name: "Shopping", icon: <MdShoppingBag className="mr-4 text-lg" /> },
  { name: "Music", icon: <MdMusicNote className="mr-4 text-lg" /> },
  { name: "Films", icon: <MdLocalMovies className="mr-4 text-lg" /> },
  { name: "Live", icon: <MdLiveTv className="mr-4 text-lg" /> },
  { name: "Sports", icon: <MdSportsSoccer className="mr-4 text-lg" /> },
  { name: "Gaming", icon: <MdSportsEsports className="mr-4 text-lg" /> },
  { name: "Sport", icon: <MdSportsSoccer className="mr-4 text-lg" /> },
  { name: "Courses", icon: <MdSchool className="mr-4 text-lg" /> },
  { name: "Fashion & beauty", icon: <MdCheckroom className="mr-4 text-lg" /> },
  { name: "Podcasts", icon: <MdPodcasts className="mr-4 text-lg" /> },
];

const moreforYoutube=[
  { name: "Youtube Premium", icon: <FaYoutube className="mr-4 text-lg text-red-600" /> },
    { name: "Youtube Studio", icon: <SiYoutubestudio className="mr-4 text-lg text-red-500" /> },
    { name: "Youtube Music", icon: <FaMusic className="mr-4 text-lg text-red-500" /> },
    { name: "Youtube Kids", icon: <FaChild className="mr-4 text-lg text-red-400" /> },

]


  // if(!isMenuOpen) return null
  return !isMenuOpen ? null : (
    <div className="shadow-lg w-full p-5  h-screen  overflow-y-auto  bg-white">
      <ul>
        <li className="mt-2">
          <Link to="/" className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md">
            <FontAwesomeIcon icon={faHouse} className="mr-4 text-lg" />
            <span className="text-sm">Home</span>
          </Link>
        </li>

        <li className="mt-2">
          <Link to="/shorts" className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md">
            <SiYoutubeshorts className="mr-4 text-lg" />
            <span className="text-sm">Shorts</span>
          </Link>
        </li>

        <li className="mt-2">
          <Link to="/subscriptions" className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md">
            <MdSubscriptions className="mr-4 text-lg" />
            <span className="text-sm">Subscriptions</span>
          </Link>
        </li>
      </ul>

      <hr className="mt-3 text-gray-500"></hr>

    


<h1 className="font-bold pt-2 text-sm px-2">You</h1>
<ul>
  <li className="mt-[7px]">
    <div className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdHistory className="mr-4 text-lg" />
      <span className="text-sm">History</span>
    </div>
  </li>
  <li className="mt-[7px]">
    <div className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdPlaylistPlay className="mr-4 text-lg" />
      <span className="text-sm">Playlists</span>
    </div>
  </li>
  <li className="mt-[7px]">
    <div className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdVideoLibrary className="mr-4 text-lg" />
      <span className="text-sm">Your Videos</span>
    </div>
  </li>
  <li className="mt-[7px]">
    <div className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdVideoLibrary className="mr-4 text-lg" />
      <span className="text-sm">Your Courses</span>
    </div>
  </li>
  <li className="mt-[7px]">
    <div className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdWatchLater className="mr-4 text-lg" />
      <span className="text-sm">Watch Later</span>
    </div>
  </li>
  <li className="mt-[7px]">
    <div className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdThumbUp className="mr-4 text-lg" />
      <span className="text-sm">Liked Videos</span>
    </div>
  </li>
</ul>


{/* Subscriptions Section */}
<hr className="my-4" />
<h1 className="font-bold pt-2 text-sm px-2">Subscriptions</h1>
<ul>
  {["Blind Psycho","Akshai Saini", "Tech Travel Sujith",  "Karikku","Kudos Media"].map((item, index) => (
    <li key={item} className="mt-[5px]">
      <div className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <img
          alt="yt pf"
          src={profileurl[index % profileurl.length]} // ensure it loops if out of range
          className="w-8 mr-4 rounded-full"
        />
        <span className="text-sm truncate">{item}</span>
      </div>
    </li>
  ))}
</ul>


{/* Explore Section */}
<hr className="my-4" />
<h1 className="font-bold pt-2 text-sm px-2">Explore</h1>
<ul>
  {exploreItems.map(({ name, icon }) => (
    <li key={name} className="mt-2">
      <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
        {icon}
        <span className="text-sm">{name}</span>
      </div>
    </li>
  ))}
</ul>

{/* More From YouTube Section */}
<hr className="my-4" />
<h1 className="font-bold pt-2 text-sm px-2">More From YouTube</h1>
<ul>
  {moreforYoutube.map(({ name, icon }) => (
    <li key={name} className="mt-2">
      <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
        {icon}
        <span className="text-sm">{name}</span>
      </div>
    </li>
  ))}
</ul>

{/* Settings Section */}
<hr className="my-4" />
<ul>
  {supportItems.map(({ name, icon }) => (
    <li key={name} className="mt-2">
      <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
        {icon}
        <span className="text-sm">{name}</span>
      </div>
    </li>
  ))}
</ul>


    </div>
  );
};

export default Sidebar;
