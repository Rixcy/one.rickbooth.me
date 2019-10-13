import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import styled from "styled-components"
import useDarkMode from '../hooks/useDarkMode'
import Toggle from './Toggle'

const Text = styled.p`
  text-align: center;
  font-size: 24px;
`

const IntroText = styled.span`
  font-weight: bold;
  .dark-mode & {
    color: #bb1542;
  }
`

export default () => {
  const [darkMode, setDarkMode] = useDarkMode()
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
    <section className="pt-24">
      <div>
        <Text>
          <IntroText>Hi, I'm Rick Booth.</IntroText> I'm an ambitious and personable individual with experience in both web development and full stack software development. As a self-driven, forward-thinking individual, I constantly strive to embrace new techniques and technologies, understanding their impact and weaving them into new and existing projects alike.
        </Text>
        <div className="flex mt-6">
          <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex ml-auto">
            <div className="p-4">
              <a
                href={data.allDataJson.edges[0].node.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-grey-darkest
                  no-underline
                  hover:text-grey-dark
                "><FaLinkedinIn size="1.5em"/></a>
            </div>

            <div className="p-4">
              <a
                href={data.allDataJson.edges[0].node.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-grey-darkest
                  no-underline
                  hover:text-grey-dark
                "><FaGithub size="1.5em"/></a>
            </div>

            <div className="p-4">
              <a
                href={`mailto:${data.allDataJson.edges[0].node.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-grey-darkest
                  no-underline
                  hover:text-grey-dark
                "><FaEnvelope size="1.5em"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
