const projects = [
  {
    id: 1,
    title: "ResumeAI Coach — AI Resume Analyzer & Interview Prep",
    description: "A full-stack AI platform that analyzes resumes with real-time ATS scoring, keyword gap analysis, and AI-powered interview preparation across Technical, HR, and Resume-based modes. Features Google OAuth 2.0, OTP verification, and Cloudinary-based resume processing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Google OAuth", "Cloudinary"],
    github: "https://github.com/arif16tech/resumeai-coach",
    demo: "https://resumeai-coach.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "ChatApp — Real-Time Full-Stack Chat Application",
    description: "A production-ready chat platform with 1-to-1 and group messaging via Socket.IO. Includes WhatsApp-style message ticks, typing indicators, real-time presence tracking, media sharing via Cloudinary, and secure JWT authentication with OTP verification.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Cloudinary"],
    github: "https://github.com/arif16tech/chat-app",
    demo: "https://chatapp16tech.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "StyleStore — Full-Stack E-Commerce Platform",
    description: "A feature-complete e-commerce platform with product catalog, cart management (Redux Toolkit), order tracking, and Admin dashboard with inventory control. Integrated Stripe payments, Google OAuth 2.0, and role-based access control for Admin and Customer workflows.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Stripe", "Google OAuth"],
    github: "https://github.com/arif16tech/ecommerce-app",
    demo: "https://stylestore16tech.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Authentication System",
    description: "A production-grade authentication system with JWT access and refresh tokens stored in httpOnly cookies. Implemented RBAC, OTP email verification, Google OAuth 2.0, rate limiting, Zod input validation, and secure HTTP headers.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth", "Zod"],
    github: "https://github.com/arif16tech/auth-system",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    title: "Developer Portfolio",
    description: "A responsive personal portfolio built with React and Tailwind CSS to showcase projects, skills, and experience. Focused on clean UI, smooth navigation, and modern design principles.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/arif16tech/portfolio",
    demo: "https://arif16tech.vercel.app",
    featured: false,
  }
]

export default projects