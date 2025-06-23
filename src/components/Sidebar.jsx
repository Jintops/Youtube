import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

import { MdPlaylistPlay, MdVideoLibrary, MdWatchLater, MdThumbUp } from "react-icons/md";
import {
  MdWhatshot,        // Trending
  MdShoppingBag,     // Shopping
  MdMusicNote,       // Music
  MdLocalMovies,     // Films
  MdLiveTv,          // Live
  MdSportsSoccer,    // Sports
  MdSportsEsports,   // Gaming
  MdSchool,          // Courses
  MdPodcasts,        // Podcasts
  MdCheckroom        // Fashion & beauty (hanger icon as a substitute)
} from "react-icons/md";
import {
  MdSettings,
  MdOutlineFeedback,
  MdHelpOutline,
  MdHistory
} from "react-icons/md";




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

    


<h1 className="font-bold pt-2 text-sm">You</h1>
<ul>
  <li className="mt-2">
    <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdHistory className="mr-4 text-lg" />
      <span className="text-sm">History</span>
    </div>
  </li>
  <li className="mt-2">
    <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdPlaylistPlay className="mr-4 text-lg" />
      <span className="text-sm">Playlists</span>
    </div>
  </li>
  <li className="mt-2">
    <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdVideoLibrary className="mr-4 text-lg" />
      <span className="text-sm">Your Videos</span>
    </div>
  </li>
  <li className="mt-2">
    <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdVideoLibrary className="mr-4 text-lg" />
      <span className="text-sm">Your Courses</span>
    </div>
  </li>
  <li className="mt-2">
    <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdWatchLater className="mr-4 text-lg" />
      <span className="text-sm">Watch Later</span>
    </div>
  </li>
  <li className="mt-2">
    <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
      <MdThumbUp className="mr-4 text-lg" />
      <span className="text-sm">Liked Videos</span>
    </div>
  </li>
</ul>


{/* Subscriptions Section */}
<hr className="my-4" />
<h1 className="font-bold pt-2 text-sm">Subscriptions</h1>
<ul>
  {["music", "Sports", "Games", "Movies"].map((item) => (
    <li key={item} className="mt-2">
      <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
        <span className="text-sm">{item}</span>
      </div>
    </li>
  ))}
</ul>

{/* Explore Section */}
<hr className="my-4" />
<h1 className="font-bold pt-2 text-sm">Explore</h1>
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
<h1 className="font-bold pt-2 text-sm">More From YouTube</h1>
<ul>
  {["music", "Sports", "Games", "Movies"].map((item) => (
    <li key={item} className="mt-2">
      <div className="flex items-center px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
        <span className="text-sm">{item}</span>
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
