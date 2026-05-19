import * as React from 'react'

const PortfolioPageSection = ({ portfolioUrl, projects }) => (
  <div className="page active">
    <section className="page-panel">
      <div className="section-header section-header-top">
        <span className="section-label">Projects</span>
        <div className="section-line" />
        {portfolioUrl && (
          <a
            className="section-count"
            href={portfolioUrl}
            rel="noreferrer"
            target="_blank"
          >
            View on Notion ↗
          </a>
        )}
      </div>

      <div className="portfolio-grid">
        {projects.map(project => (
          <article key={project.name} className="project-card">
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
            </div>
            <div className="exp-company portfolio-company">
              {project.company}
              {project.period ? ` · ${project.period}` : ''}
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-stack">
              {project.stack.map(stack => (
                <span key={stack} className="chip chip-small">
                  {stack}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                className="project-link"
                href={project.link}
                rel="noreferrer"
                target="_blank"
              >
                Open reference ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  </div>
)

export default PortfolioPageSection
