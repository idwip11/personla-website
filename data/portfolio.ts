import { Github, Linkedin, Mail, FileText, Instagram, BookOpen } from 'lucide-react';

export const PROFILE = {
  name: "Imam Dwi Purwanto",
  role: "Data Analyst & Full-Stack Developer",
  bio: "Data Analyst with a strong Computer Science background and over 3 years of experience driving business impact through data. Beyond traditional analytics (SQL, Tableau, Excel), I leverage my Vibe Coding skills to build dynamic tools and automated systems. I bridge the gap between raw insights and functional software, turning complex datasets into intuitive, user-centric web applications that empower data-driven decisions.",
  location: "Mataram, Indonesia",
  status: "Open to Opportunities",
  socials: [
    { name: "GitHub", url: "https://github.com/idwip11", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/imam-dwi-purwanto/", icon: Linkedin },
    { name: "Instagram", url: "https://www.instagram.com/imamdpurwanto/", icon: Instagram },
    { name: "Medium", url: "https://medium.com/@imamdwi/", icon: BookOpen },
    { name: "Email", url: "mailto:imamdpurwanto11@gmail.com", icon: Mail },

  ]
};

export const DEMOS = [
  {
    title: "Demo PMS-guesthouse-fullstack",
    videoId: "kyWiq2Ekd8c",
    description: "Full-stack Property Management System (PMS) for guesthouses with booking management, room mapping, and expense tracking. Built with TypeScript and Node.js."
  },
  {
    title: "Sales Performance Analysis Walkthrough",
    videoId: "kyWiq2Ekd8c",
    description: "Explaining the SQL queries and business insights derived from the dataset."
  }
];

export const PROJECTS = [
  {
    title: "Fastboat Booking System",
    description: "A comprehensive fast boat ticket booking system for Lombok & Sumbawa region. Features include real-time scheduling, Midtrans payment gateway integration, admin dashboard, and WhatsApp notifications.",
    tags: ["Node.js", "Express", "MySQL", "Midtrans", "Fullstack"],
    category: "fullstack",
    link: "https://github.com/idwip11/fastboat-booking",
    repo: "https://github.com/idwip11/fastboat-booking",
    public: true
  },
  {
    title: "PMS-guesthouse-fullstack",
    description: "Full-stack Property Management System (PMS) for guesthouses with booking management, room mapping, and expense tracking. Built with TypeScript and Node.js.",
    tags: ["TypeScript", "Fullstack", "Web App"],
    category: "fullstack",
    link: "https://github.com/idwip11/PMS-guesthouse-fullstack",
    repo: "https://github.com/idwip11/PMS-guesthouse-fullstack",
    public: true
  },
  {
    title: "Portfolio-DA-Sales-Performance-Analysis",
    description: "Comprehensive sales performance analysis using MySQL and complex SQL queries to derive actionable business insights and visualizations.",
    tags: ["Data Analysis", "Sales", "Analytics"],
    category: "data",
    link: "https://github.com/idwip11/Portfolio-DA-Sales-Performance-Analysis",
    repo: "https://github.com/idwip11/Portfolio-DA-Sales-Performance-Analysis",
    public: true
  },
  {
    title: "streamlit-AI-chatbot",
    description: "AI-powered health assistant built with Python and Streamlit, leveraging LangChain and Google Gemini to provide accessible medical information.",
    tags: ["Python", "Streamlit", "AI", "Chatbot"],
    category: "data",
    link: "https://github.com/idwip11/streamlit-AI-chatbot",
    repo: "https://github.com/idwip11/streamlit-AI-chatbot",
    public: true
  },
  {
    title: "customer_behavior_portfolio",
    description: "End-to-end customer behavior analysis utilizing SQL, Python, and Power BI to identify shopping patterns and key performance indicators.",
    tags: ["Jupyter Notebook", "Data Analysis", "Customer Insights"],
    category: "data",
    link: "https://github.com/idwip11/customer_behavior_portfolio",
    repo: "https://github.com/idwip11/customer_behavior_portfolio",
    public: true
  },
  {
    title: "dashboard-bebek-app-v2.0",
    description: "Advanced duck farm management dashboard built with Next.js and Prisma, featuring enhanced UI/UX for livestock tracking and logistics.",
    tags: ["JavaScript", "Dashboard", "Web App"],
    category: "fullstack",
    link: "https://github.com/idwip11/dashboard-bebek-app-v2.0",
    repo: "https://github.com/idwip11/dashboard-bebek-app-v2.0",
    public: true
  },
  {
    title: "dashboard-peternakan-bebek",
    description: "Operational dashboard for small-to-medium duck farms, enabling daily activity tracking and data persistence using JavaScript and Prisma.",
    tags: ["JavaScript", "Dashboard", "Web App"],
    category: "fullstack",
    link: "https://github.com/idwip11/dashboard-peternakan-bebek",
    repo: "https://github.com/idwip11/dashboard-peternakan-bebek",
    public: true
  },
  {
    title: "room-mapping-guesthouse",
    description: "Lightweight, visualization-focused PMS tool using Google Sheets as a backend to display real-time room occupancy and availability.",
    tags: ["HTML", "Visualization", "Mapping"],
    category: "fullstack",
    link: "https://github.com/idwip11/room-mapping-guesthouse",
    repo: "https://github.com/idwip11/room-mapping-guesthouse",
    public: true
  },
  {
    title: "portfolio_pph_analysis",
    description: "Statistical analysis of Desirable Dietary Patterns (PPH) in West Nusa Tenggara, processing complex datasets with Python for food security insights.",
    tags: ["Python", "Data Analysis", "PPH"],
    category: "data",
    link: "https://github.com/idwip11/portfolio_pph_analysis",
    repo: "https://github.com/idwip11/portfolio_pph_analysis",
    public: true
  },
  {
    title: "Analyst Occupancy Portfolio",
    description: "Comprehensive occupancy analysis portfolio utilizing Microsoft Excel (Pivot Tables, etc.) for data visualization and reporting.",
    tags: ["Microsoft Excel", "Data Analysis", "Occupancy"],
    category: "data",
    link: "https://docs.google.com/spreadsheets/d/1KYxU_8x44HvkLyICbx4tHqi3D5fkUFX6/edit?usp=sharing&ouid=116970220362432900618&rtpof=true&sd=true",
    repo: "https://docs.google.com/spreadsheets/d/1KYxU_8x44HvkLyICbx4tHqi3D5fkUFX6/edit?usp=sharing&ouid=116970220362432900618&rtpof=true&sd=true",
    public: true
  },
  {
    title: "Ultimate Content Planner",
    description: "All-in-one Google Sheet for scheduling and tracking social content.",
    tags: ["Google Sheets", "Productivity", "Content Strategy"],
    category: "template",
    price: "IDR 55,000",
    link: "https://lynk.id/bantu.kerjaan/xx2xegm8koyz"
  },
  {
    title: "Ultimate Travel Tracker",
    description: "Comprehensive travel budget, itinerary, and expense tracking system.",
    tags: ["Google Sheets", "Travel", "Budgeting"],
    category: "template",
    price: "IDR 35,000",
    link: "https://lynk.id/bantu.kerjaan/kjJJzjX"
  },
  {
    title: "Boarding House Management",
    description: "Streamlined dashboard for managing boarding house operations and tenants.",
    tags: ["Google Sheets", "Business", "Management"],
    category: "template",
    price: "IDR 19,000",
    link: "https://lynk.id/bantu.kerjaan/7Aj3qp8"
  },
  {
    title: "Daily Financial Management",
    description: "Personal finance tracker for managing daily income, expenses, and savings.",
    tags: ["Google Sheets", "Finance", "Budgeting"],
    category: "template",
    price: "IDR 25,000",
    link: "https://lynk.id/bantu.kerjaan/w6wdNy8"
  },
  {
    title: "Reading Tracker V2",
    description: "Track reading habits, set yearly targets, and visualize progress stats.",
    tags: ["Google Sheets", "Reading", "Productivity"],
    category: "template",
    price: "IDR 25,000",
    link: "https://lynk.id/bantu.kerjaan/4AKnzZQ"
  },
  {
    title: "Daily Habit Tracker",
    description: "Monitor and analyze daily habits with automatic progress tracking.",
    tags: ["Google Sheets", "Habit", "Self Improvement"],
    category: "template",
    price: "IDR 22,000",
    link: "https://lynk.id/bantu.kerjaan/MY5aNjd"
  },
  {
    title: "Running Tracker",
    description: "Track running activities, distance, pace, and progress stats.",
    tags: ["Google Sheets", "Fitness", "Running"],
    category: "template",
    price: "IDR 5,000",
    link: "https://lynk.id/bantu.kerjaan/a08r8kN"
  },
  {
    title: "Fitness & Weight Loss Tracker",
    description: "Achieve health goals with fitness, weight loss, and calorie tracking.",
    tags: ["Google Sheets", "Fitness", "Health"],
    category: "template",
    price: "IDR 20,000",
    link: "https://lynk.id/bantu.kerjaan/9kGA6P3"
  },
  {
    title: "Academic Activity Planning",
    description: "Manage Academic Life Easily. Schedules, Assignments, Extracurriculars, Campus Organizations, and More.",
    tags: ["Google Sheets", "Academic"],
    category: "template",
    price: "IDR 30,000",
    link: "https://lynk.id/bantu.kerjaan/XZL1nZW"
  },
  {
    title: "TEMPLATE GOOGLE SHEET: Reading List",
    description: "A Google Sheet template to help you track books you are currently reading and have read.",
    tags: ["Google Sheets", "Reading"],
    category: "template",
    price: "Free",
    link: "https://lynk.id/bantu.kerjaan/QMNkJbP"
  },
  {
    title: "TEMPLATE GOOGLE SHEET: Travel Budget Planner",
    description: "A simple template to help you plan your travel budget efficiently and inherently organized.",
    tags: ["Google Sheets", "Travel"],
    category: "template",
    price: "Free",
    link: "https://lynk.id/bantu.kerjaan/DWovRmB"
  },
  {
    title: "Business Intelligence (BI) Essentials",
    description: "Issued by IBM via Coursera",
    tags: ["IBM", "Business Intelligence", "Coursera"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/ibm-bi-essentials.jpg"
  },
  {
    title: "LLM-Based Tools & Gemini API Integration",
    description: "Issued by Maju Bareng AI & Hacktiv8",
    tags: ["AI", "LLM", "Gemini API"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/maju-bareng-ai.jpg"
  },
  {
    title: "Microsoft Excel: Master Data Analysis, Cleaning & Dashboards",
    description: "Issued by Udemy (Logic Labs)",
    tags: ["Excel", "Data Analysis", "Dashboards"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/udemy-excel-master.jpg"
  },
  {
    title: "Excel Data Analysis Visualization with Management Technique",
    description: "Issued by Udemy (Skillify Academy)",
    tags: ["Excel", "Visualization", "Management"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/udemy-excel-visualization.jpg"
  },
  {
    title: "Building a Winning Enterprise Marketing Strategy",
    description: "Issued by LinkedIn Learning",
    tags: ["Marketing Strategy", "Enterprise"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/linkedin-enterprise-marketing-strategy.jpg"
  },
  {
    title: "Marketing Analytics Foundations",
    description: "Issued by LinkedIn Learning",
    tags: ["Marketing Analytics", "Data"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/linkedin-marketing-analytics-foundations.jpg"
  },
  {
    title: "Marketing Analytics in Action",
    description: "Issued by LinkedIn Learning",
    tags: ["Growth Strategies", "Data Insights"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/linkedin-marketing-analytics-action.jpg"
  },
  {
    title: "Marketing: How to Use High-Impact Storytelling",
    description: "Issued by LinkedIn Learning",
    tags: ["Marketing", "Storytelling"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/linkedin-high-impact-storytelling.jpg"
  },
  {
    title: "Advanced Facebook Advertising",
    description: "Issued by LinkedIn Learning",
    tags: ["Facebook Ads", "Digital Marketing"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/linkedin-advanced-facebook-advertising.jpg"
  },
  {
    title: "Dasar-dasar Analitik Data: Data, Data di Mana-mana",
    description: "Issued by Google via Coursera",
    tags: ["Data Analytics", "Google"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/google-data-analytics-foundations.jpg"
  },
  {
    title: "PROJECT: CREATING SALES DASHBOARD IN EXCEL",
    description: "Issued by MySkill",
    tags: ["Excel", "Dashboard", "Sales"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/myskill-excel-sales-dashboard.jpg"
  }
];
