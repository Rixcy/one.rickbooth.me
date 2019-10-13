import React from 'react'
import StyledLink from './StyledLink'
import { useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query contactQuery {
      allDataJson {
        edges {
          node {
            contact {
              linkedin
              github
              email
            }
          }
        }
      }
    }
  `)
  return (
    <footer className="text-center pb-12">
      <p className="mb-4">
        You can follow me on
        <StyledLink href={data.allDataJson.edges[0].node.contact.github}> GitHub</StyledLink>,
        <StyledLink href={data.allDataJson.edges[0].node.contact.linkedin}> LinkedIn</StyledLink> or
        <StyledLink href={`mailto:${data.allDataJson.edges[0].node.contact.email}`}> email</StyledLink> me.
      </p>
      © {new Date().getFullYear()} Rick Booth, Built with
      <StyledLink href="https://www.gatsbyjs.org"> Gatsby</StyledLink>
    </footer>
  )
}

export default Footer
