import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/ui/BrandIcons'
import Container from '../components/layout/Container'
import ScrollReveal from '../components/effects/ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import projectsData from '../data/projects.json'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useLanguage()

  const project = projectsData.find(p => p.slug === slug)

  if (!project) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-text-secondary dark:text-dark-text-secondary mb-8">
            Proyecto no encontrado
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent dark:text-dark-accent hover:underline"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-24 md:py-32">
      <ScrollReveal>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          {t('nav.home')}
        </Link>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
            {project.description}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="aspect-video bg-surface dark:bg-dark-surface rounded-xl mb-8 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent dark:bg-dark-accent text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={16} />
              {t('projects.view_project')}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border dark:border-dark-border rounded-lg hover:bg-surface dark:hover:bg-dark-surface transition-colors"
            >
              <GithubIcon size={16} />
              {t('projects.view_code')}
            </a>
          )}
        </div>
      </ScrollReveal>
    </Container>
  )
}
