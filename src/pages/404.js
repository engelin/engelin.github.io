import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <section className="tag-page-header">
        <p className="section-kicker">404</p>
        <h2>Page not found</h2>
        <p>The page you tried to open does not exist or has moved.</p>
      </section>
      <div className="hero-links">
        <a className="btn-primary" href="/">
          Go Home
        </a>
        <a className="btn-ghost" href="/#blog">
          Browse Posts
        </a>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
