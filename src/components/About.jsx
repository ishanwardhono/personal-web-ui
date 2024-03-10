import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  // Usage
  const age = calculateAge('1996-01-21');

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
        <div className="segment-head">
          <a href='/assets/file/Resume - Ishan Wardhono.pdf'>
            <div className="download-resume">
              <img className="svg"
                src={'/assets/img/svg/download.svg'}
              ></img> 
              <span className="df">130 KB</span>
              <span className="dfn">My Resume</span>
            </div>
          </a>
        </div>
        <div className="description">
          <h2 className="name">Ishan Wardhono - Backend Software Engineer</h2>
          <div className="description_inner">
            <div className="left">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>21 January 1996
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>{age}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>
                    <a href="https://maps.app.goo.gl/GBZh6vsbXAkheovu8?g_st=ic">Yogyakarta, Indonesia</a>
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
          <h2 className="name">Skills Summary</h2>
          <div className="summary">
            <div className="row-grey"><div className="title">Languages:</div><div className="desc">Golang, Rust, C#, NodeJS</div></div>
            <div className="row"><div className="title">Databases:</div><div className="desc">PostgreSQL, MongoDB, CockroachDB, Redis</div></div>
            <div className="row-grey"><div className="title">API:</div><div className="desc">REST, gRPC, GraphQL</div></div>
            <div className="row"><div className="title">Message Queue:</div><div className="desc">Go-NSQ, RabbitMQ, Kafka, Redpanda</div></div>
            <div className="row-grey"><div className="title">Cloud Platform:</div><div className="desc">Google Cloud Platforms (GCP), Amazon Web Services (AWS)</div></div>
            <div className="row"><div className="title">Container:</div><div className="desc">Docker</div></div>
            <div className="row"><div className="title">Orchestration:</div><div className="desc">Kubernetes, Docker Compose</div></div>
            <div className="row-grey"><div className="title">Test:</div><div className="desc">Unit, Integration, End-to-end, Benchmark</div></div>
            <div className="row"><div className="title">CI/CD:</div><div className="desc">Jenkins, CircleCI, Github Actions Workflow</div></div>
            <div className="row-grey"><div className="title">Monitoring Tools:</div><div className="desc">Datadog, Grafana, Scalyr</div></div>
          </div>
        </div>

        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Experience</h2>
          <div className="job">
            <h4>Backend Engineer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Evermos</div>
                <div className="company-place">(Yogyakarta, Indonesia)</div>
              </div>
              <div className="company-period">November 2023 - Now</div>
            </div>

            <div className="company-desc">
              <p>
              E-commerce platform for reselling and dropshipping, aiming to empower local entrepreneurs
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Maintained and enhanced <b>Golang</b> services for transaction modules: <b>Cart</b>, <b>Checkout</b>, and <b>Order</b>.</li>
                <li>Implemented databases using <b>MySQL</b> and <b>DynamoDB</b>.</li>
                <li>Debugged using <b>Grafana</b> and performed bug fixes.</li>
                <li>Developed <b>REST APIs</b> for service communication.</li>
                <li>Maintained <b>Unit Tests</b> for each function to ensure code reliability.</li>
              </ul>
            </div>
            <div className="stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>Golang</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>DynamoDB</li>
                    <li>Kubernetes</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>Redis</li>
                    <li>Grafana</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="stacks">
              <span>Platform</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="job">
            <h4>Golang Developer (Freelance)</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Epic Startups</div>
                <div className="company-place">(Kuala Lumpur, Malaysia)</div>
              </div>
              <div className="company-period">July 2023 - November 2023</div>
            </div>

            <div className="company-desc">
              <p>
              Software house startup
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Develop and maintain backend services with <b>Golang</b> and <b>PostgreSQL</b> database</li>
                <li>Building microservices with several layers: <b>BFF</b>, <b>Orchestrator</b>, and <b>Core</b></li>
                <li>Manage the microservices and the deployment with <b>Kubernetes</b></li>
                <li>Run the microservices at <b>GKE (Google Kubernetes Engine)</b></li>
                <li>Implement activity log with <b>Kafka</b></li>
                <li>Monitor system logs with <b>Google Log Explorer</b></li>
                <li>Implement <b>REST API</b> for service communication</li>
                <li>Collaborate with the Front End team to improve the system UI/UX</li>

                <li>Enhance existing features of a <b>Golang</b> service, including a custom table system.</li>
                <li>Maintain a <b>Node.js</b> service for the payment system, integrated with <b>Stripe</b>.</li>
                <li>Implement a <b>Golang</b> service for a generic workflow system, using <b>Temporal</b> and <b>Redpanda</b> with schemas based in <b>JSON</b>.</li>
                <li>Implement an optimization function to provide solutions for the logistic service problem, specifically for truck route planning (pick-up and delivery), using <b>Google Optimization Tools (OR-Tools)</b>.</li>
              </ul>
            </div>
            <div className="stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>Golang</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>Docker</li>
                    <li>Redpanda</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>Temporal</li>
                    <li>Google OR-Tools</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="stacks">
              <span>Platform</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>DigitalOcean</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="job">
            <h4>Backend Software Engineer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Accenture</div>
                <div className="company-place">(Kuala Lumpur, Malaysia)</div>
              </div>
              <div className="company-period">November 2022 - July 2023</div>
            </div>

            <div className="company-desc">
              <p>
              IT solution company for Thailand's bank
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Develop and maintain backend services with <b>Golang</b> and <b>PostgreSQL</b> database</li>
                <li>Building microservices with several layers: <b>BFF</b>, <b>Orchestrator</b>, and <b>Core</b></li>
                <li>Manage the microservices and the deployment with <b>Kubernetes</b></li>
                <li>Run the microservices at <b>GKE (Google Kubernetes Engine)</b></li>
                <li>Implement activity log with <b>Kafka</b></li>
                <li>Monitor system logs with <b>Google Log Explorer</b></li>
                <li>Implement <b>REST API</b> for service communication</li>
                <li>Collaborate with the Front End team to improve the system UI/UX</li>
              </ul>
            </div>
            <div className="stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>Golang</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>Kubernetes</li>
                    <li>Kafka</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>Google Kubernetes Engine</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="stacks">
              <span>Platform</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>GCP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="job">
            <h4>Backend Developer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Pingspace Robotics</div>
                <div className="company-place">(Penang, Malaysia)</div>
              </div>
              <div className="company-period">June 2021 - November 2022</div>
            </div>

            <div className="company-desc">
              <p>
                A robotics warehouse startup with a mission to automate and simplify the warehouse industry
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Develop and maintain three backend services (Warehouse Operation System, E-Commerce, Storage Management) with <b>C#</b>, <b>Typescript</b> and <b>NodeJS</b></li>
                <li>Implement database with <b>PostgreSQL</b> and <b>MongoDB</b></li>
                <li>Implement a logging system with <b>RabbitMQ</b> and <b>MongoDB</b></li>
                <li>Implement a caching system with <b>Redis</b></li>
                <li>Implement <b>REST API</b> for service communication</li>
                <li>Implement <b>SOLID</b> Principles</li>
                <li>Maintain <b>Unit Tests</b> for each function</li>
                <li>Implement file management with <b>AWS S3</b></li>
                <li>Create <b>high-level</b> and <b>low-level documentation</b></li>
                <li>Develop <b>App-Management</b>, <b>Products</b>, <b>Shops</b> and <b>Balances</b> services</li>
                <li>Create <b>Sign-In with Apple</b> integration for the service user authentication</li>
                <li>Implement <b>Github Action CI</b> to run unit test on push to an active branch</li>
                <li>Containerize the services with <b>Docker</b> and <b>Docker Compose</b></li>
              </ul>
            </div>
            <div className="stacks">
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
            <div className="stacks">
              <span>Platform</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="job">
            <h4>Software Engineer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Tokopedia</div>
                <div className="company-place">(Jakarta, Indonesia)</div>
              </div>
              <div className="company-period">April 2019 - May 2021</div>
            </div>

            <div className="company-desc">
              <p>
                A leading Indonesian unicorn technology company in the e-commerce industry
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Design and develop <b>Order Status Management</b>, <b>Generic Order Fulfillment</b> and <b>Unified Order History platform</b> service with Golang</li>
                <li>Design database system using <b>CockroachDB</b></li>
                <li>Maintain <b>high availability</b>, <b>reliability</b> and <b>scalability</b> for the services</li>
                <li>Implement <b>Dependency Injection</b>, <b>Design Patterns</b> and <b>SOLID Principles</b></li>
                <li>Implement <b>ACID Principles</b> for the database</li>
                <li>Implement asynchronous communication and retryable system with <b>Go-NSQ Message Queue</b></li>
                <li>Develop <b>GraphQL</b> server for Front End communication</li>
                <li>Implement <b>REST API</b> and <b>gRPC</b> to communicate to other backend services</li>
                <li>Implement search engine with <b>ElasticSearch</b></li>
                <li>Implement caching system with <b>Redis Cluster</b></li>
                <li>Implement <b>schedule-based auto-scale</b> with <b>Terraform</b> on high traffic events</li>
                <li>Become a <b>PIC</b> for the 2 biggest vertical businesses (<b>Marketplace</b> and <b>Digital Goods</b>) to collaborate and integrate into the <b>Unified Order History</b> service</li>
                <li>Implement system monitoring tools with <b>Datadog</b>, <b>Grafana</b> and <b>Scalyr</b></li>
                <li>Implement <b>CI/CD</b> with <b>Jenkins</b></li>
                <li>Create and maintain <b>Unit Tests</b> code coverage with a minimum of <b>70%</b></li>
                <li>Create <b>Integration Tests</b> for all endpoints in an isolated environment with <b>Docker</b></li>
                <li>Create <b>End-to-end Tests</b> for almost all possible flows</li>
                <li>Perform <b>Load Tests</b> to find out the system's limit</li>
              </ul>
            </div>
            <div className="key-points">
              <span>Achievements</span>
              <ul>
                <li>Increase service <b>uptime</b> by more than <b>99%</b></li>
                <li>Keep the <b>error rate</b> below <b>1%</b></li>
                <li>Increase system performance up to <b>300%</b> (<b>2500 RPS</b>, average <b>60ms</b> response time)</li>
                <li>Improve functionality performance by <b>reusing gRPC client</b>, <b>String Concatenation efficiency</b>, <b>Reduce nested loops</b> based on <b>benchmark tests</b></li>
                <li>Reduce dependencies for other team services with <b>Order Status Management</b> service</li>
                <li>Speed up new vertical business delivery with <b>General Order Fulfillment</b> service</li>
                <li>Increase customer satisfaction with <b>Unified Order History</b> service  based on app reviews and feedbacks</li>
              </ul>
            </div>
            <div className="stacks">
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
            <div className="stacks">
              <span>Platform</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>Aliyun</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>GCP</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="job">
            <h4>Java Programmer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">PT. Buana Varia Komputama</div>
                <div className="company-place">(Jakarta, Indonesia)</div>
              </div>
              <div className="company-period">November 2018 - April 2019</div>
            </div>

            <div className="company-desc">
              <p>
                IT consultant company in the pharmacy and health industry
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Build and maintain a national scale for a private state company, using <b>Java</b> with <b>Spring Boot</b> and <b>PostgreSQL</b></li>
                <li>Revamp reporting and improve the performance</li>
                <li>Provide fast delivery of <b>UAT change request</b></li>
              </ul>
            </div>
            <div className="stacks">
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
              <div className="company-detail">
                <div className="company-name">Internship</div>
                <div className="company-place">(Medan, Indonesia)</div>
              </div>
              <div className="company-period">June 2017 - August 2017</div>
            </div>

            <div className="company-desc">
              <p>
                Directorate General of Customs and Investigation
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Develop and maintain a web application system of archive processing management with <b>PHP</b></li>
              </ul>
            </div>
            <div className="stacks">
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

        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Education</h2>
          <div className="job">
            <h4>Computer Science</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Universitas Sumatera Utara</div>
                <div className="company-place">(Medan, Indonesia)</div>
              </div>
              <div className="company-period">September 2014 - July 2018</div>
            </div>

            <div className="company-desc">
              <p>
                Bachelor of Computer Science
              </p>
            </div>
            <div className="common">
              <div className="row-grey"><div className="title">GPA:</div><div className="desc">3.76</div></div>
              <div className="row"><div className="title">Relevant Courses:</div><div className="desc">Computer Science, Software Engineering, Information Technology</div></div>
              <div className="row-grey"><div className="title">Research Title:</div><div className="desc">Implementation of the Hill Cipher 4x4 Algorithm and ElGamal Elliptic Curve Algorithm on Hybrid Cryptosystem for Security Digital Image Android Based</div></div>
            </div>
            <div className="stacks">
              <span>Teaching Assistant Class:</span>
              <div className="list">
                <div className="hleft">
                  <ul>
                    <li>Programming Algorithm</li>
                    <li>Data Structure and Algorithm</li>
                    <li>Object-Oriented Programming</li>
                  </ul>
                </div>
                <div className="hright">
                  <ul>
                    <li>Algorithm Analysis Design</li>
                    <li>Compilation Technique</li>
                    <li>Computer Graphics and Visualisation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Personal Project</h2>
          <div className="job">
          <h4>Personal Web</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">
                  <a href="https://pancisukarela.com">pancisukarela.com</a>
                  </div>
              </div>
              <div className="company-period">January 2022</div>
            </div>

            <div className="company-desc">
              <p>
                Online resume personal web
              </p>
            </div>
            <div className="stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>Firebase</li>
                    <li>Google Domain</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>GCP Compute Engine</li>
                    <li>Github Workflows</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="stacks">
              <span>Platform</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>GCP</li>
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
