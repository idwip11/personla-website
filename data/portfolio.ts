import { Github, Linkedin, Mail, FileText, Instagram, BookOpen } from 'lucide-react';
import TableauIcon from '@/components/TableauIcon';

export interface ShowcaseItem {
  title: string;
  description: string;
  previewImage: string;
  tags: string[];
  projectDescription: string;
  keyFeatures: string[];
  techStack: string[];
  pdfUrl?: string;
  presentationUrl?: string;
  executiveSummaryUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  demoCredentials?: {
    username: string;
    password: string;
  };
  tableauEmbed?: string;
  lookerStudioEmbed?: string;
  keyFeaturesTitle?: string;
}

export const PROFILE = {
  name: "Imam Dwi Purwanto",
  role: "Data Analyst & Full-Stack Developer",
  bio: "I'm a Data Analyst and Full-Stack Developer with 3+ years of experience working across data, business operations, and digital solutions. I use SQL, Excel, Tableau, and Google Sheets to analyze data, build dashboards, monitor KPIs, and turn complex information into actionable business insights.\n\nWith a Computer Science background, I also build full-stack web applications using React, Next.js, JavaScript/TypeScript, and PostgreSQL. I enjoy solving problems at the intersection of data, business, and technology, and I'm open to opportunities as a Data Analyst, BI Analyst, Business Analyst, Full-Stack Developer, or Web Developer, including remote roles.",
  location: "Mataram, Indonesia",
  status: "Open to Opportunities",
  socials: [
    { name: "GitHub", url: "https://github.com/idwip11", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/imam-dwi-purwanto/", icon: Linkedin },
    { name: "Instagram", url: "https://www.instagram.com/imamdpurwanto/", icon: Instagram },
    { name: "Tableau", url: "https://public.tableau.com/app/profile/imam.dwi/vizzes", icon: TableauIcon },
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
    title: "Showcase Project: Sistem Reservasi Fastboat Online dengan Midtrans Payment",
    videoId: "4gAHknPzryQ",
    description: "A comprehensive Full-Stack Web Application for booking fast boat tickets online. This system simplifies the reservation process for customers and provides a powerful dashboard for administrators to manage fleets, schedules, and transactions."
  },
  {
    title: "Showcase Project: XQLora - Gamified SQL Learning Platform",
    videoId: "TccakWvAltQ",
    description: "A gamified learning platform built with Next.js, Docker, and Railway, designed to make learning SQL fun and engaging through interactive logic exercises."
  }
];

export const SHOWCASES: ShowcaseItem[] = [
  {
    title: "Adiputra PMS - HomiQ Internal App",
    description: "A centralized property management platform that connects reservations, daily operations, financial performance, and revenue-sharing visibility for HomiQ, funding partners, and property clients.",
    previewImage: "/images/showcases/adiputra-pms-dashboard.png",
    tags: ["PHP", "CodeIgniter 4", "MySQL"],
    projectDescription: "Adiputra PMS is a property management system built to give HomiQ's Adiputra operations one reliable workspace for managing the full property lifecycle. It brings reservations, room availability, housekeeping, front-desk activity, maintenance, finance, and reporting into a connected workflow, helping teams reduce manual coordination and make faster operational decisions.\n\nThe dashboard turns daily activity into practical business visibility through metrics such as occupancy, revenue, net profit, average stay, rooms rented, check-ins, and check-outs. This helps management monitor property performance, identify operational issues, and evaluate financial outcomes from one place.\n\nThe system also supports collaboration with funding partners and property clients by organizing owner/investor financial views and reporting around revenue-sharing arrangements. This creates a clearer basis for tracking property performance, discussing results, and managing stakeholder expectations.\n\nThe public demo is available at homiqpms.com/login for testing. The demo account provides access to the application interface and its core property management workflows.",
    keyFeatures: [
      "Centralizes reservations, room availability, housekeeping, front desk, maintenance, finance, and reporting workflows.",
      "Provides an operational dashboard for monitoring occupancy, revenue, net profit, average stay, rooms rented, check-ins, and check-outs.",
      "Supports owner and investor visibility for property performance and revenue-sharing management.",
      "Connects day-to-day property activity with financial reporting to support faster, data-informed decisions."
    ],
    techStack: ["PHP 8.3", "CodeIgniter 4", "MySQL", "JavaScript", "CSS"],
    githubUrl: "https://github.com/idwip11/PMS-v2",
    demoUrl: "https://homiqpms.com/login",
    demoCredentials: {
      username: "imam",
      password: "imam1234"
    }
  },
  {
    title: "Hospitality Business Performance Analysis",
    description: "An analysis of operational and financial performance for HomiQ, transforming booking data into strategic insights for revenue growth and profitability.",
    previewImage: "/images/showcases/hospitality-analysis.png",
    tags: ["Microsoft Excel", "Data Analysis", "Dashboard"],
    projectDescription: "This project analyzes the operational and financial performance of HomiQ, a hospitality property management company operating multiple guesthouses, villas, and homestays in Yogyakarta. The objective was to transform booking and operational data into strategic business insights that support revenue growth, profitability improvement, and more efficient portfolio management.\n\nThe analysis evaluates property performance, booking behavior, seasonal demand patterns, occupancy trends, revenue distribution, profitability, and booking channel effectiveness across HomiQ's accommodation portfolio. The project also incorporates external market benchmarks from BPS to compare occupancy performance against the local hospitality industry.\n\nThrough exploratory data analysis and business performance evaluation, several strategic issues were identified, including revenue concentration in a single property, strong seasonal demand fluctuations, heavy dependence on OTA platforms, and untapped opportunities in customer segmentation and property positioning.\n\nBased on these findings, actionable recommendations were developed, including optimizing underperforming properties, increasing direct bookings, improving weekday occupancy, and implementing clearer customer segmentation strategies to support long-term business growth and higher profit margins.",
    keyFeatures: [
      "Revenue is heavily concentrated in a single flagship property.",
      "OTA channels contribute over 70% of total revenue, reducing overall profit margins through commission costs.",
      "Weekend and peak-season demand significantly outperform weekday occupancy.",
      "Smaller properties present opportunities for better positioning and utilization.",
      "Customer segmentation and direct booking strategies can improve long-term profitability and reduce OTA dependency."
    ],
    techStack: [
      "Microsoft Excel",
      "Power Query",
      "Pivot Tables",
      "Pivot Charts",
      "Power Pivot",
      "Excel Dashboard",
      "Advanced Formulas (XLOOKUP, SUMIFS, INDEX-MATCH, LET, etc.)",
      "Business KPI Analysis"
    ],
    presentationUrl: "/hospitality-presentation.pdf",
    executiveSummaryUrl: "/hospitality-summary.pdf"
  },
  {
    title: "Sales Performance Analysis",
    description: "Comprehensive sales data analysis using SQL queries and Tableau visualizations to identify profitability drivers, regional performance, and discount impact strategies.",
    previewImage: "/images/showcases/sales-performance-flow.png",
    tags: ["SQL", "MySQL", "Tableau", "Data Analysis"],
    projectDescription: "This project focuses on analyzing sales performance to identify key profitability drivers, optimize product assortment, and improve regional sales strategies. By leveraging SQL for data processing and Tableau for visualization, the analysis provides actionable insights into revenue, profit margins, and customer behavior.",
    keyFeatures: [
      "Product profitability analysis — identifying 'Problem Products' with high sales but low margins",
      "Seasonal trend analysis for inventory planning and marketing schedules",
      "Regional efficiency comparison of sales-to-profit conversion",
      "Discount impact analysis showing the tipping point where discounts cannibalize profits",
      "8 complex SQL business queries using CTEs, Window Functions, and Joins",
      "Interactive Tableau dashboards with sales trend charts and regional maps"
    ],
    techStack: ["SQL", "MySQL", "Tableau", "Excel"],
    pdfUrl: "https://raw.githubusercontent.com/idwip11/Portfolio-DA-Sales-Performance-Analysis/main/Sales%20Performance%20Analysis_with%20MySQL.pdf",
    githubUrl: "https://github.com/idwip11/Portfolio-DA-Sales-Performance-Analysis",
    tableauEmbed: `<div class='tableauPlaceholder' id='viz1772954136682' style='position: relative'><noscript><a href='#'><img alt='Dashboard Customer ' src='https://public.tableau.com/static/images/FF/FF92NX6WX/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared/FF92NX6WX' /> <param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/FF/FF92NX6WX/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`
  },
  {
    title: "Retail Strategic Orders Report Dashboard (2014–2017)",
    description: "An in-depth data analysis of 9,994 retail orders across the US. Uncover critical insights on the 2017 growth surge, regional performance gaps in the South, and consumer segment trends to drive strategic business expansion.",
    previewImage: "/images/showcases/retail-strategic-orders.png",
    tags: ["Data Analysis", "Dashboard", "Looker Studio"],
    projectDescription: "The business operates as a multi-region retail provider specializing in three primary categories: Office Supplies, Furniture, and Technology. Currently, the company serves a diverse customer base of 793 clients across 49 states, managing a total volume of 9,994 orders. The business model is heavily driven by the Consumer segment, which accounts for over half of the total order volume.\n\nRegional Dominance: The West region is the strongest market contributor (32.09%), followed closely by the East. The South region represents the smallest market share (16.2%), indicating a significant opportunity for geographic expansion. Operations are centered in major urban hubs, with New York City and Los Angeles acting as the primary revenue engines. The business is a high-volume provider of Office Supplies, which makes up 60.3% of all orders.\n\nThe business has demonstrated consistent year-over-year growth. After a period of steady performance between 2014 and 2016, there was a major surge in 2017, where order volume peaked at approximately 3,300 orders, marking the most successful year in the recorded history.",
    keyFeatures: [
      "Exponential Growth Trend — Total orders increased from ~2,000 in 2014 to over 3,300 in 2017. The sharp increase suggests successful campaigns or expansion in product listings.",
      "Category Volume vs. Diversification — Office Supplies dominate (6,026 orders), while Technology (1,847 orders) carries higher margins but lower volume, indicating missed high-value revenue streams.",
      "Regional Performance Gap — The West (3,203 orders) produces nearly double the volume of the South (1,620 orders), requiring a deep dive into logistics, competition, and demographics.",
      "High Consumer Segment Dependency — Consumer segment accounts for 51.9% of orders. Growing the Corporate segment offers more predictable, recurring, and bulk order patterns.",
      "Geographic 'Power Cities' — NYC, LA, Philadelphia, SF, and Seattle drive massive order volume. Logistics and supply chain should be optimized for these top-tier cities.",
      "Strategic Recommendations — Launch targeted growth for the South region, implement cross-selling to move Office Supplies customers toward Technology products, develop B2B loyalty programs, and analyze Standard Class shipping for faster delivery incentives."
    ],
    techStack: ["Looker Studio", "Google Sheets", "Data Analysis"],
    lookerStudioEmbed: `<iframe width="100%" height="600" src="https://lookerstudio.google.com/embed/reporting/cd1e2540-fb9f-48e7-a1c5-783edf92a6ef/page/U8EsF" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`
  },
  {
    title: "Duck Egg Farm Performance Dashboard (Scale-Up Scenario Analysis)",
    description: "A data-driven dashboard analyzing duck egg farm operations, including feed efficiency, production trends, and a 33% scale-up scenario to support strategic decision-making.",
    previewImage: "/images/showcases/duck-egg-farm.png",
    tags: ["Google Sheets", "Data Analysis", "Dashboard"],
    projectDescription: "This project focuses on analyzing the operational performance and scalability of a duck egg farming business. The objective was to transform raw operational data into actionable insights to support data-driven decision-making.\n\nThe analysis covers a population of approximately 150 active ducks, evaluating key performance indicators such as Hen Day Production (HDP), total egg output, cost structure, and profitability trends. The business has shown strong production performance, exceeding monthly targets with 2,488 eggs produced (124% of target), alongside a +52% month-over-month profit growth.\n\nHowever, deeper analysis reveals underlying inefficiencies. The HDP stands at 59.24%, significantly below the optimal benchmark of 80%, indicating that productivity per duck is not yet maximized. Additionally, feed costs dominate the expense structure, accounting for approximately 58% of total operational costs, making it the most critical driver of profitability.\n\nTo support strategic planning, a what-if scenario modeling was conducted to simulate a 33% scale-up (from 150 to 200 ducks). The analysis evaluates the impact on feed consumption, inventory turnover, operational costs, and projected daily egg output under optimal conditions.",
    keyFeatures: [
      "HDP below optimal (59% vs 80%)",
      "Performance driven by volume, not efficiency",
      "Feed cost (~58%) as primary profit lever",
      "Cost per egg (Rp753) still improvable",
      "Scale increases output, but also operational risk",
      "Focus: optimize first, then scale"
    ],
    techStack: ["Google Sheets (Data Processing & Dashboarding)"],
    pdfUrl: "/Dasbor Performa & Skalabilitas Peternakan Telur Bebek.pdf"
  },
  {
    title: "Generational Demographics of West Nusa Tenggara (NTB) – 2025",
    description: "Default description. (Please update this later with your specific overview of the demographic insights).",
    previewImage: "/images/showcases/ntb-demographics.png",
    tags: ["Tableau", "Data Analysis", "Demographics"],
    projectDescription: "This dashboard provides a comprehensive analysis of the generational demographics of West Nusa Tenggara (NTB) for the year 2025. It segments the population across various generation cohorts—Gen Z, Millennials, Gen X, and Baby Boomers—offering detailed regional breakdowns by district. Through interactive data visualizations, it aims to uncover insights that support regional development planning and demographic research.",
    keyFeaturesTitle: "Data Processing Workflow:",
    keyFeatures: [
      "Collected population dataset for West Nusa Tenggara (NTB) Province from the official BPS (Statistics Indonesia) website.",
      "Performed data cleaning and preprocessing using Microsoft Excel.",
      "Downloaded spatial (shapefile) data for all districts in NTB.",
      "Processed and merged individual district shapefiles into a single unified spatial file using QGIS.",
      "Integrated the spatial data with the cleaned population dataset in Tableau through a data join process."
    ],
    techStack: ["Tableau", "MS Excel", "QGIS"],
    tableauEmbed: `<div class='tableauPlaceholder' id='viz1781345293144' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;RG&#47;RG58NG6PG&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared&#47;RG58NG6PG' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;RG&#47;RG58NG6PG&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
  }
];

export const PROJECTS = [
  {
    title: "FIFA World Cup 2026 Simulator",
    description: "An interactive World Cup prediction app for entering group-stage scores, calculating standings automatically, and mapping qualified teams through a complete knockout bracket.",
    tags: ["React", "Vite", "JavaScript", "Tournament Simulator"],
    category: "fullstack",
    link: "https://github.com/idwip11/bracket-WC",
    repo: "https://github.com/idwip11/bracket-WC",
    demoUrl: "https://bracket-wc.vercel.app/",
    public: true
  },
  {
    title: "Duck-Counter-Smart-Farming-Computer-Vision",
    description: "A smart farming computer vision system built with Python to automatically count and monitor livestock ducks.",
    tags: ["Python", "Computer Vision", "AI", "Smart Farming"],
    category: "data",
    link: "https://github.com/idwip11/Duck-Counter-Smart-Farming-Computer-Vision",
    repo: "https://github.com/idwip11/Duck-Counter-Smart-Farming-Computer-Vision",
    public: true
  },
  {
    title: "admin-pannel-xqlora",
    description: "Admin dashboard and management interface for the XQLora gamified SQL learning platform.",
    tags: ["Python", "Admin Panel", "Dashboard"],
    category: "data",
    link: "https://github.com/idwip11/admin-pannel-xqlora",
    repo: "https://github.com/idwip11/admin-pannel-xqlora",
    public: true
  },
  {
    title: "silsilah",
    description: "An interactive web application for generating family trees and mapping genealogy.",
    tags: ["TypeScript", "Web App"],
    category: "fullstack",
    link: "https://github.com/idwip11/silsilah",
    repo: "https://github.com/idwip11/silsilah",
    public: true
  },
  {
    title: "rumah-kucing",
    description: "A comprehensive web application for managing cat care and shelter operations.",
    tags: ["TypeScript", "Web App"],
    category: "fullstack",
    link: "https://github.com/idwip11/rumah-kucing",
    repo: "https://github.com/idwip11/rumah-kucing",
    public: true
  },
  {
    title: "PMS-v2",
    description: "Next-generation Property Management System with enhanced features and a modern user interface.",
    tags: ["JavaScript", "PMS", "Web App"],
    category: "fullstack",
    link: "https://github.com/idwip11/PMS-v2",
    repo: "https://github.com/idwip11/PMS-v2",
    public: true
  },
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
    title: "Statistics Foundations Professional Certificate by Wolfram Research",
    description: "Issued by Wolfram Research via LinkedIn Learning",
    tags: ["Wolfram Language", "Statistics", "Microsoft Excel"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/statistics-foundations-wolfram.png"
  },
  {
    title: "Getting Started as a Full-Stack Web Developer",
    description: "Issued by CompTIA via LinkedIn Learning",
    tags: ["Web Development", "Full-Stack Development"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/full-stack-web-developer-comptia.png"
  },
  {
    title: "Career Essentials in GitHub Professional Certificate",
    description: "Issued by GitHub via LinkedIn Learning",
    tags: ["GitHub"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/github-career-essentials.png"
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
    title: "Marketing Analytics Foundations",
    description: "Issued by LinkedIn Learning",
    tags: ["Marketing Analytics", "Data"],
    category: "certificate",
    link: "#",
    image: "/images/certificates/linkedin-marketing-analytics-foundations.jpg"
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
  },
  {
    title: "Belajar Dasar Data Science",
    description: "Issued by Dicoding Indonesia",
    tags: ["Data Science"],
    category: "certificate",
    link: "https://www.dicoding.com/certificates/L4PQ96J0OPO1",
    image: "/images/certificates/dicoding-dasar-data-science.png"
  },
  {
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    description: "Issued by Dicoding Indonesia",
    tags: ["Data Science", "Microsoft Fabric"],
    category: "certificate",
    link: "https://www.dicoding.com/certificates/RVZK0KQJOZD5",
    image: "/images/certificates/dicoding-data-science-fabric.png"
  }
];
