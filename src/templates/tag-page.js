import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostCard from '../components/post-card'
import Seo from '../components/seo'
import { getTagClass } from '../utils/site-content'

const TagPageTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { tag } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`#${tag}`} description={`Posts tagged with ${tag}`} />
      <Link className="back-link" to="/#blog">
        ← Back to blog
      </Link>
      <section className="tag-page-header">
        <p className="section-kicker">Tag archive</p>
        <h2>#{tag}</h2>
        <p>{posts.length} posts in this topic.</p>
      </section>
      <div className="blog-grid">
        {posts.map(post => (
          <PostCard
            key={post.fields.slug}
            getTagClass={getTagClass}
            post={post}
          />
        ))}
      </div>
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
