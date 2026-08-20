import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import Container from '../layout/Container'
import ScrollReveal from '../effects/ScrollReveal'
import { useLanguage } from '../../context/LanguageContext'
import projectsData from '../../data/projects.json'

const categories = ['all', 'frontend', 'backend', 'fullstack']

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface dark:bg-dark-surface">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('projects.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-accent dark:bg-dark-accent text-white'
                    : 'bg-bg dark:bg-dark-bg text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary'
                }`}
              >
                {t(`projects.${cat}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div className="group bg-bg dark:bg-dark-bg rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-video bg-border/20 dark:bg-dark-border/20 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-text-secondary dark:text-dark-text-secondary">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-sm font-medium text-accent dark:text-dark-accent hover:underline"
                    >
                      {t('projects.view_project')}
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent"
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
