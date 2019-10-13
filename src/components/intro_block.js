import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import styled from "styled-components"

const Intro = () => (
  <StaticQuery
    query={graphql`
      query introBlockQuery {
        allDataJson {
          edges {
            node {
              intro {
                intro_text
              }
              contact {
                linkedin
                github
                email
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <section
          style={{
            margin: `100px 0 50px 0`
          }}
        >
          <div>
            <h2
              className="text-center font-normal"
              style={{ margin: 0 }}
              dangerouslySetInnerHTML={{
                __html: data.allDataJson.edges[0].node.intro.intro_text
              }}
            />
            <div className="flex" style={{ marginTop: `50px` }}>
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
        </section>
      </>
    )}
  />
)

export default Intro
