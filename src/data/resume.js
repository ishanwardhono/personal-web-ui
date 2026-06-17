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
      "Social commerce platform — engineering the core transaction systems that carry the company's revenue flow.",
    bullets: [
      { lead: "Core Transaction Systems —", rest: "optimise high-traffic Cart, Checkout & Order Management in Golang and MySQL." },
      { lead: "Process Standardization —", rest: "led TRD & Change-Management workflows connecting Product and Engineering for safe deploys." },
      { lead: "Automation & Debugging —", rest: "N8N automation to cut manual ops; Grafana for real-time monitoring." },
    ],
    tags: ["Golang", "PostgreSQL", "MySQL", "DynamoDB", "Redis", "Kubernetes", "Grafana", "N8N", "AWS"],
  },
  {
    role: "Backend Software Engineer",
    company: "HTC Global Services",
    period: "Nov 2022 — Nov 2023",
    place: "Kuala Lumpur, MY",
    summary: "IT consultant for a major Thai bank — a centralized account-integration platform.",
    bullets: [
      { lead: "Account Management System —", rest: "centralized platform in Golang for managing third-party integrations." },
      { lead: "Microservices Architecture —", rest: "layered design (BFF, Orchestrator, Core) on Kubernetes." },
      { lead: "Data & Observability —", rest: "PostgreSQL for integrity, Kafka for immutable activity logs on GKE." },
    ],
    tags: ["Golang", "PostgreSQL", "Kubernetes", "Kafka", "GKE", "GCP"],
  },
  {
    role: "Backend Developer",
    company: "Pingspace Robotics",
    period: "Jun 2021 — Nov 2022",
    place: "Penang, MY",
    summary: "Robotics & logistics — building a Warehouse Management System.",
    bullets: [
      { lead: "Warehouse Systems —", rest: "core WMS modules in C# & PostgreSQL with DDD and SOLID." },
      { lead: "Cloud Native —", rest: "serverless e-commerce in TypeScript + AWS Lambda, S3 and Apple Sign-In." },
      { lead: "System Integration —", rest: "RabbitMQ for async logging, Redis caching for faster retrieval." },
    ],
    tags: ["C#", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Tokopedia",
    period: "Apr 2019 — May 2021",
    place: "Jakarta, ID",
    summary: "Indonesia's leading e-commerce unicorn — core Order Management at massive scale.",
    bullets: [
      { lead: "Order Management & Unified History —", rest: "Golang microservices at 2500+ RPS / 60ms avg with 99.9% uptime." },
      { lead: "Data Scalability —", rest: "high-availability CockroachDB and Redis Cluster architectures." },
      { lead: "Async Processing —", rest: "NSQ to buffer peak-season traffic spikes." },
    ],
    tags: ["Golang", "CockroachDB", "Redis Cluster", "Elasticsearch", "NSQ", "gRPC", "GraphQL", "Docker", "Datadog"],
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
