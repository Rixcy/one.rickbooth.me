import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import StyledLink, { StyledLinkButton } from './StyledLink'

const SocialIcons = ({ setModalOpen }) => {
  const data = useStaticQuery(graphql`
    query introBlockQuery {
      allDataJson {
        edges {
          node {
            contact {
              linkedin
              github
            }
          }
        }
      }
    }
  `)
  return (
    <div id="socialIcons" className="flex ml-auto">
      <StyledLink href={data.allDataJson.edges[0].node.contact.linkedin} className="p-4">
        <FaLinkedinIn size="1.5em"/>
      </StyledLink>

      <StyledLink href={data.allDataJson.edges[0].node.contact.github} className="p-4">
        <FaGithub size="1.5em"/>
      </StyledLink>

      <StyledLinkButton className="p-4" onClick={setModalOpen}>
        <FaEnvelope size="1.5em"/>
      </StyledLinkButton>
    </div>
  )
}

export default SocialIcons
