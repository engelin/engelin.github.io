import * as React from 'react'

import PostCard from './post-card'

const HomePageSection = ({
  authorName,
  intro,
  role,
  posts,
  projectsCount,
  homeTechStack,
  getTagClass,
}) => {
  const [firstName, ...restName] = authorName.split(' ')
  const lastName = restName.join(' ')

  return (
    <div className="page active">
      <section className="hero">
        <div className="hero-tag">{role}</div>
        <h1>
          {firstName}
          <br />
          <span className="name-accent">{lastName}</span>
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
          <span className="stat-num">{projectsCount}+</span>
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
          {homeTechStack.map(item => (
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
          {posts.slice(0, 4).map(post => (
            <PostCard
              key={post.fields.slug}
              getTagClass={getTagClass}
              maxTags={2}
              post={post}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePageSection
