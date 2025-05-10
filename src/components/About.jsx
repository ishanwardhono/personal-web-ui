import React from "react";

const About = () => {
  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image">
          <img src="assets/img/slider/about_1.jpg" alt="Ishan Wardhono profile" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="segment-head">
          <a href='/assets/file/Resume - Ishan Wardhono.pdf' aria-label="Download resume">
            <div className="download-resume">
              <img 
                className="svg"
                src={'/assets/img/svg/download.svg'} 
                alt="Download icon"
              />
              <span className="df">198 KB</span>
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
                    <span>Address:</span>
                    <a href="https://maps.app.goo.gl/GBZh6vsbXAkheovu8?g_st=ic">Yogyakarta, Indonesia</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:ishanwardhono@gmail.com">ishanwardhono@gmail.com</a>
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
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>

        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Skills Summary</h2>
          <div className="summary">
            <div className="row"><div className="title">Languages:</div><div className="desc">Golang, C#, Java</div></div>
            <div className="row"><div className="title">Databases:</div><div className="desc">PostgreSQL, MySQL, MongoDB, CockroachDB, Redis</div></div>
            <div className="row"><div className="title">API:</div><div className="desc">REST, gRPC, GraphQL</div></div>
            <div className="row"><div className="title">Message Queue:</div><div className="desc">Go-NSQ, RabbitMQ</div></div>
            <div className="row"><div className="title">Cloud Platform:</div><div className="desc">Google Cloud Platforms (GCP), Amazon Web Services (AWS)</div></div>
            <div className="row"><div className="title">Container:</div><div className="desc">Docker</div></div>
            <div className="row"><div className="title">Orchestration:</div><div className="desc">Kubernetes, Docker Compose</div></div>
            <div className="row"><div className="title">Test:</div><div className="desc">Unit, Integration</div></div>
            <div className="row"><div className="title">CI/CD:</div><div className="desc">Jenkins, CircleCI, Github Actions Workflow</div></div>
            <div className="row"><div className="title">Monitoring Tools:</div><div className="desc">Datadog, Grafana, Scalyr</div></div>
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
                <li>Maintain and enhance <b>Golang</b> services for transaction modules.</li>
                <li>Implement databases using <b>MySQL</b> and <b>DynamoDB</b>.</li>
                <li>Manage critical <b>e-commerce services</b>, such as Cart, Checkout, Promo, Campaign, and Order Management.</li>
                <li>Debug using <b>Grafana</b> and perform bug fixes.</li>
                <li>Develop <b>REST APIs</b> for service communication.</li>
                <li>Create automation workflows with <b>N8N Workflows</b>.</li>
                <li>Draft <b>Technical Requirements Documents (TRD)</b> for each project, aligning with the Product Requirement Document (PRD).</li>
                <li>Draft <b>Change Management Documents</b> for every production change, including service deployments and database query executions.</li>
                <li>Maintain <b>Unit Tests</b> for each function to ensure code reliability.</li>
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
                    <li>N8N</li>
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
            <h4>Backend Software Engineer</h4>
            <hr className="dotted"></hr>
            <div className="company">
              <div className="company-detail">
                <div className="company-name">HTC Global Services</div>
                <div className="company-place">(Kuala Lumpur, Malaysia)</div>
              </div>
              <div className="company-period">November 2022 - November 2023</div>
            </div>

            <div className="company-desc">
              <p>
              IT solution company worked for Accenture
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Worked on an Accenture project, contributing to the development of an <b>OpenAPI</b> service for a major bank in Thailand.</li>
                <li>Developed and maintained backend services with <b>Golang</b> and <b>PostgreSQL</b> database.</li>
                <li>Built <b>microservices</b> with several layers: <b>BFF</b>, <b>Orchestrator</b>, and <b>Core</b>.</li>
                <li>Managed microservices deployment with <b>Kubernetes</b>.</li>
                <li>Operated microservices on <b>GKE (Google Kubernetes Engine)</b>.</li>
                <li>Implemented activity logs using <b>Kafka</b>.</li>
                <li>Monitored system logs with <b>Google Log Explorer</b>.</li>
                <li>Implemented <b>REST APIs</b> for service communication.</li>
                <li>Collaborated with the Frontend team to improve system UI/UX.</li>
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
                <li>Developed and maintained three backend services (Warehouse Operation System, E-Commerce, Storage Management) with <b>C#</b>, <b>TypeScript, an</b>d <b>Node.js</b>.</li>
                <li>Implemented databases with <b>PostgreSQL</b> and <b>MongoDB</b>.</li>
                <li>Implemented a logging system with <b>RabbitMQ</b> and <b>MongoDB</b>.</li>
                <li>Implemented a caching system with <b>Redis</b>.</li>
                <li>Developed <b>REST APIs</b> for service communication.</li>
                <li>Applied <b>SOLID Principles</b> to codebases.</li>
                <li>Maintained <b>Unit Tests</b> for each function.</li>
                <li>Integrated file management with <b>AWS S3</b>.</li>
                <li>Created high-level and low-level documentation.</li>
                <li>Developed <b>App-Management</b>, <b>Products</b>, <b>Shops</b>, and <b>Balances</b> services.</li>
                <li>Integrated <b>Sign-In with Apple</b> for user authentication.</li>
                <li>Implemented <b>GitHub Actions CI</b> to run unit tests on active branch pushes.</li>
                <li>Containerized services using <b>Docker</b> and <b>Docker Compose</b>.</li>
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
                A leading Indonesian unicorn technology company in the <b>e-commerce</b> industry
              </p>
            </div>
            <div className="key-points">
              <span>Responsibilities</span>
              <ul>
                <li>Designed and developed Order Status Management, Generic Order Fulfillment, and Unified Order History platform services with <b>Golang</b>.</li>
                <li>Designed database systems using <b>CockroachDB</b>.</li>
                <li>Maintained high availability, reliability, and scalability for services.</li>
                <li>Implemented <b>Dependency Injection</b>, <b>Design Patterns</b>, and <b>SOLID Principles</b>.</li>
                <li>Ensured database operations adhered to <b>ACID Principles</b>.</li>
                <li>Developed asynchronous communication and retryable systems using <b>Go-NSQ Message Queue</b>.</li>
                <li>Developed a <b>GraphQL</b> server for frontend communication.</li>
                <li>Developed <b>REST APIs</b> and <b>gRPC</b> services for backend communication.</li>
                <li>Built a search engine using <b>Elasticsearch</b>.</li>
                <li>Implemented caching systems with <b>Redis Cluster</b>.</li>
                <li>Configured schedule-based autoscaling with <b>Terraform</b> during high-traffic events.</li>
                <li>Acted as PIC for two major vertical businesses (Marketplace and Digital Goods) for Unified Order History integration.</li>
                <li>Implemented system monitoring with <b>Datadog</b>, <b>Grafana</b>, and <b>Scalyr</b>.</li>
                <li>Built <b>CI/CD</b> pipelines with <b>Jenkins</b>.</li>
                <li>Maintained <b>Unit Test</b> coverage above 70%.</li>
                <li>Created <b>Integration Tests</b> for all endpoints in an isolated <b>Docker</b> environment.</li>
                <li>Developed <b>End-to-End Tests</b> covering almost all possible user flows.</li>
                <li>Conducted <b>Load Tests</b> to determine system capacity.</li>
              </ul>
            </div>
            <div className="key-points">
              <span>Achievements</span>
              <ul>
                <li>Increased service uptime to over <b>99%</b>.</li>
                <li>Maintained error rates below <b>1%</b>.</li>
                <li>Improved system performance by up to <b>300%</b> (<b>2500 RPS</b>, <b>60 ms</b> average response time).</li>
                <li>Enhanced functionality performance by optimizing <b>gRPC</b> clients, string concatenations, and reducing nested loops.</li>
                <li>Reduced dependency across services with the Order Status Management service.</li>
                <li>Accelerated vertical business delivery with the General Order Fulfillment service.</li>
                <li>Increased customer satisfaction with the Unified Order History service based on app reviews and feedback.</li>
              </ul>
            </div>
            <div className="stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>Golang</li>
                    <li>CockroachDB</li>
                    <li>Redis Cluster</li>
                  </ul>
                </div>
                <div className="qleft">
                  <ul>
                    <li>Elasticsearch</li>
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
              <div className="row"><div className="title">GPA:</div><div className="desc">3.76</div></div>
              <div className="row"><div className="title">Relevant Courses:</div><div className="desc">Computer Science, Software Engineering, Information Technology</div></div>
              <div className="row"><div className="title">Research Title:</div><div className="desc">Implementation of the Hill Cipher 4x4 Algorithm and ElGamal Elliptic Curve Algorithm on Hybrid Cryptosystem for Security Digital Image Android Based</div></div>
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
      </div>
    </>
  );
};

export default About;
