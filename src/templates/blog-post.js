import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Comments from "../components/comments"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Link className="back-link" to="/">
        ← Back to all posts
      </Link>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="blog-post-header">
          <p className="section-kicker">Article</p>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <div className="post-meta-row">
            <p>{post.frontmatter.date}</p>
            <p>{post.timeToRead} min read</p>
          </div>
          {post.frontmatter.tags?.length > 0 && (
            <div className="post-tag-row">
              {post.frontmatter.tags.map(tag => (
                <Link
                  key={tag}
                  className="tag-chip"
                  to={`/tags/${tag
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")}/`}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </header>
        <section
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <Comments/>
        <footer className="blog-post-footer">
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul>
          <li>
            {previous && (
              <Link className="post-nav-card" to={previous.fields.slug} rel="prev">
                <span>Previous</span>
                <strong>← {previous.frontmatter.title}</strong>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link className="post-nav-card" to={next.fields.slug} rel="next">
                <span>Next</span>
                <strong>{next.frontmatter.title} →</strong>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
