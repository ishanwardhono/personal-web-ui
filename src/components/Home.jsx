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
              <b>6 years</b> of experience as <b>Backend Software Engineer</b>. Proficient in <b>Golang</b>, familiar with <b>C#</b> and <b>Java</b>. Skilled in <b>Object-Oriented Programming</b>, <b>Microservices architecture</b> and <b>Design patterns</b>. Experienced in writing <b>Unit and Integration Tests</b>.
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
