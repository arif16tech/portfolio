import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight, MessageSquare } from 'lucide-react'

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
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left Column: Heading & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* Open to work badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7c6af7]/30 bg-[#7c6af7]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#7c6af7] animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-medium tracking-wider text-[#7c6af7] uppercase">
              Open to work
            </span>
          </div>

          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6 text-[#e2e8f0]">
            Have an idea?
            <br />
            <span className="text-[#4a5568]">Let's build it.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed max-w-md text-[#6b7280] mb-10">
            I'm currently available for freelance work and full-time opportunities. Reach out to discuss your next project or just to say hi.
          </p>

          <a
            href="mailto:arifmalik16t@gmail.com"
            className="group flex items-center gap-3 bg-[#e2e8f0] text-[#0a0a0f] px-6 py-3.5 rounded-full font-medium transition-all hover:bg-white hover:scale-[1.02]"
          >
            Start a conversation
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Right Column: Links & Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-12 lg:pt-8"
        >

          {/* Email Section */}
          <div>
            <h3 className="text-xs font-mono text-[#4a5568] uppercase tracking-widest mb-4">
              Email
            </h3>
            <a
              href="mailto:arifmalik16t@gmail.com"
              className="text-xl sm:text-2xl font-medium text-[#e2e8f0] hover:text-[#7c6af7] transition-colors duration-300"
            >
              arifmalik16t@gmail.com
            </a>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xs font-mono text-[#4a5568] uppercase tracking-widest mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1e1e2e] bg-[#111118]/50 text-[#a0aec0] hover:text-[#e2e8f0] hover:border-[#4a5568] hover:bg-white/5 transition-all duration-300"
                >
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Callout box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 rounded-2xl p-6 border flex flex-col sm:flex-row items-start gap-4 bg-[rgba(124,106,247,0.03)] border-[rgba(124,106,247,0.15)] max-w-md"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(124,106,247,0.1)] text-[#7c6af7]">
              <MessageSquare size={18} />
            </div>
            <div>
              <p className="font-display font-semibold text-sm mb-1 text-[#e2e8f0]">
                Focus Areas
              </p>
              <p className="text-sm leading-relaxed text-[#6b7280]">
                Backend systems, APIs, authentication, and scalable full-stack development.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}