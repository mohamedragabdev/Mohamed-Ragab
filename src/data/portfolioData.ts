export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  liveUrl?: string;
  description: string[];
  technologies?: string[];
  ownershipNote?: string;
  capabilities?: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  ownership: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: 'featured' | 'secondary';
  githubUrl?: string;
  liveUrl?: string;
  caseStudyId?: string;
  keyFeatures?: string[];
  badge?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  subtitle: string;
  role: string;
  tech: string[];
  details: string;
  order: number;
}

export interface Education {
  institution: string;
  degree: string;
  department: string;
  period: string;
  location: string;
  notes: string;
}

export interface LeadershipItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'leadership' | 'certification' | 'honor';
}
export const personalInfo = {
  name: "Mohamed Ragab",

  title: "Backend & Laravel Developer",

  subheadline: "Full-Stack Development + AI/RAG Engineering",

  location: "Fayoum, Egypt",

  email: "mohammed.ragab.business@gmail.com",

  phone: "+20 110 296 0969",

  github: "https://github.com/mohamedragabdev",

  linkedin: "https://linkedin.com/in/mohamed-rragab",

  heroH1: "Mohamed Ragab — Backend & Laravel Developer",

  heroSubheadline: "Full-Stack Development + AI/RAG Engineering",

  heroSupporting:
    "I build secure REST APIs, relational databases, and full-stack web applications with Laravel and PHP — extending my backend expertise into AI-powered systems through GlucoRAG, a medical RAG application backed by Supabase/pgvector.",

  positioningStatement:
    "Laravel backend developer with hands-on experience building healthcare platforms, currently developing backend services for ADHD Compass and designing the backend architecture and vector-storage infrastructure of GlucoRAG, a medical RAG application.",

  aboutHighlights: [
    {
      label: "Backend-First",
      desc: "PHP, Laravel, REST APIs, MySQL"
    },
    {
      label: "Full-Stack Delivery",
      desc: "End-to-end healthcare platform development"
    },
    {
      label: "Healthcare Focus",
      desc: "Shifago & ADHD Compass platforms"
    },
    {
      label: "Backend Architecture",
      desc: "Laravel, APIs, databases & pgvector"
    },
    {
      label: "Engineering Foundation",
      desc: "Al-Azhar EE (Electronics & Comms)"
    }
  ],

  aboutParagraphs: [
    "I am a Backend and Laravel Developer focused on building secure REST APIs, relational database systems, and robust web applications with PHP and MySQL.",

    "I built Shifago end-to-end as its sole Full-Stack Developer, working across Laravel, Blade, JavaScript, Axios, authentication with Sanctum, real-time features with Reverb, and database design. I currently develop backend services for ADHD Compass, a healthcare consultation and support platform.",

    "My backend and systems work extends into AI-powered applications through GlucoRAG, a medical RAG system where I designed and built the Laravel backend, application database, and Supabase/pgvector vector-storage infrastructure, while developing the broader system with AI-assisted tooling.",

    "I am currently studying Electrical Engineering (Electronics & Communications) at Al-Azhar University, where I apply an engineering-oriented approach to system design, problem solving, and building reliable software."
  ]
};
export const skillsData: SkillCategory[] = [
  {
    category: "Backend",
    description: "Core server-side development, RESTful APIs, and microservices architecture",
    skills: ["PHP", "Laravel", "REST APIs", "FastAPI (exposure via GlucoRAG)"]
  },
  {
    category: "Databases & Storage",
    description: "Relational schema design, vector indexing, and data modeling",
    skills: ["MySQL", "PostgreSQL", "Supabase", "pgvector"]
  },
  {
    category: "Auth & Security",
    description: "Access control, token management, middleware, and request validation",
    skills: ["Laravel Sanctum", "Authentication", "Authorization", "Middleware", "RBAC", "Rate Limiting"]
  },
  {
    category: "Real-Time",
    description: "Event broadcasting and WebSocket communication",
    skills: ["Laravel Reverb"]
  },
  {
    category: "AI / RAG",
    description: "Retrieval pipelines, embeddings, deterministic citation, and scope enforcement",
    skills: ["Retrieval-Augmented Generation", "LangChain", "Embeddings", "Vector Search", "Citation & Grounding", "LLM Integration"]
  },
  {
    category: "Frontend",
    description: "Client-side interfaces, responsive styling, and modern UI components",
    skills: ["Blade", "JavaScript", "React", "TypeScript", "Bootstrap", "Tailwind CSS", "Axios"]
  },
  {
    category: "Tools & DevOps",
    description: "Version control, environment orchestration, and development toolchain",
    skills: ["Git", "GitHub", "Linux", "Postman", "Composer", "Vite"]
  }
];

export const experienceData: Experience[] = [
  {
    company: "ADHD Compass",
    role: "Backend Developer",
    period: "June 2026 – Present",
    location: "Cairo, Egypt",
    description: [
      "Developing backend functionality for a healthcare platform focused on ADHD medical consultation and support services.",
      "Collaborating on service logic, API endpoints, and healthcare data workflows to support clinician and patient interactions."
    ]
  },
  {
    company: "Shifago",
    role: "Full-Stack Laravel Developer",
    period: "Oct 2025 – Present",
    location: "Egypt",
    liveUrl: "https://shifago.health",
    ownershipNote: "Sole Full-Stack Developer",
    capabilities: ["Backend API", "Blade & JS Frontend", "MySQL Schema", "Sanctum Auth", "Reverb Real-Time"],
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap", "JavaScript", "Axios", "Laravel Sanctum", "Laravel Reverb", "Git"],
    description: [
      "Built and maintain a full-stack healthcare and home medical care platform end-to-end using Laravel, PHP, MySQL, Blade, JavaScript, Bootstrap, and Axios.",
      "Designed backend REST APIs, relational database schema, and dashboard functionality supporting healthcare service workflows.",
      "Implemented secure authentication and authorization with Laravel Sanctum and real-time live event updates with Laravel Reverb.",
      "Optimized database queries, indexes, and application performance while managing source code and releases via Git and GitHub."
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "glucorag",
    title: "GlucoRAG",
    tagline: "Medical RAG system for Type 2 Diabetes screening guidance with Supabase/pgvector & Laravel",
    role: "System Architect & Backend Owner",
    ownership: "Architect & Laravel Backend Owner (FastAPI/React AI-assisted via Antigravity)",
    problem: "Primary-care clinicians need fast, guideline-grounded answers about Type 2 Diabetes screening without risking hallucinated medical claims or unverifiable recommendations.",
    solution: "A medical RAG system that answers screening questions strictly from an ingested, curated guideline corpus, with mandatory citations and hard refusal rules for diagnosis/treatment/emergency requests.",
    technologies: ["Laravel", "PHP", "MySQL", "Sanctum", "FastAPI", "LangChain", "Supabase", "pgvector", "React", "TypeScript", "OpenRouter"],
    category: "featured",
    badge: "AI Hackathon 2026 Project",
    githubUrl: "https://github.com/mohamedragabdev/glucoRag",
    caseStudyId: "glucorag",
    keyFeatures: [
      "Strict guideline-grounded screening retrieval (ADA & USPSTF corpus)",
      "Deterministic citation objects derived from retrieval metadata",
      "Fail-closed safety policy (refuses diagnosis, treatment, emergency, out-of-scope)",
      "Decoupled asynchronous queue job architecture (ProcessRagMessageJob)",
      "Separated relational application DB (MySQL) and vector index store (Supabase/pgvector)"
    ]
  },
  {
    id: "shifago",
    title: "Shifago",
    tagline: "Full-Stack Laravel Healthcare & Home Medical Care Platform",
    role: "Sole Full-Stack Developer",
    ownership: "Sole developer — complete end-to-end design, backend, frontend, and deployment",
    problem: "Patients and families require a dependable, accessible platform to request and manage home healthcare and medical consultation services.",
    solution: "A comprehensive full-stack Laravel healthcare application featuring secure role-based portals, booking management, real-time notifications via Reverb, and responsive dashboards.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap", "JavaScript", "Axios", "Sanctum", "Reverb"],
    category: "featured",
    badge: "Production Platform",
    liveUrl: "https://shifago.health",
    keyFeatures: [
      "End-to-end full-stack platform built entirely from scratch",
      "Healthcare service scheduling, provider workflows, and administrative dashboards",
      "Laravel Sanctum token authentication & role-based access control",
      "Real-time event broadcasting powered by Laravel Reverb",
      "Relational schema design with optimized queries and indexes"
    ]
  },
  {
    id: "ecommerce-api",
    title: "E-Commerce RESTful API",
    tagline: "Layered role-based e-commerce backend with Sanctum authentication",
    role: "Sole Developer",
    ownership: "Sole developer",
    problem: "Modern e-commerce applications require strict separation of concerns, robust authorization (Admin/Seller/Customer), and automated transactional workflows.",
    solution: "A production-structured REST API implementing a layered architecture (Controllers → Form Requests → Services → Models) with token authentication, shopping cart, order processing, and event-driven email notifications.",
    technologies: ["Laravel", "PHP", "MySQL", "Laravel Sanctum", "Form Requests", "Service Layer", "Events & Listeners"],
    category: "featured",
    githubUrl: "https://github.com/mohamedragabdev/ecommerce-api",
    keyFeatures: [
      "Layered architecture: Controllers → Form Requests → Service Layer → Eloquent Models",
      "Role-based access control (Admin, Seller, Customer) via Sanctum",
      "Event/Listener architecture for automated order notifications and emails",
      "Database seeders and factories for reproducible testing and staging"
    ]
  },
  {
    id: "taskaty",
    title: "Taskaty",
    tagline: "Task management web application with priority tracking and category filters",
    role: "Sole Developer",
    ownership: "Sole developer",
    problem: "Users need an intuitive tool to organize daily workloads with clear prioritization, categories, and completion tracking.",
    solution: "A clean task management web application with user authentication, comprehensive CRUD operations, category segmentation, and priority workflows.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    category: "secondary",
    githubUrl: "https://github.com/mohamedragabdev/taskaty",
    keyFeatures: [
      "Secure user authentication and task isolation",
      "Categorized task organization with priority-level filters",
      "Dynamic status updates and clean Blade-rendered UI"
    ]
  }
];

export const glucoRagDetails = {
  overview: "GlucoRAG is a specialized medical Retrieval-Augmented Generation system restricted to Type 2 Diabetes screening guidance for primary-care clinicians — not diagnosis, not treatment, and not emergency care.",
  problem: "Primary-care clinicians must apply complex, frequently-updated, sometimes conflicting screening guidelines (ADA, USPSTF) under time pressure. General-purpose LLMs risk hallucinating numeric cutoffs and cannot reliably provide grounded, verifiable source citations.",
  solution: "A retrieval-first pipeline: guideline PDFs are chunked and embedded into Supabase/pgvector; clinician questions are answered only from retrieved chunks; every answer carries a citation trail back to a real document/page; out-of-scope, diagnosis, treatment, and emergency requests are refused by design (fail-closed).",
  
  hackathonInfo: {
    title: "AI Hackathon 2026",
    role: "Participant",
    period: "August 2026",
    partners: "CREATIVA Innovation Hubs, Orange Digital Center Egypt, ITIDA, TIEC, and INSTANT Software Solutions",
    description: "GlucoRAG was engineered as the hands-on project developed during the AI Hackathon 2026 program."
  },

  backendHighlights: [
    {
      title: "REST API Surface",
      desc: "Sanctum bearer-token auth (register/login/logout), conversations CRUD, async message submission (202 Accepted) and status polling."
    },
    {
      title: "Ownership & Rate Limiting",
      desc: "EnsureConversationOwnership middleware enforcing per-user 403 Forbidden isolation; rate limiting capped at 20 requests/minute per user."
    },
    {
      title: "ProcessRagMessageJob (Queue)",
      desc: "Dispatched asynchronously, calls FastAPI microservice with shared internal secret header, 3 retries with exponential backoff on transient errors."
    }
  ],

  // Contribution split: exactly as specified in Section 18.4
  contributions: {
    personallyBuilt: [
      "Laravel backend architecture: REST API, Sanctum authentication/authorization, conversation ownership middleware.",
      "Application database schema: users, conversations, messages, message_citations, with foreign keys, indexes, and cascading deletes.",
      "Asynchronous queue job design (ProcessRagMessageJob) decoupling LLM latency from the HTTP request cycle.",
      "Supabase/pgvector vector-storage infrastructure design (separate from the application database).",
      "Overall system architecture connecting the React frontend, Laravel API, FastAPI RAG service, and Supabase."
    ],
    aiAssisted: [
      "FastAPI RAG service and LangChain retrieval/generation pipeline.",
      "React/TypeScript frontend interface.",
      "Evaluation harness and safety/refusal-scope validation logic."
    ]
  },

  pipelineSteps: [
    {
      step: 1,
      title: "PDF Guideline Ingestion",
      description: "Ingestion of clinical guidelines (ADA Standards of Care, USPSTF) via pypdf loader with strict page-level metadata preservation."
    },
    {
      step: 2,
      title: "Deterministic Chunking",
      description: "Text chunking via RecursiveCharacterTextSplitter (CHUNK_SIZE=800, CHUNK_OVERLAP=150) with deterministic chunk IDs."
    },
    {
      step: 3,
      title: "Vector Embedding & Storage",
      description: "Embedding generation stored in Supabase document_chunks table with 1536-dimensional vectors and ivfflat cosine index."
    },
    {
      step: 4,
      title: "Similarity Retrieval (top-k=5)",
      description: "Query-time vector search executing match_document_chunks RPC function to retrieve top-5 semantically relevant chunks."
    },
    {
      step: 5,
      title: "Grounded Generation",
      description: "Context-grounded prompt compilation via LangChain and OpenRouter LLM, enforcing structured JSON output schema."
    },
    {
      step: 6,
      title: "Deterministic Citation Trail",
      description: "Citation objects constructed strictly from retrieved chunk metadata (document, section, page)—never hallucinated by the LLM."
    }
  ],

  databaseArchitecture: {
    appDb: {
      name: "Application Database (MySQL)",
      purpose: "User credentials, conversation state, message history, and verified citation records.",
      tables: [
        { name: "users", desc: "User credentials and authentication profiles" },
        { name: "conversations", desc: "Clinician query sessions linked to user with cascading delete" },
        { name: "messages", desc: "Prompt and response records linked to conversation" },
        { name: "message_citations", desc: "Verified document references attached to individual messages" }
      ],
      badge: "Relational Application Data",
      cascadeRule: "onDelete('cascade') enforced at every level"
    },
    vectorDb: {
      name: "Vector Store (Supabase / pgvector)",
      purpose: "Clinical guideline chunk embeddings and semantic similarity search, decoupled from relational user data.",
      tables: [
        { name: "document_chunks", desc: "Guideline text chunks with vector(1536) embedding column and ivfflat cosine index" },
        { name: "match_document_chunks()", desc: "Postgres RPC function executing cosine similarity retrieval (top-k=5)" }
      ],
      badge: "Vector Retrieval Infrastructure",
      cascadeRule: "Dedicated vector store, decoupled from transactional user storage"
    }
  },

  safetyRules: [
    {
      category: "Out-of-Scope Requests",
      code: "out_of_scope",
      action: "Refused with fixed guidance notice",
      explanation: "Questions unrelated to Type 2 Diabetes screening are immediately rejected."
    },
    {
      category: "Diagnosis Requests",
      code: "refused_diagnosis",
      action: "Hard refusal",
      explanation: "System strictly avoids diagnosing individuals; limits output to screening threshold guidelines."
    },
    {
      category: "Treatment & Prescription",
      code: "refused_treatment",
      action: "Hard refusal",
      explanation: "Medication dosages, prescriptions, and therapeutic regimens are rejected by policy."
    },
    {
      category: "Emergency & Acute Triage",
      code: "refused_emergency",
      action: "Hard refusal + emergency alert",
      explanation: "Acute hyperglycemic/hypoglycemic emergencies trigger an immediate redirection to emergency services."
    },
    {
      category: "Insufficient Evidence",
      code: "insufficient_evidence",
      action: "Explicit refusal to extrapolate",
      explanation: "If similarity score or chunk relevance falls below threshold, the system reports insufficient evidence rather than guessing."
    }
  ],

  evaluationDimensions: [
    {
      dimension: "Retrieval Accuracy",
      target: "Target ≥90% on curated in-scope queries",
      metric: "Recall@5",
      description: "Evaluates whether the relevant clinical guideline chunks are present in the top-5 retrieved results."
    },
    {
      dimension: "Citation Integrity",
      target: "Target 100% (enforced deterministically)",
      metric: "Deterministic Citation Match",
      description: "Verifies every cited document name, section, and page number maps 1-to-1 to an actual retrieved chunk."
    },
    {
      dimension: "Groundedness & Faithfulness",
      target: "Target ≥95%",
      metric: "Context Faithfulness Score",
      description: "Measures that all clinical assertions in the answer are strictly supported by the retrieved context."
    },
    {
      dimension: "Medical Safety & Scope Adherence",
      target: "Target 100% Fail-Closed Rate",
      metric: "Refusal Category Accuracy",
      description: "Validates fail-closed behavior across diagnosis, treatment, emergency, out-of-scope, and insufficient-evidence probes."
    },
    {
      dimension: "Pipeline Latency",
      target: "Monitored per-stage & end-to-end",
      metric: "Stage & End-to-End Latency",
      description: "Monitors embedding latency, vector retrieval duration, and generation time decoupled via asynchronous queue jobs."
    }
  ]
};

export const architectureNodes: ArchitectureNode[] = [
  {
    id: "frontend",
    label: "React + TS Client",
    subtitle: "Clinician Interface",
    role: "User interface for screening inquiries, citation inspector, and session management.",
    tech: ["React 18", "TypeScript", "Tailwind CSS"],
    details: "Provides a responsive clinician query interface with real-time citation popovers, conversation histories, and clear refusal banners.",
    order: 1
  },
  {
    id: "laravel",
    label: "Laravel REST API",
    subtitle: "Auth, Persistence & Queue Dispatch",
    role: "Core orchestrator handling token auth, conversation ownership, and asynchronous queue jobs.",
    tech: ["Laravel 11", "PHP 8.2+", "Sanctum", "MySQL"],
    details: "Authenticates users via Sanctum, enforces EnsureConversationOwnership middleware (403 Forbidden), applies 20 req/min rate limits, persists messages/citations to MySQL with cascading deletes, and dispatches ProcessRagMessageJob.",
    order: 2
  },
  {
    id: "fastapi",
    label: "FastAPI RAG Service",
    subtitle: "Retrieval & Generation Microservice",
    role: "Handles query processing, vector similarity retrieval, and safety-enforced LLM interaction.",
    tech: ["FastAPI", "Python", "LangChain", "Pydantic"],
    details: "Internal microservice executing LangChain retrieval pipelines, formatting prompt context, calling pgvector similarity RPC (top-k=5), and enforcing fail-closed JSON schema.",
    order: 3
  },
  {
    id: "storage",
    label: "Supabase pgvector & MySQL",
    subtitle: "Dual Decoupled Storage Layer",
    role: "Dedicated vector embeddings storage alongside relational application data.",
    tech: ["Supabase", "pgvector (1536-dim)", "MySQL 8.0"],
    details: "Relational data (users, sessions, citations) is maintained in MySQL with cascade deletes; guideline embeddings reside in Supabase with an ivfflat cosine index.",
    order: 4
  },
  {
    id: "llm",
    label: "OpenRouter LLM",
    subtitle: "Context-Grounded Inference",
    role: "Generates structured clinical responses strictly from retrieved context chunks.",
    tech: ["OpenRouter API", "Structured JSON Schema"],
    details: "Inference endpoint strictly bound to retrieved guideline chunks; outputs structured JSON with deterministic citations or structured refusal codes.",
    order: 5
  }
];

export const educationData: Education[] = [
  {
    institution: "Al-Azhar University",
    degree: "Bachelor of Science in Electrical Engineering",
    department: "Electronics and Communications Engineering",
    period: "Oct 2023 – July 2028 (Expected)",
    location: "Cairo / Egypt",
    notes: "Rigorous analytical and engineering curriculum covering digital systems, signal processing, algorithms, computer architecture, and mathematical foundations."
  }
];

export const leadershipData: LeadershipItem[] = [
  {
    title: "President",
    organization: "Hult Prize Al-Azhar University Team",
    period: "Oct 2025 – Feb 2026",
    description: "Led the university chapter for the global social entrepreneurship competition; directed executive committee, team coordination, and on-campus program execution.",
    type: "leadership"
  },
  {
    title: "Campus Director (HR & Organizing Committee)",
    organization: "Hult Prize Al-Azhar University",
    period: "Jun 2025 – Oct 2025",
    description: "Managed team recruitment, member onboarding, organizational logistics, and operational planning for university events.",
    type: "leadership"
  },
  {
    title: "Vital Training Program",
    organization: "Vital Training Initiative",
    period: "Completed",
    description: "Scored 92% (Ranked 5th in the Governorate) across rigorous problem solving, communication, and technical development tracks.",
    type: "honor"
  },
  {
    title: "Tech Nights Bootcamp",
    organization: "Technology Development Programs",
    period: "Completed",
    description: "Participated in intensive engineering workshops focusing on software architecture, collaboration, and modern development workflows.",
    type: "certification"
  },
  {
    title: "Student Conference Participation",
    organization: "Faculty of Engineering (Electrical Department), Al-Azhar University",
    period: "Participated",
    description: "Participated in annual engineering conferences engaging in electronics, communications, and computational systems discussions.",
    type: "certification"
  }
];
