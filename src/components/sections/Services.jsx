import { Code, Palette, Smartphone } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../effects/ScrollReveal'
import Container from '../layout/Container'

const icons = [Code, Palette, Smartphone]

export default function Services() {
  const { t } = useLanguage()
  const services = t('services.items')

  return (
    <section id="services" className="py-24 md:py-32 bg-surface dark:bg-dark-surface">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-16 tracking-tight text-center">
            {t('services.title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(services) && services.map((service, index) => {
            const Icon = icons[index]
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group p-8 rounded-xl bg-bg dark:bg-dark-bg border border-border dark:border-dark-border transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:scale-[1.02]">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 dark:bg-dark-accent/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} className="text-accent dark:text-dark-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
