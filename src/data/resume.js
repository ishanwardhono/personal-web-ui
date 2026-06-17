export const profile = {
  name: "Ishan Wardhono",
  role: "Backend Software Engineer",
  location: "Medan, Sumatera Utara, Indonesia",
  email: "ishanwardhono@gmail.com",
  status: "Open to work · Indonesia",
  summary:
    "Backend engineer from Medan, Indonesia. Building high-availability microservices for e-commerce, banking, and logistics, with a focus on clean, testable code.",
  workSummary:
    "Seven years building backend systems with Golang and PostgreSQL. Focused on high-traffic microservices, workflow automation, and clean, well-tested code.",
  about:
    "Most of my work sits in the busiest parts of a product, like carts, checkout, order management, and account integration. These are the areas that always need to keep working, even under heavy load. I grew up in Medan and studied Computer Science at Universitas Sumatera Utara. Early in my career I worked on systems that handled heavy traffic at a large e-commerce company, and later spent a few years in Malaysia building a warehouse system and a banking integration platform. These days I focus on making important services reliable and easy to maintain, so they stay stable under load and are simple to debug and test. I also enjoy improving how a team ships code and automating repetitive work with tools like N8N. Lately I have been exploring AI tools like Claude Code and finding ways to use them to work more effectively.",
};

export const social = {
  linkedin: "https://linkedin.com/in/ishanwardhono",
  github: "https://github.com/ishanwardhono",
  instagram: "https://instagram.com/ishanwardhono",
};

export const skills = [
  { label: "Languages", value: "Golang (5+ yrs), C# (1 yr), JavaScript / TypeScript, PHP" },
  { label: "Databases", value: "PostgreSQL, MySQL, CockroachDB, MongoDB, DynamoDB, Redis" },
  { label: "Infrastructure", value: "Docker, Kubernetes, AWS, GCP, GitHub Actions, N8N" },
  { label: "Messaging", value: "Kafka, RabbitMQ, NSQ, AWS SQS" },
  { label: "Observability", value: "Datadog, Grafana, Elasticsearch, Scalyr" },
  { label: "AI Tools", value: "Claude Code, GitHub Copilot" },
  { label: "Concepts", value: "Microservices, REST, gRPC, GraphQL, SOLID, DDD, Unit / Integration Testing" },
];

export const experiences = [
  {
    role: "Backend Engineer",
    company: "Evermos",
    period: "Nov 2023 — Apr 2026",
    place: "Yogyakarta, ID",
    summary:
      "Social commerce platform enabling resellers to sell compliant products. Engineering the core transaction systems that handle the company's revenue flow.",
    bullets: [
      { lead: "Core Transaction Systems:", rest: "Manage and optimize critical high-traffic modules including Cart, Checkout, and Order Management using Golang and MySQL." },
      { lead: "Process Standardization:", rest: "Led the creation of Technical Requirements Documents (TRD) and Change Management workflows, connecting Product (PRD) and Engineering to ensure safe production deployments." },
      { lead: "Automation & Debugging:", rest: "Developed automation workflows using N8N to reduce manual operational tasks and utilized Grafana for real-time debugging and performance monitoring." },
      { lead: "Code Quality:", rest: "Enforced strict unit testing standards to maintain reliability across transaction modules." },
    ],
    tags: ["Golang", "PostgreSQL", "MySQL", "DynamoDB", "Redis", "Kubernetes", "Grafana", "N8N Workflow", "AWS"],
  },
  {
    role: "Backend Software Engineer",
    company: "HTC Global Services",
    period: "Nov 2022 — Nov 2023",
    place: "Kuala Lumpur, MY",
    summary: "IT consultant for a major Thai bank, responsible for building a centralized account integration platform.",
    bullets: [
      { lead: "Account Management System:", rest: "Developed a centralized account management platform using Golang for a major Thai bank, enabling users to manage third-party application integrations." },
      { lead: "Microservices Architecture:", rest: "Built scalable services using a layered design (BFF, Orchestrator, Core) on Kubernetes to ensure separation of concerns and support future system growth." },
      { lead: "Data & Observability:", rest: "Implemented PostgreSQL for transactional integrity and Kafka for immutable activity logging, monitoring system health via Google Log Explorer on GKE." },
    ],
    tags: ["Golang", "PostgreSQL", "Kubernetes", "Kafka", "GKE (Google Kubernetes Engine)", "GCP"],
  },
  {
    role: "Backend Developer",
    company: "Pingspace Robotics",
    period: "June 2021 — Nov 2022",
    place: "Penang, MY",
    summary: "Robotics and logistics company, building Warehouse Management System (WMS).",
    bullets: [
      { lead: "Warehouse Systems (WMS):", rest: "Built the core modules of a WMS using C# and PostgreSQL, applying Domain-Driven Design (DDD) and SOLID principles." },
      { lead: "Cloud Native Development:", rest: "Developed a serverless E-commerce platform using TypeScript and AWS Lambda, integrating S3 for file management and Apple Sign-In for authentication." },
      { lead: "CI/CD Implementation:", rest: "Built GitHub Actions pipelines to run unit tests automatically on branch pushes, ensuring build stability before deployment." },
      { lead: "System Integration:", rest: "Implemented RabbitMQ for asynchronous logging and Redis for caching to improve data retrieval speeds." },
    ],
    tags: ["C#", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker", "Serverless-Stack", "S3", "Lambda Function", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Tokopedia",
    period: "Apr 2019 — May 2021",
    place: "Jakarta, ID",
    summary: "Indonesia's leading E-commerce Unicorn. Worked on the core Order Management team handling massive scale.",
    bullets: [
      { lead: "Order Management & Unified History:", rest: "Built high-performance Order Management and Unified Order History microservices using Golang. Optimized the system to handle 2500+ RPS at 60ms average response time while maintaining 99.9% uptime." },
      { lead: "Data Scalability:", rest: "Designed high-availability data architectures using CockroachDB and Redis Cluster to support the Unified Order History platform, ensuring rapid retrieval under heavy load." },
      { lead: "Asynchronous Processing:", rest: "Implemented NSQ to buffer massive traffic spikes during peak seasons, preventing system overload by queuing and processing requests asynchronously." },
      { lead: "Testing Standards:", rest: "Maintained reliability with >70% unit test coverage and robust integration tests in isolated Docker environments." },
    ],
    tags: ["Golang", "CockroachDB", "Redis Cluster", "Elasticsearch", "NSQ", "gRPC", "GraphQL", "Docker", "Jenkins", "Datadog", "Grafana", "Aliyun", "GCP", "AWS"],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Universitas Sumatera Utara",
  period: "2014 — 2018",
  place: "Medan, ID",
  gpa: "GPA 3.76 / 4.00.",
  coursework: "Coursework in Data Structures, Algorithms & OOP.",
  ta: "Teaching Assistant (2015—2018) — led labs in Data Structures & Algorithms, OOP, and Algorithm Analysis.",
};

export const certifications = [
  {
    year: "2023",
    name: "Machine Learning",
    issuer: "Coursera",
    url: "https://coursera.org/share/ed28ed680bdbdd75530b168d53ccb85d",
  },
];
