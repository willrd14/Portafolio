import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { useLanguage } from '../../context/LanguageContext'
import { cn } from '../../utils/cn'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/willrd14',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/williams-rafael/',
    icon: LinkedinIcon,
  },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className={cn(
        'border-t border-border dark:border-dark-border',
        'bg-surface dark:bg-dark-surface'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              &copy; {new Date().getFullYear()} Williams R. Villavizar.
            </p>
            <p className="text-xs text-text-secondary/60 dark:text-dark-text-secondary/60 mt-1">
              {t('footer.builtWith') || 'Built with React + Tailwind CSS'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-lg transition-colors duration-200',
                  'text-text-secondary dark:text-dark-text-secondary',
                  'hover:text-text-primary dark:hover:text-dark-text-primary',
                  'hover:bg-black/5 dark:hover:bg-white/10'
                )}
                aria-label={name}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
