import React from "react";
import "../App.css";
import ReactPlayer from "react-player";

function Music() {
  return (
    <div className="music">
      <ReactPlayer
        className="my-original-song"
        url="https://www.youtube.com/watch?v=4nMyznBZyFM&ab_channel=PranishBhagat"
        allowFullScreen
      ></ReactPlayer>

      <ReactPlayer
        className="beat-it-solo"
        url="https://www.youtube.com/embed/K2PT0Yba0Lc"
        allowFullScreen
      ></ReactPlayer>
    </div>
  );
}

export default Music;
