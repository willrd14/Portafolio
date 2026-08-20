import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../effects/ScrollReveal'
import Container from '../layout/Container'
import skillsData from '../../data/skills.json'

const iconMap = {
  react: '/images/icons/tech/react.svg',
  vite: '/images/icons/tech/vite.svg',
  tailwind: '/images/icons/tech/tailwind.svg',
  javascript: '/images/icons/tech/javascript.svg',
  html: '/images/icons/tech/html.svg',
  css: '/images/icons/tech/css.svg',
  nodejs: '/images/icons/tech/nodejs.svg',
  express: '/images/icons/tech/express.svg',
  supabase: '/images/icons/tech/supabase.svg',
  git: '/images/icons/tech/git.svg',
  docker: '/images/icons/tech/docker.svg',
  cloudflare: '/images/icons/tech/cloudflare.svg',
  figma: '/images/icons/tech/figma.svg',
  design: '/images/icons/tech/design.svg',
  responsive: '/images/icons/tech/responsive.svg',
}

const categoryColors = {
  frontend: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800/30' },
  backend: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-800/30' },
  tools: { bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-800/30' },
  design: { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800/30' },
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface dark:bg-dark-surface">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-16 tracking-tight text-center">
            {t('skills.title')}
          </h2>
        </ScrollReveal>

        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills], catIdx) => (
            <ScrollReveal key={category} delay={catIdx * 0.1}>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-6">
                {t(`skills.categories.${category}`)}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill) => {
                  const color = categoryColors[category] || categoryColors.frontend
                  const iconSrc = iconMap[skill.icon]
                  return (
                    <div
                      key={skill.name}
                      className={`group flex items-center gap-3 p-4 rounded-2xl bg-bg dark:bg-dark-bg border ${color.border} transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--shadow-md)] cursor-default`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${color.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                        {iconSrc ? (
                          <img src={iconSrc} alt={skill.name} className="w-6 h-6 object-contain brightness-0 dark:brightness-0 dark:invert" />
                        ) : (
                          <span className="text-lg font-bold text-text-secondary dark:text-dark-text-secondary">
                            {skill.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-text-primary dark:text-dark-text-primary truncate">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
