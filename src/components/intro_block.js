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

export default Intro