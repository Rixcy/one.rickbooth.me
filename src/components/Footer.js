import React from 'react'
import StyledLink, { StyledLinkButton } from './StyledLink'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = ({ setModalOpen }) => {
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
        <StyledLink href={data.allDataJson.edges[0].node.contact.github}>&nbsp;GitHub</StyledLink>,
        <StyledLink href={data.allDataJson.edges[0].node.contact.linkedin}>&nbsp;LinkedIn</StyledLink>&nbsp;or
        <StyledLinkButton onClick={() => setModalOpen(true)}>&nbsp;send me an email</StyledLinkButton>.
      </p>
      © {new Date().getFullYear()} Rick Booth, Built with
      <StyledLink href="https://www.gatsbyjs.org"> Gatsby</StyledLink>
    </footer>
  )
}

export default Footer
