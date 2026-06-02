// Centralized content drawn from Swarnali Bhattacharyya's resume.

export const SOCIAL = {
  email: 'bswarnali78@gmail.com',
  location: 'Indore, Madhya Pradesh, India',
  linkedin: 'https://linkedin.com/in/swarnali-bhattacharyya-2a141722b',
  github: 'https://github.com/swarnaliiiiii',
};

export const PROJECTS = [
  {
    id: 'finsight-ai',
    name: 'FinSight AI',
    tags: ['AI & ML', 'BACKEND'],
    tagline: 'AI-Powered Investment Advisor',
    tech: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'LangChain',
      'LangGraph',
      'Groq',
      'Gemini Embeddings',
      'Vector Search',
      'asyncio',
      'Docker',
    ],
    description:
      'Investment advisor platform that processes real-time financial, macroeconomic, and geopolitical data from 15+ sources to answer free-form investor queries with structured insights and forecasts. Layered backend separates deterministic data-fetching pipelines from LLM reasoning agents — enforced through import-linter contracts and strict execution-budget controls. Implements Monte Carlo forecasting, Gemini embedding–based vector search, persistent personalization memory, and async event-classification pipelines.',
    demo: 'https://www.loom.com/share/fbe8e216d1f94e6bbc57acc312c9d615',
    featured: false,
  },
  {
    id: 'tradeguard',
    name: 'TradeGuard',
    tags: ['AI & ML', 'BACKEND'],
    tagline: 'Real-Time Trading Intelligence',
    tech: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'LangChain',
      'Groq',
      'WebSockets',
      'Vector Search',
      'Docker',
    ],
    description:
      'Real-time trading intelligence system that evaluates market data, macroeconomic indicators, and financial news to generate risk-aware trading insights. Async backend workflows with centralized orchestration for sentiment analysis, market monitoring, and structured signal generation. Integrates vector-search financial retrieval, live event monitoring, and AI-powered response pipelines with charts, citations, portfolio-risk analysis, and actionable trading signals.',
    repo: 'https://github.com/swarnaliiiiii/Tradeguard',
    featured: false,
  },
  {
    id: 'lokus',
    name: 'Lokus',
    tags: ['MOBILE', 'BACKEND'],
    tagline: 'A Travel Engaging App',
    tech: ['Flutter', 'FastAPI', 'Firebase', 'GCP', 'Docker'],
    description:
      'Cross-platform travel application with real-time location tracking, an interactive itinerary planner, bookmarking, and trip memories through media uploads and digital journaling — backed by cloud-based multi-device sync.',
    repo: 'https://github.com/swarnaliiiiii/lokus',
    featured: false,
  },
  {
    id: 'devrate',
    name: 'DevRate',
    tags: ['BACKEND', 'TOOLS'],
    tagline: 'Distributed Rate Limiting & Decision Engine',
    tech: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    description:
      'Distributed, policy-driven rate-limiting engine supporting per-tenant, per-route, per-user, and global limits. DAG-based decision tree with short-circuit evaluation, progressive penalty escalation, abuse detection, and sliding-window limits.',
    repo: 'https://github.com/swarnaliiiiii/rate_limiter',
    demo: 'https://www.loom.com/share/cb3f535a422e47cebb6937f17f127235',
    featured: true,
  },
];

export const EXPERIENCE = [
  {
    company: 'Reqpedia',
    role: 'SDE Intern',
    period: 'Oct 2025 — Present',
    location: 'Remote',
    summary:
      'Building an AI-based aviation procurement platform — multi-tenant architecture, Redis caching, payment workflows, Azure Blob storage, and DevOps pipelines.',
  },
  {
    company: 'Gr8ame',
    role: 'Web Dev Intern',
    period: 'Sep 2024 — Feb 2025',
    location: 'Remote',
    summary:
      'Engineered the complete backend from scratch with Java, Spring Boot, and OAuth 2.0 for 5K+ users. Improved platform performance by 30% via a modular service architecture.',
  },
  {
    company: 'Indore Municipal Corporation',
    role: 'IT Intern',
    period: 'Jun 2024 — Aug 2024',
    location: 'Indore, India',
    summary:
      'Built a full-stack tax ticketing system in Java & Spring Boot MVC for 10K+ municipal staff, with 98% test coverage and a 50% reduction in manual handling time.',
  },
];

export const ACHIEVEMENTS = [
  '150+ LeetCode problems solved',
  'Top Team — Smart India Hackathon 2024',
  'Open-source contributor (merged PR)',
  'Content Lead — GDSC IIPS 2023–24 (300+ attendees)',
];

export const SKILLS = ['Communication', 'Teamwork', 'Problem Solving'];

export const SKILL_CATEGORIES = [
  {
    title: 'Languages & Core CS',
    items: ['Java', 'Python', 'JavaScript', 'Dart', 'SQL'],
  },
  {
    title: 'Backend & Full Stack',
    items: [
      'FastAPI',
      'Spring Boot',
      'Django',
      'Flask',
      'React',
      'Flutter',
      'REST APIs',
      'OAuth2',
      'SQLAlchemy',
      'AsyncIO',
    ],
  },
  {
    title: 'AI & ML Systems',
    items: [
      'LangChain',
      'LangGraph',
      'RAG Pipelines',
      'Vector Search',
      'Gemini Embeddings',
      'Groq',
      'Prompt Engineering',
      'NLP Pipelines',
      'Agent Orchestration',
      'SpaCy',
      'TF-IDF',
      'Random Forest',
      'Monte Carlo Forecasting',
    ],
  },
  {
    title: 'Databases & Infrastructure',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQLite',
      'Redis',
      'Multi-Tenant Architectures',
      'Rate Limiting',
      'Workflow Orchestration',
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    items: [
      'Docker',
      'Azure',
      'Terraform',
      'Azure DevOps',
      'SonarQube',
      'Trivy',
      'Firebase',
      'Supabase',
      'Git/GitHub',
      'Linux',
      'Postman',
    ],
  },
];

export const PROCESS = [
  {
    num: '01',
    title: 'Architect',
    desc: 'Understand system requirements, data flows, and constraints before a line of code is written.',
    icon: 'target',
  },
  {
    num: '02',
    title: 'Engineer',
    desc: 'Translate insight into scalable, modular, production-grade services and clean architecture.',
    icon: 'venn',
  },
  {
    num: '03',
    title: 'Ship',
    desc: 'CI/CD pipelines, cloud infra, security scanning — deployed and observable in production.',
    icon: 'checklist',
  },
];
