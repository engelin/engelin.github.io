import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const tagTones = {
  AWS: 'tag-amber',
  Architecture: 'tag-purple',
  Automation: 'tag-green',
  Backend: 'tag-green',
  CI: 'tag-cyan',
  'CI/CD': 'tag-cyan',
  Career: 'tag-gray',
  CSS: 'tag-purple',
  DDD: 'tag-purple',
  Design: 'tag-purple',
  Docker: 'tag-amber',
  Flutter: 'tag-cyan',
  Frontend: 'tag-cyan',
  'GitHub API': 'tag-green',
  'GitHub Actions': 'tag-green',
  GraphQL: 'tag-green',
  iOS: 'tag-purple',
  Jira: 'tag-green',
  Laravel: 'tag-amber',
  React: 'tag-cyan',
  Release: 'tag-amber',
  Testing: 'tag-purple',
  TypeScript: 'tag-cyan',
  Versioning: 'tag-gray',
  Vite: 'tag-cyan',
  Vitest: 'tag-purple',
}

const staticProjects = [
  {
    icon: '⬡',
    name: 'MathTutor Exam & Admin Platform',
    desc: 'Owned core delivery flows for an AI-enabled exam platform across admin and backend systems, covering question-bank operations, output generation, validation, and operational tooling for internal teams.',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'SQL', 'AWS'],
    company: 'HappyEduTech',
    period: '2025 – Present',
  },
  {
    icon: '◈',
    name: 'AI Question Processing Pipeline',
    desc: 'Refactored image, PDF, and grading workflows into maintainable AI services, improving how mathematical content is extracted, classified, generated, and quality-checked before reaching users.',
    stack: ['FastAPI', 'Python', 'MariaDB', 'Gemini', 'Docker'],
    company: 'HappyEduTech',
    period: '2025 – Present',
  },
  {
    icon: '▦',
    name: 'AI Tutor Mobile App',
    desc: 'Improved the student-facing Flutter app by addressing upload, media, and stability issues, supporting a smoother learning experience across content creation, playback, and tutoring flows.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Media', 'Mobile UX'],
    company: 'HappyEduTech',
    period: '2025',
  },
  {
    icon: '◉',
    name: 'Booking & Marketplace Frontend',
    desc: 'Contributed to a travel booking product by improving shared React modules, operator tooling, and marketplace UX, with a focus on maintainability, payments, and smoother feature delivery.',
    stack: ['React', 'Shared UI', 'Testing', 'Payments', 'System Design'],
    company: 'uTriper',
    period: '2024 – 2025',
  },
  {
    icon: '◆',
    name: 'ERP, Internal Tools & Mobile Delivery',
    desc: 'Delivered ERP features across Laravel and React, supported Flutter mobile releases, and improved deployment workflows, schema design, and internal product operations in a business-critical environment.',
    stack: ['Laravel', 'React', 'Flutter', 'CI/CD', 'SQL'],
    company: 'Arum 3D Solutions',
    period: '2022 – 2024',
  },
  {
    icon: '⬢',
    name: 'Android Platform Security',
    desc: 'Supported Samsung, LG, and tablet platform programmes by working on TEE, secure boot, RPMB, ARM Trusted Firmware, and Android build-system migration for platform consistency and issue resolution.',
    stack: ['C/C++', 'Python', 'Android', 'TEE', 'ARM TF'],
    company: 'MediaTek',
    period: '2018 – 2021',
  },
  {
    icon: '◌',
    name: 'macOS Security Product & Automation',
    desc: 'Built macOS security product features in Objective-C and C++, and developed internal automation tooling with Python, Flask, Redis, and Docker to support testing, signing, and release operations.',
    stack: ['Objective-C', 'C++', 'Python', 'Docker', 'macOS'],
    company: 'AhnLab',
    period: '2018 – 2020',
  },
  {
    icon: '△',
    name: 'Relative Positioning Research Prototype',
    desc: 'Built a relative positioning and tracking prototype using UWB hardware, MFC, and Kalman filtering to validate feasibility and improve localisation stability.',
    stack: ['C/C++', 'MFC', 'UWB', 'Kalman Filter'],
    company: 'Naver Labs',
    period: '2016',
  },
]

const cvSections = [
  {
    title: 'Core Languages',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'SQL',
      'C/C++',
      'Objective-C',
      'Dart',
      'Shell',
      'Rust',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Figma', 'Flutter', 'Storybook', 'MUI'],
  },
  {
    title: 'Backend',
    items: ['NestJS', 'FastAPI', 'Laravel', 'REST API', 'AWS', 'Terraform'],
  },
  {
    title: 'Systems',
    items: ['Linux Kernel', 'Android TEE', 'ARM TF', 'Docker', 'Git', 'SVN'],
  },
]

const workExperience = [
  {
    company: 'HappyEduTech · Remote',
    role: 'Senior Full-Stack & AI Engineer',
    desc: 'Own product-facing delivery across admin, backend, and AI services for an education platform. Built exam workflows, asynchronous AI generation features, operational tooling, and tutoring improvements spanning Next.js, NestJS, Python, FastAPI, and AWS.',
    period: 'Jul 2025 – Present',
  },
  {
    company: 'uTriper · Remote',
    role: 'Solution Architect & Frontend Engineer',
    desc: 'Supported a booking platform with frontend architecture and product design decisions, improving schema logic, React maintainability, and the speed at which new user-facing features could be delivered.',
    period: 'Jul 2024 – Jan 2025',
  },
  {
    company: 'Arum 3D Solutions LTD · UK',
    role: 'Software Engineer, IT & Development Team',
    desc: 'Delivered full-stack ERP features across Laravel and React, led parts of a Blade-to-React migration, supported a Laravel 7 to 10 upgrade, improved internal tooling, and shipped Flutter-based mobile workflows with CI/CD support.',
    period: 'Jun 2022 – Jun 2024',
  },
  {
    company: 'MediaTek · South Korea',
    role: 'System Software Engineer',
    desc: 'Worked on Android platform security across TEE, secure boot, RPMB, and ARM Trusted Firmware, while also supporting build-system migration and customer-facing issue resolution for major device programmes.',
    period: 'Mar 2020 – Sep 2021',
  },
  {
    company: 'AhnLab · South Korea',
    role: 'Software Engineer, V3 Team',
    desc: 'Built macOS security product features in C++ and Objective-C and developed internal automation services with Python, Flask, Redis, and Docker to support testing and release operations.',
    period: 'Jan 2018 – Mar 2020',
  },
  {
    company: 'Naver Labs · South Korea',
    role: 'Intern, Robotics Group',
    desc: 'Built a relative positioning system using UWB hardware, MFC, serial communication, and Kalman filtering to improve the accuracy and stability of localisation experiments.',
    period: 'Jul 2016 – Aug 2016',
  },
]

const educationItems = [
  {
    company: 'AIFFEL, MODULABS',
    role: 'AI Research Programme',
    desc: 'Completed advanced applied AI training covering deep learning fundamentals, paper implementation, and production-oriented experimentation, including NLP classification work on Korean-language data.',
    period: 'Dec 2024 – Jul 2025',
  },
  {
    company: 'Kwangwoon University',
    role: 'M.S., Electronics and Communications Engineering',
    desc: 'Digital Signal Processing Lab under Prof. Hyukjun Oh, with academic work spanning machine learning, image processing, surveillance systems, and biosignal processing.',
    period: 'Mar 2016 – Feb 2018',
  },
  {
    company: 'Kwangwoon University',
    role: 'B.S., Electronics and Communications Engineering',
    desc: 'Embedded Systems Lab under Prof. Hyunseok Lee, with coursework in embedded systems, operating systems, DSP, computer architecture, and wireless communication.',
    period: 'Mar 2012 – Feb 2016',
  },
]

const researchItems = [
  {
    company: 'AlphaChess · AIFFEL / MODULABS',
    role: 'Explainable LLM-based Chess Agent',
    desc: 'Researched how CoT-based SFT and GRPO could improve both reasoning quality and explainability in LLM-based chess agents, using prompt engineering, multi-agent prompting, and RAG.',
    period: 'Apr 2025 – Jun 2025',
  },
  {
    company: 'Independent Research',
    role: 'Interpretable Melanoma Diagnosis with Pseudo-Depth Estimation',
    desc: 'Explored Mamba2D-based pseudo-depth estimation to make melanoma prediction behaviour more interpretable through relative depth cues and visual explanation methods.',
    period: 'Jun 2025',
  },
]

const publicationItems = [
  {
    company: 'ICEIC 2018',
    role: 'Compare of channel coding for 5G system: LDPC and polar code',
    desc: 'Co-authored conference publication comparing LDPC and polar code approaches for 5G systems.',
    period: '2018',
  },
  {
    company: 'JKIICE',
    role: 'Improving the frequency domain resolution of wireless signal for observing the Doppler frequency',
    desc: 'Journal publication on improving frequency-domain resolution for observing Doppler frequency in wireless signals.',
    period: '2017',
  },
  {
    company: 'U.S. Patent 9,888,385',
    role: 'Method for subscriber authentication in cellular IoT device',
    desc: 'Granted patent related to subscriber authentication in cellular IoT devices.',
    period: '2018',
  },
]

const getTagClass = tag => tagTones[tag] || 'tag-gray'

const getPageFromHash = () => {
  if (typeof window === 'undefined') {
    return 'home'
  }

  const value = window.location.hash.replace('#', '')
  return value || 'home'
}

const slugifyTag = value =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const BlogIndex = ({ data, location }) => {
  const siteMetadata = data.site.siteMetadata
  const siteTitle = siteMetadata?.title || 'Title'
  const posts = data.allMarkdownRemark.nodes
  const authorName = siteMetadata?.author?.name || siteTitle
  const role = siteMetadata?.role
  const intro = siteMetadata?.intro
  const portfolioUrl = siteMetadata?.portfolioUrl
  const social = siteMetadata?.social
  const [activePage, setActivePage] = React.useState(getPageFromHash)
  const [activeTag, setActiveTag] = React.useState('all')

  React.useEffect(() => {
    const syncPage = () => {
      setActivePage(getPageFromHash())
    }

    syncPage()
    window.addEventListener('hashchange', syncPage)

    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  const allTags = React.useMemo(() => {
    const tagSet = new Set()
    posts.forEach(post => {
      post.frontmatter.tags?.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [posts])

  const filteredPosts = React.useMemo(() => {
    if (activeTag === 'all') {
      return posts
    }

    return posts.filter(post => post.frontmatter.tags?.includes(activeTag))
  }, [activeTag, posts])

  const homeRecentPosts = posts.slice(0, 4)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <div className={`page ${activePage === 'home' ? 'active' : ''}`}>
        <section className="hero">
          <div className="hero-tag">{role}</div>
          <h1>
            {authorName.split(' ')[0]}
            <br />
            <span className="name-accent">
              {authorName.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="hero-desc">{intro}</p>
          <div className="hero-links">
            <a className="btn-primary" href="#blog">
              Read the Blog
            </a>
            <a className="btn-ghost" href="#portfolio">
              View Projects
            </a>
          </div>
        </section>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">{posts.length}+</span>
            <span className="stat-label">Posts written</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">8yr</span>
            <span className="stat-label">Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">{staticProjects.length}+</span>
            <span className="stat-label">Projects shaped</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>

        <section>
          <div className="section-header">
            <span className="section-label">Tech Stack</span>
            <div className="section-line" />
          </div>
          <div className="stack-row">
            {[
              'TypeScript',
              'React',
              'Flutter',
              'Node.js',
              'PostgreSQL',
              'Figma',
              'Python',
              'AWS',
              'Docker',
              'GraphQL',
              'Laravel',
              'Rust',
            ].map(item => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className="section-header">
            <span className="section-label">Recent Posts</span>
            <div className="section-line" />
            <a className="section-count" href="#blog">
              All posts →
            </a>
          </div>
          <div className="blog-grid">
            {homeRecentPosts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <Link
                  key={post.fields.slug}
                  className="post-card"
                  itemProp="url"
                  to={post.fields.slug}
                >
                  <article itemScope itemType="http://schema.org/Article">
                    <div className="post-meta">
                      <span className="post-date">{post.frontmatter.date}</span>
                      <div className="post-tags">
                        {post.frontmatter.tags?.slice(0, 2).map(tag => (
                          <span key={tag} className={`tag ${getTagClass(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="post-title">
                      <span itemProp="headline">{title}</span>
                    </h3>
                    <p
                      className="post-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <div className="post-footer">
                      <span className="read-time">
                        {post.timeToRead} min read
                      </span>
                      <span className="arrow-link">Read →</span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </section>
      </div>

      <div className={`page ${activePage === 'blog' ? 'active' : ''}`}>
        <section className="page-panel">
          <div className="section-header section-header-top">
            <span className="section-label">Writing</span>
            <div className="section-line" />
            <span className="section-count">{filteredPosts.length} posts</span>
          </div>

          <div className="blog-filters">
            <button
              className={`filter-btn ${activeTag === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTag('all')}
              type="button"
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
                type="button"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <Link
                  key={post.fields.slug}
                  className="post-card"
                  itemProp="url"
                  to={post.fields.slug}
                >
                  <article itemScope itemType="http://schema.org/Article">
                    <div className="post-meta">
                      <span className="post-date">{post.frontmatter.date}</span>
                      <div className="post-tags">
                        {post.frontmatter.tags?.map(tag => (
                          <span key={tag} className={`tag ${getTagClass(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="post-title">
                      <span itemProp="headline">{title}</span>
                    </h3>
                    <p
                      className="post-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <div className="post-footer">
                      <span className="read-time">
                        {post.timeToRead} min read
                      </span>
                      <span className="arrow-link">Read →</span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </section>
      </div>

      <div className={`page ${activePage === 'portfolio' ? 'active' : ''}`}>
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
            {staticProjects.map(project => (
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

      <div className={`page ${activePage === 'cv' ? 'active' : ''}`}>
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
                {workExperience.map(item => (
                  <div key={item.role} className="experience-item">
                    <div>
                      <div className="exp-company">{item.company}</div>
                      <div className="exp-role">{item.role}</div>
                      <div className="exp-desc">{item.desc}</div>
                    </div>
                    <div className="exp-period">{item.period}</div>
                  </div>
                ))}
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Education</div>
                {educationItems.map(item => (
                  <div key={item.role} className="experience-item">
                    <div>
                      <div className="exp-company">{item.company}</div>
                      <div className="exp-role">{item.role}</div>
                      <div className="exp-desc">{item.desc}</div>
                    </div>
                    <div className="exp-period">{item.period}</div>
                  </div>
                ))}
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Research Experience</div>
                {researchItems.map(item => (
                  <div key={item.role} className="experience-item">
                    <div>
                      <div className="exp-company">{item.company}</div>
                      <div className="exp-role">{item.role}</div>
                      <div className="exp-desc">{item.desc}</div>
                    </div>
                    <div className="exp-period">{item.period}</div>
                  </div>
                ))}
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Publications & Patent</div>
                {publicationItems.map(item => (
                  <div key={item.role} className="experience-item">
                    <div>
                      <div className="exp-company">{item.company}</div>
                      <div className="exp-role">{item.role}</div>
                      <div className="exp-desc">{item.desc}</div>
                    </div>
                    <div className="exp-period">{item.period}</div>
                  </div>
                ))}
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Writing & Side Projects</div>
                <div className="experience-item">
                  <div>
                    <div className="exp-company">Personal Blog</div>
                    <div className="exp-role">Technical Writing</div>
                    <div className="exp-desc">
                      More than {posts.length} technical posts on deployment,
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
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
        intro
        portfolioUrl
        role
        social {
          github
        }
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          description
          tags
          title
        }
      }
    }
  }
`
