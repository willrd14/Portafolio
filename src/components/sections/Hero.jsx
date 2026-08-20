import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Typewriter from '../effects/Typewriter'
import ScrollReveal from '../effects/ScrollReveal'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-blob absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 dark:bg-dark-accent/10 blur-3xl" />
        <div className="hero-blob absolute -bottom-48 -left-48 w-[32rem] h-[32rem] rounded-full bg-accent/5 dark:bg-dark-accent/5 blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-lg md:text-xl text-text-secondary dark:text-dark-text-secondary mb-4 font-light tracking-wide">
            {t('hero.greeting')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary dark:text-dark-text-primary tracking-tight mb-4">
              {t('hero.name')}
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 dark:border-emerald-400/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 dark:bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                {t('hero.open_to_work')}
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-2xl md:text-3xl mb-8 h-10 flex items-center justify-center">
            <Typewriter words={t('hero.titles')} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-lg md:text-xl text-text-secondary dark:text-dark-text-secondary mb-12 font-light max-w-xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent dark:bg-dark-accent text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 dark:hover:shadow-dark-accent/25"
            >
              {t('hero.cta_primary')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 text-text-primary dark:text-dark-text-primary font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/5"
            >
              {t('hero.cta_secondary')}
            </a>
          </div>
        </ScrollReveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
