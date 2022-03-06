import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src="assets/img/slider/about_1.jpg" alt="about" />
        </div>
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h2 className="name">Ishan Wardhono - Backend Software Engineer</h2>
          <div className="description_inner">
            <div className="left">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>21 Jan 1996
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>26
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>Jakarta, Indonesia
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmai.com">ishanwardhono@gmail.com</a>
                  </p>
                </li>
              </ul>
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+6285270682470">+62 852 7068 2470</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Education:</span>Bachelor of Computer Science
                  </p>
                </li>
                <li>
                  <p>
                    <span>LinkedIn:</span>
                    <a href="https://linkedin.com/in/ishanwardhono">linkedin.com/in/ishanwardhono</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Github:</span>
                    <a href="https://github.com/ishanwardhono">github.com/ishanwardhono</a>
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Experience</h2>
          <div className="job">
            <h4>Backend Developer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-name">
                <span>Pingspace Robotics</span> (Remote - Penang, Malaysia)
              </div>
              <div className="company-period">
                <span>June 2021 - Now</span>
              </div>
            </div>

            <div className="company-desc">
              <p>
                A robotics warehouse startup with a mission to automate and simplify the warehouse industry.
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Develop and maintain three backend services (Warehouse Operation System, E-Commerce, Storage Management) with C#, Typescript and NodeJS</li>
                <li>Implement database with PostgreSQL and MongoDB</li>
                <li>Implement a logging system with RabbitMQ and MongoDB</li>
                <li>Implement a caching system with Redis</li>
                <li>Implement REST API for service communication</li>
                <li>Implement SOLID Principles</li>
                <li>Maintain Unit Tests for each function</li>
                <li>Implement file management with AWS S3</li>
                <li>Create high-level and low-level documentation</li>
                <li>Develop App-Management, Products, Shops and Balances services</li>
                <li>Create Sign-In with Apple integration for the service user authentication</li>
                <li>Implement Github Action CI to run unit test on push to an active branch</li>
                <li>Containerize the services with Docker and Docker Compose</li>
              </ul>
            </div>
            <div className="tech-stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>C#</li>
                    <li>Typescript</li>
                    <li>NodeJS</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>RabbitMQ</li>
                    <li>Docker</li>
                    <li>Serverless-Stack</li>
                  </ul>
                </div>
                <div className="qright">
                  <ul>
                    <li>AWS S3</li>
                    <li>AWS Lambda Function</li>
                    <li>Jest</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
