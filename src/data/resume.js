export const profile = {
  name: "Ishan Wardhono",
  role: "Backend Software Engineer",
  location: "Medan, Sumatera Utara, Indonesia",
  email: "ishanwardhono@gmail.com",
  status: "Available for select work · Indonesia",
  summary:
    "Backend engineer based in Indonesia — building the high-availability microservices behind e-commerce, banking and logistics, and happiest with clean, testable code.",
  workSummary:
    "Specializing in Golang, PostgreSQL and high-availability microservices — high-throughput systems, workflow automation, and clean, testable code.",
  aboutLead:
    "I care about the parts users never see — the quiet machinery that has to stay up.",
  aboutBody: [
    "My work tends to live in the busiest part of a system — carts, checkouts, order management, account integration. I like making those modules fast, observable and boring in the best way: predictable under load, easy to debug at 2am, covered by tests.",
    "Lately I've been standardising how teams ship — writing the TRDs and change-management workflows that connect product intent to safe production deploys — and automating the repetitive parts with N8N. I'm happiest with clean, testable code and a Grafana board that tells the truth.",
  ],
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
    period: "Nov 2023 — Present",
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
