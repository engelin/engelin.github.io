import * as React from 'react'
import { graphql } from 'gatsby'

import BlogPageSection from '../components/blog-page-section'
import CvPageSection from '../components/cv-page-section'
import HomePageSection from '../components/home-page-section'
import Layout from '../components/layout'
import PortfolioPageSection from '../components/portfolio-page-section'
import Seo from '../components/seo'
import {
  cvSections,
  educationItems,
  publicationItems,
  researchItems,
  workExperience,
} from '../data/cv'
import { staticProjects } from '../data/portfolio'
import {
  getPageFromHash,
  getTagClass,
  homeTechStack,
  slugifyTag,
} from '../utils/site-content'

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

  const pageSections = {
    home: (
      <HomePageSection
        authorName={authorName}
        getTagClass={getTagClass}
        homeTechStack={homeTechStack}
        intro={intro}
        posts={posts}
        projectsCount={staticProjects.length}
        role={role}
      />
    ),
    blog: (
      <BlogPageSection
        activeTag={activeTag}
        allTags={allTags}
        filteredPosts={filteredPosts}
        getTagClass={getTagClass}
        setActiveTag={setActiveTag}
      />
    ),
    portfolio: (
      <PortfolioPageSection
        portfolioUrl={portfolioUrl}
        projects={staticProjects}
      />
    ),
    cv: (
      <CvPageSection
        allTags={allTags}
        authorName={authorName}
        cvSections={cvSections}
        educationItems={educationItems}
        portfolioUrl={portfolioUrl}
        postsCount={posts.length}
        publicationItems={publicationItems}
        researchItems={researchItems}
        role={role}
        slugifyTag={slugifyTag}
        social={social}
        workExperience={workExperience}
      />
    ),
  }

  return (
    <Layout activeSection={activePage} location={location} title={siteTitle}>
      <Seo title="All posts" />
      {pageSections[activePage] || pageSections.home}
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
