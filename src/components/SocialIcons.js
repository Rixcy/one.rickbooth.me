import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import StyledLink from './StyledLink'

const SocialIcons = () => {
  const data = useStaticQuery(graphql`
    query introBlockQuery {
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
    <div id="socialIcons" className="flex ml-auto">
      <StyledLink href={data.allDataJson.edges[0].node.contact.linkedin} className="p-4">
        <FaLinkedinIn size="1.5em"/>
      </StyledLink>

      <StyledLink href={data.allDataJson.edges[0].node.contact.github} className="p-4">
        <FaGithub size="1.5em"/>
      </StyledLink>

      <StyledLink href={`mailto:${data.allDataJson.edges[0].node.contact.email}`} className="p-4">
        <FaEnvelope size="1.5em"/>
      </StyledLink>
    </div>
  )
}

export default SocialIcons
