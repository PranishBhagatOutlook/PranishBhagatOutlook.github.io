import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <p>
        {" "}
        Welcome to my website. Please feel free to read more{" "}
        <a href="/about">about me</a>, or you can check out my{" "}
        {/* <a href="/resume">resume</a>,  */}
        <a href="/projects">projects</a>, or <a href="/connect">contact</a> me.
      </p>
      {/* <div className="display_picture">Insert picture here</div> */}
    </div>
  );
}

export default Home;
