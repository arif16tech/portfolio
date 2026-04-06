import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Github, Linkedin, Mail, ArrowUpRight, MessageSquare } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import Contact from './Contact'

const socials = [
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    href: 'https://github.com/arif16tech',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/arif16tech',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    href: 'mailto:arifmalik16t@gmail.com',
  }
]
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { label: 'Java' },
      { label: 'JavaScript' },
      { label: 'TypeScript' },
      { label: 'HTML5' },
      { label: 'CSS3' },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { label: 'React' },
      { label: 'Tailwind CSS' },
      { label: 'Framer Motion' },
    ]
  },
  {
    title: "Backend",
    skills: [
      { label: 'Node.js' },
      { label: 'Express' },
      { label: 'Restful APIs' },
      { label: 'JWT' },
      { label: 'OAuth2' },
      { label: 'Rate Limiting' },
    ]
  },
  {
    title: "Databases",
    skills: [
      { label: 'PostgreSQL' },
      { label: 'MongoDB' },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { label: 'Git' },
      { label: 'GitHub' },
      { label: 'Docker' },
      { label: 'Postman' },
      { label: 'VS Code' },
    ]
  }
]

const featured = projects.filter(p => p.featured)

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[97vh] flex flex-col justify-center relative px-6 pt-32 pb-10 md:pt-40 md:pb-20">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(124,106,247,0.12)_0%,transparent_70%)] blur-[60px]"
        />

        <div className="max-w-6xl mx-auto w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="glow-dot" />
              <span className="section-label text-sm uppercase tracking-widest">Open to work</span>
            </div>

            <h1 className="font-display font-bold leading-[1.1] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] text-[#e2e8f0]">
              Hi, I'm <span className="gradient-text">Mohd. Arif</span>
            </h1>

            <p className="font-mono text-base md:text-lg mb-6 text-[#7c6af7]">
              {'Backend-Focused Full Stack Developer'}
            </p>

            <p className="text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 text-[#94a3b8]">
              I build full stack web applications with a strong focus on scalable backend systems. I work extensively with API design, authentication, databases, and building clean, performant user experiences.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <button onClick={() => navigate('/projects')} className="btn-primary flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </button>
              {/* Added View Resume Button */}
              <button onClick={() => window.open('/resume.pdf', '_blank')} className="btn-outline">
                View Resume
              </button>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-[#6b7280] font-mono text-sm tracking-widest uppercase">Find Me</span>
              <div className="w-[1px] h-4 bg-[#1e1e2e]"></div>
              <div className="flex items-center gap-4">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0aec0] hover:text-[#7c6af7] hover:scale-110 transition-all duration-300"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categorized Tech Stack - Compact Grid */}
      <section className="py-20 px-6 border-t border-[#1e1e2e]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center lg:text-left">
            <span className="section-label block mb-3">Tools I Work With</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#e2e8f0]">Tech Stack</h2>
          </div>

          {/* Compact Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {skillCategories.map((category, catIdx) => (
              <div key={category.title} className="flex flex-col gap-4">
                {/* Category Heading matching Hero font-mono style */}
                <div className="flex items-center gap-3">
                  <h3 className="font-mono text-sm font-medium uppercase tracking-wider text-[#7c6af7]">
                    {category.title}
                  </h3>
                  <div className="h-[1px] flex-1 bg-[#1e1e2e]"></div>
                </div>

                {/* Skill Tags matching Hero text-base color */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(({ label }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (catIdx * 0.05) + (i * 0.02), duration: 0.3 }}
                      viewport={{ once: true }}
                      className="text-base text-[#6b7280]"
                    >
                      {label}
                      {i < category.skills.length - 1 && (
                        <span className="ml-3 opacity-20 text-[#94a3b8]">/</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 border-t border-[#1e1e2e]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 text-center lg:text-left gap-4 lg:gap-0">
            <div>
              <span className="section-label block mb-3">Selected Work</span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#e2e8f0]">Featured Projects</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => navigate('/projects')} className="btn-outline flex items-center gap-2 mx-auto">
              View All Projects <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

    </div>
  )
}