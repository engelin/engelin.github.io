import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ activeSection = 'home', location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          description
          portfolioUrl
          title
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const portfolioUrl = data.site.siteMetadata?.portfolioUrl
  const siteDescription = data.site.siteMetadata?.description

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="topbar">
          <a className="nav-logo" href="/">
            yerin.dev<span>/</span>
          </a>
          <nav className="nav-links" aria-label="Main">
            {isRootPath ? (
              <>
                <a
                  className={activeSection === 'blog' ? 'active' : undefined}
                  href="#blog"
                >
                  Blog
                </a>
                <a
                  className={
                    activeSection === 'portfolio' ? 'active' : undefined
                  }
                  href="#portfolio"
                >
                  Portfolio
                </a>
                <a
                  className={activeSection === 'cv' ? 'active' : undefined}
                  href="#cv"
                >
                  CV
                </a>
              </>
            ) : (
              <>
                <a href="/#blog">Blog</a>
                {portfolioUrl && <a href="/#portfolio">Portfolio</a>}
                <a href="/#cv">CV</a>
              </>
            )}
          </nav>
        </div>
        {!isRootPath && (
          <div className="site-header-row">
            <Link className="header-link-home" to="/">
              {title}
            </Link>
            <p className="site-description site-description-compact">
              {siteDescription}
            </p>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="global-footer">
        <p>© {new Date().getFullYear()} Yerin Hong</p>
        <p>
          Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
