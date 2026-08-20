import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../effects/ScrollReveal'
import Container from '../layout/Container'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'williamsvillavizar204@gmail.com', href: 'mailto:williamsvillavizar204@gmail.com' },
  { icon: MapPin, label: 'Ubicación', valueKey: 'about.location', href: null },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/willrd14', href: 'https://github.com/willrd14' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/williams-rafael', href: 'https://www.linkedin.com/in/williams-rafael/' },
]

export default function Contact() {
  const { t } = useLanguage()

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await fetch('https://portfolio-contact.williamsvillavizar204.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg dark:bg-dark-bg">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-16 tracking-tight text-center">
            {t('contact.title')}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {contactLinks.map(({ icon: Icon, label, value, valueKey, href }) => {
                const displayValue = valueKey ? t(valueKey) : value
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 dark:bg-dark-accent/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} className="text-accent dark:text-dark-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-1">{label}</p>
                      <p className="text-text-primary dark:text-dark-text-primary font-medium">{displayValue}</p>
                    </div>
                  </div>
                )

                return href ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block transition-opacity hover:opacity-80">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder-text-secondary/50 dark:placeholder-dark-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 dark:focus:ring-dark-accent/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder-text-secondary/50 dark:placeholder-dark-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 dark:focus:ring-dark-accent/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">
                  {t('contact.subject')}
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 dark:focus:ring-dark-accent/50 transition-all"
                >
                  <option value="" disabled>{t('contact.subject')}</option>
                  <option value="employment">{t('contact.subjects.employment')}</option>
                  <option value="freelance">{t('contact.subjects.freelance')}</option>
                  <option value="collaboration">{t('contact.subjects.collaboration')}</option>
                  <option value="other">{t('contact.subjects.other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder-text-secondary/50 dark:placeholder-dark-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 dark:focus:ring-dark-accent/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent dark:bg-dark-accent text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 dark:hover:shadow-dark-accent/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {status === 'loading' ? '...' : t('contact.send')}
              </button>

              {status === 'success' && (
                <p className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {t('contact.success')}
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-medium text-red-600 dark:text-red-400">
                  {t('contact.error')}
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
