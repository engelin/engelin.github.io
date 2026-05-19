import * as React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ post, getTagClass, maxTags }) => {
  const title = post.frontmatter.title || post.fields.slug
  const tags = maxTags
    ? post.frontmatter.tags?.slice(0, maxTags)
    : post.frontmatter.tags

  return (
    <Link className="post-card" itemProp="url" to={post.fields.slug}>
      <article itemScope itemType="http://schema.org/Article">
        <div className="post-meta">
          <span className="post-date">{post.frontmatter.date}</span>
          <div className="post-tags">
            {tags?.map(tag => (
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
          <span className="read-time">{post.timeToRead} min read</span>
          <span className="arrow-link">Read →</span>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
