// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
              jobs {
                title
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
            margin: `100px 0`
          }}
        >
          <div className="container">
            <h2 className="text-center" style={{ margin: 0 }}>
              {data.allDataJson.edges[0].node.intro.intro_text}
            </h2>
          </div>
        </section>
      </>
    )}
  />
)

Intro.propTypes = {
  introText: PropTypes.string,
}

Intro.defaultProps = {
  introText: ``,
}

export default Intro
