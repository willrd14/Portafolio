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
          <h1 className="text-4xl mb-4">404<span className="cursor" aria-hidden="true" /></h1>
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
    <Container className="pt-28 pb-24 md:pb-32">
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
                className="chip chip-accent font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">
            {project.title}<span className="cursor" aria-hidden="true" />
          </h1>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
            {project.description}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="card aspect-video mb-8 overflow-hidden">
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
              className="btn btn-primary"
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
              className="btn btn-secondary"
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
