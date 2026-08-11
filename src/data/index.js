// Projects data
export const projects = [
  {
    id: 1,
    title: "Lume – Fashion E-Commerce Website",
    description:
      "Built a modern and responsive fashion e-commerce frontend using React.js with reusable components, interactive UI, product browsing, and smooth animations.",
    image: "/images/lume.png",
    tech: ["React", "JavaScript", "HTML", "CSS" ]
    ,
    github: "https://github.com/badalsain024/Lume-fashion-website.git",
    live: "https://lume-fashion-website-8b2v.vercel.app/",
    featured: true,
    color: "#7c3aed",
  },
  {
    id: 2,
    title: "GD Subway – Smart College Canteen Management System",
    description:
      "Built a full-stack college canteen management system using the MERN stack, featuring user authentication, role-based access, online food ordering, order management, and separate dashboards for users, admins, and staff.",
    image: "/images/Gdsubway.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/badalsain024/Food-Ordering-System---GD-Subway.git",
    live: "https://gd-subway.vercel.app/login.html",
    featured: true,
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "Cineverse – Movie Discovery Website",
    description:
      "Built a modern and responsive movie discovery website using React.js, featuring movie browsing, search and filtering, detailed movie information, and an interactive UI designed for a smooth entertainment experience.",
    image: "/images/cineverse.png",
    tech: ["React.js", "JavaScript", "TMDB API", "CSS"],
    github: "https://github.com/badalsain024/CineVerse-Movie-web-application.git",
    live: "https://cine-verse-movie-web-application.vercel.app/",
    featured: true,
    color: "#a855f7",
  },
  {
    id: 4,
    title: "CryptoNova",
    description:
      "Cryptocurrency portfolio tracker with live price feeds, advanced charting, DeFi protocol integration, and automated trading signals.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    tech: ["Next.js", "Web3.js", "GraphQL", "Tailwind", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    color: "#f59e0b",
  },
  {
    id: 5,
    title: "TaskFlow Pro",
    description:
      "Project management tool with Kanban boards, Gantt charts, team collaboration, time tracking, and AI-powered task prioritization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React", "Redux", "Node.js", "MySQL", "AWS S3"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    color: "#10b981",
  },
  {
    id: 6,
    title: "MetaVerse Hub",
    description:
      "Immersive 3D virtual world built with WebGL and Three.js. Features avatar customization, virtual events, NFT marketplace, and spatial audio.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
    tech: ["Three.js", "React", "WebGL", "Solidity", "IPFS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    color: "#ec4899",
  },
];

// Certificates data
export const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
    credentialId: "AWS-SAA-2024-001",
    color: "#f59e0b",
    icon: "☁️",
  },
  {
    id: 2,
    title: "Meta React Developer Certificate",
    issuer: "Meta (Facebook)",
    date: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    credentialId: "META-REACT-2024",
    color: "#06b6d4",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "Google UX Design Professional",
    issuer: "Google",
    date: "2023",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    credentialId: "GOOGLE-UX-2023",
    color: "#10b981",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    credentialId: "FCC-FSWD-2023",
    color: "#7c3aed",
    icon: "💻",
  },
  {
    id: 5,
    title: "Node.js Application Developer",
    issuer: "OpenJS Foundation",
    date: "2023",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    credentialId: "OPENJS-NODE-2023",
    color: "#a855f7",
    icon: "🟢",
  },
  {
    id: 6,
    title: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "2022",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
    credentialId: "MONGO-DEV-2022",
    color: "#ec4899",
    icon: "🍃",
  },
];

// Skills data
export const skills = [
  { name: "React.js", level: 95, color: "#06b6d4" },
  { name: "Node.js", level: 90, color: "#10b981" },
  { name: "TypeScript", level: 85, color: "#3b82f6" },
  { name: "Three.js", level: 80, color: "#a855f7" },
  { name: "Python", level: 78, color: "#f59e0b" },
  { name: "MongoDB /SQL", level: 88, color: "#7c3aed" },
  { name: "AWS / DevOps", level: 75, color: "#ec4899" },
  { name: "UI/UX Design", level: 82, color: "#06b6d4" },
];

// Tech stack icons
export const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "🔷" },
  { name: "MongoDB", icon: "🍃" },
  { name: "SQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Three.js", icon: "🎮" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  {name: "JavaScript", icon: "🟨"},
];

// Navigation links
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

// Social links
export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "www.linkedin.com/in/badal-sain-8b6753344", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

// Personal info
export const personalInfo = {
  name: "Badal Sain",
  title: "Full Stack Web Developer",
  email: "badalsain024@gmail.com",
  location: "Tulsi nagar tajganj, Agra",
  bio: "I craft immersive digital experiences that blend cutting-edge technology with stunning design. Passionate about building scalable applications that push the boundaries of what's possible on the web.",
  experience: "Fresher",
  projects: "5+",
  clients: "30+",
  resumeUrl: "C:\\Users\\DELL\\Downloads\\badal resume.pdf",
};
