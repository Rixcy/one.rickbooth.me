// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Job from "./job.js"

const Experience = () => (
  <StaticQuery
    query={graphql`
      query jobsQuery {
        allDataJson {
          edges {
            node {
              jobs {
                title
                company
                location
                role
                time_in_role
                skills
                picture
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
            {data.allDataJson.edges[0].node.jobs.map(( job, index ) => (
              <Job key={index} job={job}/>
            ))}
          </div>
        </section>
      </>
    )}
  />
)

export default Experience
