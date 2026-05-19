/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          intro
          portfolioUrl
          resumeUrl
          role
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const intro = data.site.siteMetadata?.intro
  const portfolioUrl = data.site.siteMetadata?.portfolioUrl
  const resumeUrl = data.site.siteMetadata?.resumeUrl
  const role = data.site.siteMetadata?.role
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={80}
        height={80}
        quality={95}
        alt="Profile picture"
      />
      <div className="bio-copy">
        {role && <p className="bio-eyebrow">{role}</p>}
        {author?.name && <h2 className="bio-name">{author.name}</h2>}
        <p>{author?.summary || null}</p>
        {intro && <p>{intro}</p>}
        <div className="bio-links">
          <GatsbyLink to="/">All posts</GatsbyLink>
          {portfolioUrl && (
            <a href={portfolioUrl} target="_blank" rel="noreferrer">
              Portfolio
            </a>
          )}
          {resumeUrl && (
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              CV
            </a>
          )}
          {social?.github && (
            <a href={`https://github.com/${social.github}`}>GitHub</a>
          )}
          {social?.linkedin && (
            <a href={`https://www.linkedin.com/in/${social.linkedin}/`}>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bio
