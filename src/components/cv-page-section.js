import * as React from 'react'
import { Link } from 'gatsby'

const ExperienceBlock = ({ items }) =>
  items.map(item => (
    <div key={`${item.company}-${item.role}`} className="experience-item">
      <div>
        <div className="exp-company">{item.company}</div>
        <div className="exp-role">{item.role}</div>
        <div className="exp-desc">{item.desc}</div>
      </div>
      <div className="exp-period">{item.period}</div>
    </div>
  ))

const CvPageSection = ({
  allTags,
  authorName,
  cvSections,
  educationItems,
  portfolioUrl,
  postsCount,
  publicationItems,
  researchItems,
  role,
  slugifyTag,
  social,
  workExperience,
}) => (
  <div className="page active">
    <section className="page-panel">
      <div className="cv-layout">
        <aside className="cv-sidebar">
          <div className="cv-avatar">YH</div>
          <div className="cv-name">{authorName}</div>
          <div className="cv-role">{role}</div>
          <div className="cv-contact">
            <a href="mailto:yhong.dev@gmail.com">yhong.dev@gmail.com</a>
            {social?.github && (
              <a
                href={`https://github.com/${social.github}`}
                rel="noreferrer"
                target="_blank"
              >
                github.com/{social.github}
              </a>
            )}
            {portfolioUrl && (
              <a href={portfolioUrl} rel="noreferrer" target="_blank">
                Portfolio (Notion)
              </a>
            )}
            <a
              href="https://www.linkedin.com/in/yerin-hong/"
              rel="noreferrer"
              target="_blank"
            >
              linkedin.com/in/yerin-hong
            </a>
          </div>

          {cvSections.map(section => (
            <div key={section.title} className="cv-skills-section">
              <div className="cv-section-title">{section.title}</div>
              <div className="skill-list">
                {section.items.map(item => (
                  <span key={item} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <main className="cv-main">
          <div className="cv-block">
            <div className="cv-block-title">Work Experience</div>
            <ExperienceBlock items={workExperience} />
          </div>

          <div className="cv-block">
            <div className="cv-block-title">Education</div>
            <ExperienceBlock items={educationItems} />
          </div>

          <div className="cv-block">
            <div className="cv-block-title">Research Experience</div>
            <ExperienceBlock items={researchItems} />
          </div>

          <div className="cv-block">
            <div className="cv-block-title">Publications & Patent</div>
            <ExperienceBlock items={publicationItems} />
          </div>

          <div className="cv-block">
            <div className="cv-block-title">Writing & Side Projects</div>
            <div className="experience-item">
              <div>
                <div className="exp-company">Personal Blog</div>
                <div className="exp-role">Technical Writing</div>
                <div className="exp-desc">
                  More than {postsCount} technical posts on deployment,
                  architecture, debugging, testing, release workflows, and
                  practical product engineering.
                </div>
              </div>
              <div className="exp-period">2018 –</div>
            </div>
          </div>

          <div className="cv-block">
            <div className="cv-block-title">Topic Areas</div>
            <div className="skill-list">
              {allTags.map(tag => (
                <Link
                  key={tag}
                  className="skill-item skill-item-link"
                  to={`/tags/${slugifyTag(tag)}/`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  </div>
)

export default CvPageSection
