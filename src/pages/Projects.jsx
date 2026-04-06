import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SearchBar from '../components/SearchBar'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return projects
    const q = query.toLowerCase()
    return projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.tech.some(t => t.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:text-left"
        >
          <span className="section-label block mb-3">Portfolio</span>
          <div className="flex flex-col lg:flex-row lg:items-end items-center justify-between gap-6">
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
              All Projects
            </h1>
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </motion.div>

        {/* Results count */}
        <p className="text-xs font-mono mb-6 text-[#4a5568] text-center lg:text-left">
          {filtered.length === projects.length
            ? `${projects.length} projects`
            : `${filtered.length} of ${projects.length} results for "${query}"`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="font-mono text-sm mb-2 text-[#4a5568]">
              No projects found for
            </p>
            <p className="font-display font-semibold text-lg text-[#7c6af7]">
              "{query}"
            </p>
            <button
              onClick={() => setQuery('')}
              className="mt-6 text-xs font-mono underline transition-colors text-[#4a5568] hover:text-[#7c6af7]"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
