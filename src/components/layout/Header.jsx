import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, Globe } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { cn } from '../../utils/cn'

const navLinks = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.about', href: '#about' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.experience', href: '#experience' },
  { label: 'nav.services', href: '#services' },
  { label: 'nav.contact', href: '#contact' },
]

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-[var(--shadow-sm)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-lg font-semibold text-text-primary dark:text-dark-text-primary tracking-tight"
          >
            Williams R. Villavizar
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                  'text-text-secondary dark:text-dark-text-secondary',
                  'hover:text-text-primary dark:hover:text-dark-text-primary',
                  'hover:bg-black/5 dark:hover:bg-white/10'
                )}
              >
                {t(label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              className={cn(
                'p-2 rounded-lg transition-colors duration-200',
                'text-text-secondary dark:text-dark-text-secondary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'hover:bg-black/5 dark:hover:bg-white/10'
              )}
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="sr-only">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-lg transition-colors duration-200',
                'text-text-secondary dark:text-dark-text-secondary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'hover:bg-black/5 dark:hover:bg-white/10'
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors duration-200',
                'text-text-secondary dark:text-dark-text-secondary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'hover:bg-black/5 dark:hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-16 bottom-0 transition-all duration-300',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={cn(
            'relative bg-white/95 dark:bg-black/95 backdrop-blur-xl',
            'border-b border-border dark:border-dark-border',
            'px-4 py-4 space-y-1',
            'transition-transform duration-300 ease-out',
            mobileOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={cn(
                'block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                'text-text-secondary dark:text-dark-text-secondary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'hover:bg-black/5 dark:hover:bg-white/10'
              )}
            >
              {t(label)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
