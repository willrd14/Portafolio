import { MapPin, Download } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../effects/ScrollReveal'
import Container from '../layout/Container'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 md:py-32 bg-surface dark:bg-dark-surface">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 dark:from-dark-accent/30 dark:to-dark-accent/10 blur-sm" />
                <div className="relative w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <img
                    src="/images/avatar.jpg"
                    alt="Williams R. Villavizar Hdez"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-6 tracking-tight">
                {t('about.title')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary dark:text-dark-text-secondary text-lg leading-relaxed mb-8">
                {t('about.bio')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-2 text-text-secondary dark:text-dark-text-secondary mb-8">
                <MapPin size={18} className="text-accent dark:text-dark-accent" />
                <span>{t('about.location')}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent dark:bg-dark-accent text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 dark:hover:shadow-dark-accent/25"
              >
                <Download size={18} />
                {t('about.download_cv')}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
