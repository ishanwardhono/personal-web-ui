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
                A robotics warehouse startup with a mission to automate and simplify the warehouse industry
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
          <div className="job">
            <h4>Software Engineer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-name">
                <span>Tokopedia</span> (Jakarta, Indonesia)
              </div>
              <div className="company-period">
                <span>April 2019 - May 2021</span>
              </div>
            </div>

            <div className="company-desc">
              <p>
                A leading Indonesian unicorn technology company in the e-commerce industry
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Design and develop Order Status Management, Generic Order Fulfillment and Unified Order History platform service with Golang</li>
                <li>Design database system using CockroachDB</li>
                <li>Maintain high availability, reliability and scalability for the services</li>
                <li>Implement Dependency Injection, Design Patterns and SOLID Principles</li>
                <li>Implement ACID Principles for the database</li>
                <li>Implement asynchronous communication and retryable system with Go-NSQ Message Queue</li>
                <li>Develop GraphQL server for Front End communication</li>
                <li>Implement REST API and gRPC to communicate to other backend services</li>
                <li>Implement search engine with ElasticSearch</li>
                <li>Implement caching system with Redis Cluster</li>
                <li>Implement schedule-based auto-scale with Terraform on high traffic events</li>
                <li>Become a PIC for the 2 biggest vertical businesses (Marketplace and Digital Goods) to collaborate and integrate into the Unified Order History service</li>
                <li>Implement system monitoring tools with Datadog, Grafana and Scalyr</li>
                <li>Implement CI/CD with Jenkins</li>
                <li>Create and maintain Unit Tests code coverage with a minimum of 70%</li>
                <li>Create Integration Tests for all endpoints in an isolated environment with Docker</li>
                <li>Create End-to-end Tests for almost all possible flows</li>
                <li>Perform Load Tests to find out the system's limit</li>
              </ul>
            </div>
            <div className="key-points">
              <span>Achievements</span>
              <ul>
                <li>Increase service uptime by more than 99%</li>
                <li>Keep the error rate below 1%</li>
                <li>Increase system performance up to 300% (2500 RPS, average 60ms response time)</li>
                <li>Improve functionality performance by reusing gRPC client, String Concatenation efficiency, Reduce nested loops based on benchmark tests.</li>
                <li>Reduce dependencies for other team services with Order Status Management service</li>
                <li>Speed up new vertical business delivery with General Order Fulfillment service</li>
                <li>Increase customer satisfaction with Unified Order History service  based on app reviews and feedbacks</li>
              </ul>
            </div>
            <div className="tech-stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>Golang</li>
                    <li>CockroachDb</li>
                    <li>Redis Cluster</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>ElasticSearch</li>
                    <li>Go-NSQ (MQ)</li>
                    <li>gRPC</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>GraphQL</li>
                    <li>Docker</li>
                    <li>Jenkins</li>
                  </ul>
                </div>
                <div className="qright">
                  <ul>
                    <li>Datadog</li>
                    <li>Grafana</li>
                    <li>Scalyr</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="job">
            <h4>Java Programmer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-name">
                <span>PT. Buana Varia Komputama</span> (Jakarta, Indonesia)
              </div>
              <div className="company-period">
                <span>November 2018 - April 2019</span>
              </div>
            </div>

            <div className="company-desc">
              <p>
                IT consultant company in the pharmacy and health industry
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Build and maintain a national scale for a private state company, using Java with Spring Boot and PostgreSQL</li>
                <li>Revamp reporting and improve the performance</li>
                <li>Provide fast delivery of UAT change request</li>
              </ul>
            </div>
            <div className="tech-stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>Spring Boot</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="job">
            <h4>Programmer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-name">
                <span>Internship</span> (Medan, Indonesia)
              </div>
              <div className="company-period">
                <span>June 2017 - August 2018</span>
              </div>
            </div>

            <div className="company-desc">
              <p>
                Directorate General of Customs and Investigation
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Develop and maintain a web application system of archive processing management with PHP</li>
              </ul>
            </div>
            <div className="tech-stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>PHP</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>Laravel</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>MySQL</li>
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
