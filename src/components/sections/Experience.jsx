import { Briefcase, Calendar } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../effects/ScrollReveal'
import Container from '../layout/Container'
import experienceData from '../../data/experience.json'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-24 md:py-32 bg-surface dark:bg-dark-surface">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-16 tracking-tight text-center">
            {t('experience.title')}
          </h2>
        </ScrollReveal>

        {experienceData.length === 0 ? (
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 dark:bg-dark-accent/10 flex items-center justify-center mb-6">
                <Briefcase size={28} className="text-accent dark:text-dark-accent" />
              </div>
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary font-light">
                {t('experience.title') === 'Experiencia Laboral'
                  ? 'Próximamente'
                  : 'Coming soon'}
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border dark:bg-dark-border" />

            <div className="space-y-12">
              {experienceData.map((entry, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-6 md:gap-12`}>
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent dark:bg-dark-accent ring-4 ring-surface dark:ring-dark-surface z-10" />
                    <div className="md:hidden absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-accent dark:bg-dark-accent ring-4 ring-surface dark:ring-dark-surface z-10" />

                    <div className="flex-1 md:w-1/2 pl-10 md:pl-0">
                      <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary mb-2">
                        <Calendar size={14} />
                        <span>
                          {entry.periods
                            ? entry.periods.map((p, idx) => (
                                <span key={idx}>
                                  {idx > 0 && ' / '}
                                  {p.start} — {p.end || t('experience.present')}
                                </span>
                              ))
                            : `${entry.startDate} — ${entry.endDate || t('experience.present')}`
                          }
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                        {entry.title}
                      </h3>

                      <p className="text-accent dark:text-dark-accent font-medium mb-3">
                        {entry.company}
                      </p>

                      {entry.description && (
                        <ul className="space-y-2 mb-4">
                          {entry.description.map((item, j) => (
                            <li
                              key={j}
                              className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-border dark:before:bg-dark-border"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {entry.tech && (
                        <div className="flex flex-wrap gap-2">
                          {entry.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block flex-1 md:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
