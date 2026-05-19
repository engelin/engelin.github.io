import * as React from 'react'

import PostCard from './post-card'

const BlogPageSection = ({
  activeTag,
  allTags,
  filteredPosts,
  getTagClass,
  setActiveTag,
}) => (
  <div className="page active">
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
        {filteredPosts.map(post => (
          <PostCard
            key={post.fields.slug}
            getTagClass={getTagClass}
            post={post}
          />
        ))}
      </div>
    </section>
  </div>
)

export default BlogPageSection
