import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/home/main.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Ishan Wardhono</h3>
            <p className="job">
              <b>3 years</b> of experience as a <b>Backend Software Engineer</b>.
              Skilled in <b>Go</b>, <b>Typescript</b>, <b>NodeJS</b> and <b>Java</b>.
              Familiar with <b>Object-Oriented Programming</b> and <b>Design Patterns</b>.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
