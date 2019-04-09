import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import { StaticQuery } from "gatsby";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer className="text-center">
            <p className="mb-4">
              You can follow me on
              <a
                href={data.allDataJson.edges[0].node.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-grey-darkest
                  no-underline
                  hover:text-grey-dark
                "> GitHub</a>,
              <a
                href={data.allDataJson.edges[0].node.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-grey-darkest
                  no-underline
                  hover:text-grey-dark
                "> Linkedin</a> or
              <a
                href={`mailto:${data.allDataJson.edges[0].node.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-grey-darkest
                  no-underline
                  hover:text-grey-dark
                "> email </a>
              me.
            </p>
            © {new Date().getFullYear()} Rick Booth, Built with
            {` `}
            <a
              className="
                text-brand-1
                no-underline
                hover:underline
              "
              href="https://www.gatsbyjs.org">
              Gatsby
            </a>
          </footer>
        </div>
      </>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
