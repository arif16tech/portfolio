import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '#contact', label: 'Contact', isContact: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      
      if (window.location.pathname === '/') {
        const contactEl = document.getElementById('contact')
        if (contactEl) {
          const rect = contactEl.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= 0) {
            setActiveSection('contact')
          } else {
            setActiveSection('home')
          }
        }
      } else {
        setActiveSection('')
      }
    }
    
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const handleContactClick = (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'border-[rgba(30,30,46,0.8)] bg-[rgba(10,10,15,0.9)] backdrop-blur-[12px]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <NavLink to="/" className="flex items-center gap-2 md:gap-3 group">
            {/* Desktop: Dot */}
            <div className="hidden md:block w-2 h-2 rounded-full bg-[#7c6af7] shadow-[0_0_8px_#7c6af7]" />
            
            {/* Mobile: Rotating Avatar */}
            <div className="flex md:hidden relative items-center justify-center w-8 h-8">
              {/* Outer spinning border */}
              <div className="absolute inset-0 rounded-full border-2 border-t-[#7c6af7] border-r-transparent border-b-[#7c6af7] border-l-transparent animate-[spin_4s_linear_infinite]" />
              {/* Inner dashed spinning border (rotating in reverse) */}
              <div className="absolute inset-[3px] rounded-full border border-dashed border-[#a0aec0]/40 animate-[spin_6s_linear_infinite_reverse]" />
              {/* Static Center Letter */}
              <span className="text-[#e2e8f0] font-mono font-bold text-xs transition-transform group-hover:scale-110">
                A
              </span>
            </div>

            <span className="font-mono text-sm font-medium text-[#e2e8f0]">
              arif<span className="text-[#7c6af7]">.dev</span>
            </span>
          </NavLink>
        </div>

        {/* Center: Pill-shaped navigation */}
        <div className="hidden md:flex flex-none items-center gap-1 bg-[#151521]/80 backdrop-blur-md border border-[rgba(30,30,46,0.8)] rounded-full p-1.5">
          {navLinks.map(({ to, label, isContact }) => {
            if (isContact) {
              const isContactActive = activeSection === 'contact';
              return (
                <button
                  key={to}
                  onClick={handleContactClick}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    isContactActive
                      ? 'bg-[#7c6af7]/15 text-[#7c6af7]'
                      : 'text-[#a0aec0] hover:text-[#e2e8f0] hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              );
            }
            return (
              <NavLink
                key={to}
                to={to}
                onClick={() => {
                  if (to === '/' && location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={({ isActive }) => {
                  let isCurrentlyActive = isActive;
                  if (to === '/' && activeSection === 'contact') isCurrentlyActive = false;
                  if (to === '/' && activeSection === 'home') isCurrentlyActive = true;
                  
                  return `text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    isCurrentlyActive
                      ? 'bg-[#7c6af7]/15 text-[#7c6af7]'
                      : 'text-[#a0aec0] hover:text-[#e2e8f0] hover:bg-white/5'
                  }`;
                }}
              >
                {label}
              </NavLink>
            );
          })}
        </div>

        {/* Right: Rotating Avatar & Mobile Toggle */}
        <div className="flex-1 flex items-center justify-end gap-4">
          
          {/* Desktop Rotating Avatar */}
          <div className="hidden md:flex relative items-center justify-center w-10 h-10 group cursor-pointer">
            {/* Outer spinning border */}
            <div className="absolute inset-0 rounded-full border-2 border-t-[#7c6af7] border-r-transparent border-b-[#7c6af7] border-l-transparent animate-[spin_4s_linear_infinite]" />
            {/* Inner dashed spinning border (rotating in reverse) */}
            <div className="absolute inset-1 rounded-full border border-dashed border-[#a0aec0]/40 animate-[spin_6s_linear_infinite_reverse]" />
            {/* Static Center Letter */}
            <span className="text-[#e2e8f0] font-mono font-bold text-sm transition-transform group-hover:scale-110">
              A
            </span>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-[#a0aec0]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-2 bg-[rgba(10,10,15,0.97)] border-b border-[#1e1e2e]">
          {navLinks.map(({ to, label, isContact }) => {
            if (isContact) {
              const isContactActive = activeSection === 'contact';
              return (
                <button
                  key={to}
                  onClick={handleContactClick}
                  className={`w-full text-left text-sm font-medium px-4 py-3 rounded-xl transition-all ${
                    isContactActive
                      ? 'bg-[#7c6af7]/10 text-[#7c6af7]'
                      : 'text-[#a0aec0] hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              );
            }
            return (
              <NavLink
                key={to}
                to={to}
                onClick={() => {
                  setOpen(false);
                  if (to === '/' && location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={({ isActive }) => {
                  let isCurrentlyActive = isActive;
                  if (to === '/' && activeSection === 'contact') isCurrentlyActive = false;
                  if (to === '/' && activeSection === 'home') isCurrentlyActive = true;
                  
                  return `text-sm font-medium px-4 py-3 rounded-xl transition-all ${
                    isCurrentlyActive
                      ? 'bg-[#7c6af7]/10 text-[#7c6af7]'
                      : 'text-[#a0aec0] hover:bg-white/5'
                  }`;
                }}
              >
                {label}
              </NavLink>
            );
          })}
          
          {/* Mobile Avatar replacing Hire Me */}
          <div className="mt-4 flex items-center justify-center pt-6 border-t border-[#1e1e2e]/50">
            <div className="relative flex items-center justify-center w-12 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-t-[#7c6af7] border-r-transparent border-b-[#7c6af7] border-l-transparent animate-[spin_4s_linear_infinite]" />
              <span className="text-[#e2e8f0] font-mono font-bold text-lg">A</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}