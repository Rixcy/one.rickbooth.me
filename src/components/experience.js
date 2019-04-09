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
                company_website
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
            margin: `50px 0`,
          }}
        >
          <div
            className="container"
            style={{
              borderTop: `1px solid rgba(0,0,0,.1)`,
              paddingTop: `30px`
            }}
          >
            <p
              className="text-brand-1"
              style={{ marginBottom: `50px` }}
            >
              Experience
            </p>
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
