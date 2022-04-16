import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about">
      <article className="post" id="about">
        <header>
          <div className="title">
            <h1
              className="w-post-elm post_title us_custom_3cc54cea align_left entry-title headerpagetitle has_text_color"
              itemProp="headline"
            >
              About Pranish
            </h1>
          </div>
        </header>
        <h4>Introduction</h4>
        <p>
          I am a second-year Master's student at Baylor University in the
          Computer Science department. I am currently a Research Assistant at
          the department, working as a part-time Lead Developer for{" "}
          <a href="https://icpc.global/" target="_blank">
            ICPC.
          </a>{" "}
          I will be graduating on Dec 2022 and am actively looking for full-time
          opportunities. My primary areas of interest lie in Database, Machine
          Learning and Web-development.
          <br />
          <br />
        </p>
        <h4>Currently</h4>
        <p>
          As a Research Assistant working as part of a cross-departmental
          project, I have garnered both technical and managerial skills that are
          essential in the tech industry. Building on top of four years as a
          developer after my undergraduate, I have learned how to combine
          individual research with teamwork, working together with various teams
          to build large projects while striving to look for new and innovative
          ways to solve exciting problems in web security and programming
          languages, among others.
          <br />
          <br />
        </p>
      </article>
    </div>
  );
}

export default About;
