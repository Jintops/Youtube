import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div className="">
      <ButtonList />
      <div className="flex h-screen">
        <div className="flex-1 overflow-y-auto">
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
