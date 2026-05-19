import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const slugifyTag = value =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const TagPageTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { tag } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`#${tag}`} description={`Posts tagged with ${tag}`} />
      <Link className="back-link" to="/">
        ← Back to all posts
      </Link>
      <section className="tag-page-header">
        <p className="section-kicker">Tag archive</p>
        <h2>#{tag}</h2>
        <p>{posts.length} posts in this topic.</p>
      </section>
      <ol className="post-grid">
        {posts.map(post => (
          <li key={post.fields.slug} className="post-grid-item">
            <article className="post-list-item">
              <header>
                <div className="post-meta-row">
                  <small>{post.frontmatter.date}</small>
                  <small>{post.timeToRead} min read</small>
                </div>
                <h3>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h3>
              </header>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              />
              {post.frontmatter.tags?.length > 0 && (
                <div className="post-tag-row">
                  {post.frontmatter.tags.map(item => (
                    <Link
                      key={item}
                      className="tag-chip"
                      to={`/tags/${slugifyTag(item)}/`}
                    >
                      #{item}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          tags
          title
        }
      }
    }
  }
`
