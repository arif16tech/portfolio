import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, tech, github, demo } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card-hover flex flex-col rounded-xl p-5 border h-full bg-[#111118] border-[#1e1e2e]"
    >
      {/* Title */}
      <h3
        className="font-display font-semibold text-base mb-3 text-[#e2e8f0]"
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-4 text-[#6b7280]"
      >
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>

      {/* 🔥 Bottom Links */}
      <div className="mt-auto flex items-center gap-3 pt-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 flex items-center gap-1 text-[#4a5568] hover:text-[#7c6af7]"
          >
            <Github size={16} />
            <span className="text-xs">Code</span>
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 flex items-center gap-1 text-[#4a5568] hover:text-[#7c6af7]"
          >
            <ExternalLink size={15} />
            <span className="text-xs">Live</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}