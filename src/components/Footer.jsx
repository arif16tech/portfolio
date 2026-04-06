import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t py-10 border-[#1e1e2e] bg-[rgba(10,10,15,0.6)]"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="glow-dot" />
          <span className="font-mono text-sm text-[#6b7280]">
            arif<span className="text-[#7c6af7]">.dev</span>
          </span>
        </div>
        <p className="text-xs font-mono text-[#4a5568]">
          © {new Date().getFullYear()} Mohd. Arif — All rights reserved
        </p>
        <div className="flex items-center gap-4">
          {[
            { href: 'https://github.com/arif16tech', icon: <Github size={16} /> },
            { href: 'https://linkedin.com/in/arif16tech', icon: <Linkedin size={16} /> },
            { href: 'mailto:arifmalik16t@gmail.com', icon: <Mail size={16} /> },
          ].map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 text-[#4a5568] hover:text-[#7c6af7]"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
