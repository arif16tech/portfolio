import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Prodigy InfoTech',
    role: 'Full-Stack Web Developer Intern',
    period: 'Jun 2025 - Jul 2025',
    desc: 'Completed a 1-month virtual internship in full-stack web development with outstanding performance. Developed and enhanced web applications using modern technologies, gaining hands-on experience in both frontend and backend development.',
  },
  {
    company: 'CodSoft',
    role: 'Frontend Web Developer Intern',
    period: 'Jul 2024 - Aug 2024',
    desc: 'Completed a 4-week virtual internship focused on frontend web development. Built responsive web interfaces using HTML, CSS, and JavaScript, and contributed to multiple projects demonstrating strong UI development skills and attention to detail.',
  }
]

const focusAreas = [
  {
    title: 'API Design',
    desc: 'RESTful APIs built with clean contracts, robust error handling, and scalable architectures.',
  },
  {
    title: 'Authentication',
    desc: 'Deep focus on JWT strategies, refresh token rotation, and multi-tier role-based access control.',
  },
  {
    title: 'Database Design',
    desc: 'Schema modeling and optimization for both SQL (PostgreSQL) and NoSQL (MongoDB) environments.',
  },
  {
    title: 'Security',
    desc: 'Implementing security best practices including rate limiting, input sanitization, and CORS/CSRF protection.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="section-label block mb-3">About Me</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-[#e2e8f0]">
            I build things for the web.
          </h1>
          <div className="space-y-4 text-base leading-relaxed text-[#6b7280] max-w-3xl mx-auto lg:mx-0">
            <p>
              I'm Mohammad Arif, a backend-focused full stack developer who enjoys designing scalable systems and clean architectures. I think in terms of how different parts of an application connect and evolve to deliver reliable and performant experiences.
            </p>
            <p>
              My work includes building production-grade authentication systems, crafting robust APIs, and optimizing databases. I prioritize clean code, maintainability, and performance in everything I build.
            </p>
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <div className="mb-20">
          <span className="section-label block mb-6 text-center lg:text-left">Expertise</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border bg-[#111118] border-[#1e1e2e]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 rounded-full bg-[#7c6af7]" />
                  <h3 className="font-display font-semibold text-sm text-[#e2e8f0]">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#6b7280]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-24">
          <span className="section-label block mb-8 text-center lg:text-left">Professional Experience</span>
          <div className="relative pl-6 border-l border-[#1e1e2e]">
            {experiences.map(({ company, role, period, desc }, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-12 last:mb-0 relative"
              >
                <div
                  className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 bg-[#0a0a0f] border-[#7c6af7]"
                />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="font-display font-bold text-lg text-[#e2e8f0]">
                    {role}
                  </h3>
                  <span className="font-mono text-xs text-[#7c6af7]">
                    {period}
                  </span>
                </div>
                <span className="block text-sm font-medium mb-3 text-[#94a3b8]">
                  {company}
                </span>
                <p className="text-sm leading-relaxed text-[#6b7280]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}