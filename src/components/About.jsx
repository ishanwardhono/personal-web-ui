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
          <h2 className="name">Ishan Wardhono</h2>
          <div className="description_inner">
            <div className="left">
              <ul>
                <li>
                  <p>
                    <span>Address:</span>
                    <a href="https://maps.app.goo.gl/GBZh6vsbXAkheovu8?g_st=ic">Medan, Indonesia</a>
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
            <div className="right">
              <ul>
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
          </div>
          {/* END DESCRIPTION INNER */}
        </div>

        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Technical Skills</h2>
          <div className="summary">
            <div className="row"><div className="title">Languages:</div><div className="desc">Golang (5+ Years), C# (1 Year), JavaScript/TypeScript, PHP.</div></div>
            <div className="row"><div className="title">Databases:</div><div className="desc">PostgreSQL, MySQL, CockroachDB, MongoDB, DynamoDB, Redis.</div></div>
            <div className="row"><div className="title">Infrastructure:</div><div className="desc">Docker, Kubernetes, AWS, GCP, GitHub Actions, N8N.</div></div>
            <div className="row"><div className="title">Messaging & Queues:</div><div className="desc">Kafka, RabbitMQ, NSQ, AWS SQS.</div></div>
            <div className="row"><div className="title">Observability:</div><div className="desc">Datadog, Grafana, Elasticsearch, Scalyr.</div></div>
            <div className="row"><div className="title">Concepts:</div><div className="desc">Microservices, REST API, gRPC, GraphQL, SOLID, DDD, Unit/Integration Testing.</div></div>
          </div>
        </div>

        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Professional Experience</h2>
          <div className="job">
            <h4>Backend Engineer</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Evermos</div>
                <div className="company-place">(Yogyakarta, Indonesia)</div>
              </div>
              <div className="company-period">November 2023 – Present</div>
            </div>

            <div>
              <p>
              <i>Social commerce platform enabling resellers to sell compliant products. Engineering the core transaction systems that handle the company's revenue flow.</i>
              </p>
            </div>
            <div className="key-points">
              <ul>
                <li><b>Core Transaction Systems:</b> Manage and optimize critical high-traffic modules including Cart, Checkout, and Order Management using Golang and MySQL.</li>
                <li><b>Process Standardization:</b> Spearhead the creation of Technical Requirements Documents (TRD) and Change Management workflows, bridging the gap between Product (PRD) and Engineering to ensure safe production deployments.</li>
                <li><b>Automation & Debugging:</b> Developed automation workflows using N8N to reduce manual operational tasks and utilized Grafana for real-time debugging and performance monitoring.</li>
                <li><b>Code Quality:</b> Enforced strict unit testing standards to maintain code reliability across transaction modules.</li>
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
                    <li>MySQL</li>
                    <li>DynamoDB</li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li>Redis</li>
                    <li>Kubernetes</li>
                  </ul>
                </div>
                <div className="qright">
                  <ul>
                    <li>Grafana</li>
                    <li>N8N Workflow</li>
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
              <div className="company-period">November 2022 – Nov 2023</div>
            </div>

            <div>
              <p>
              <i>IT consultant for a major Thai bank, responsible for building a centralized account integration platform.</i>
              </p>
            </div>
            <div className="key-points">
              <ul>
                <li><b>Account Management System:</b> Developed a centralized account management platform using Golang for a major Thai bank, enabling users to manage third-party application integrations.</li>
                <li><b>Microservices Architecture:</b> Built scalable services using a layered design (BFF, Orchestrator, Core) on Kubernetes to ensure separation of concerns, significantly improving code maintainability and supporting future system growth.</li>
                <li><b>Data & Observability:</b> Implemented PostgreSQL for transactional integrity and Kafka for immutable activity logging, while monitoring system health via Google Log Explorer on GKE.</li>
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
                    <li>GKE (Google Kubernetes Engine)</li>
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
              <div className="company-period">June 2021 – Nov 2022</div>
            </div>

            <div>
              <p>
              <i>Robotics and logistics company, building Warehouse Management System (WMS).</i>
              </p>
            </div>
            <div className="key-points">
              <ul>
                <li><b>Warehouse Systems (WMS):</b> Engineered the core modules of a Warehouse Management System using C# and PostgreSQL, applying Domain-Driven Design (DDD) and SOLID principles.</li>
                <li><b>Cloud Native Development:</b> Developed a serverless E-commerce platform using TypeScript and AWS Lambda, integrating S3 for file management and Apple Sign-In for authentication.</li>
                <li><b>CI/CD Implementation:</b> Built GitHub Actions pipelines to automatically run unit tests on branch pushes, ensuring build stability before deployment.</li>
                <li><b>System Integration:</b> Implemented RabbitMQ for asynchronous logging and Redis for caching to improve data retrieval speeds.</li>
              </ul>
            </div>
            <div className="stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>C#</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
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
                    <li>S3</li>
                    <li>Lambda Function</li>
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
              <div className="company-period">Apr 2019 – May 2021</div>
            </div>

            <div>
              <p>
              <i>Indonesia's leading E-commerce Unicorn. Worked on the core Order Management team handling massive scale.</i>
              </p>
            </div>
            <div className="key-points">
              <ul>
                <li><b>Order Management & Unified History:</b> Engineered high-performance Order Management and Unified Order History microservices using Golang. Optimized the system to handle 2500+ RPS with a fast 60ms average response time while maintaining 99.9% uptime.</li>
                <li><b>Data Scalability:</b> Designed high-availability data architectures using CockroachDB and Redis Cluster to support the Unified Order History platform, ensuring rapid data retrieval under heavy load.</li>
                <li><b>Asynchronous Processing:</b> Implemented NSQ to buffer massive traffic spikes during high seasons, preventing system overload by queuing requests and processing them asynchronously.</li>
                <li><b>Testing Standards:</b> Maintained code reliability with &gt;70% Unit Test coverage and robust Integration Tests running in isolated Docker environments.</li>
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
                    <li>NSQ</li>
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
            <h4>Programmer (Internship)</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Directorate General of Customs & Excise (Bea Cukai)</div>
                <div className="company-place">(Medan, Indonesia)</div>
              </div>
              <div className="company-period">Jun 2017 – Aug 2017</div>
            </div>

            <div>
              <p>
              <i>Indonesian Government Agency for Customs & Excise</i>
              </p>
            </div>
            <div className="key-points">
              <ul>
                <li>Modernized legacy record-keeping by developing a web-based archive management system using PHP (Laravel) and MySQL, improving data accessibility for the department.</li>
              </ul>
            </div>
            <div className="stacks">
              <span>Tech Stacks</span>
              <div className="list">
                <div className="left">
                  <ul>
                    <li>PHP</li>
                    <li>Laravel</li>
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
            <h4>Bachelor of Computer Science</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Universitas Sumatera Utara</div>
                <div className="company-place">(Medan, Indonesia)</div>
              </div>
              <div className="company-period">2014 – 2018</div>
            </div>

            <div className="common">
              <div className="row"><div className="title">GPA:</div><div className="desc">3.76/4.00</div></div>
              <div className="row"><div className="title">Relevant Coursework:</div><div className="desc">Data Structures, Algorithms, OOP.</div></div>
            </div>
          </div>
        </div>

        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Teaching Assistant</h2>
          <div className="job">
            <h4>Universitas Sumatera Utara</h4>
            
            <hr className="dotted"></hr>
            
            <div className="company">
              <div className="company-detail">
                <div className="company-name">Teaching Assistant</div>
                <div className="company-place">(Medan, Indonesia)</div>
              </div>
              <div className="company-period">Dec 2015 – Jul 2018</div>
            </div>

            <div>
              <p>
              <i>Mentored Computer Science students and led laboratory practicums for core curriculum courses.</i>
              </p>
            </div>
            <div className="key-points">
              <span>Subjects</span>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming (OOP)</li>
                <li>Algorithm Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="separator"></div>
        <div className="experience">
          <h2 className="name">Certifications</h2>
          <div className="stacks">
            <div className="list">
              <div className="left">
                <ul>
                  <li>
                    <b>Machine Learning</b> – <a href="https://coursera.org/share/ed28ed680bdbdd75530b168d53ccb85d" target="_blank" rel="noreferrer">Coursera (https://coursera.org/share/ed28ed680bdbdd75530b168d53ccb85d)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
