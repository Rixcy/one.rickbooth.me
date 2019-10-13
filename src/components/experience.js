import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Job from './Job.js'
import styled from 'styled-components'

const ExperienceContainer = styled.section`
  margin: 25px 0;
  transition: border-top 0.3s ease-out;
  border-top: ${props => props.last ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'};
  .dark-mode & {
    border-top: ${props => props.last ? 'none' : '1px solid rgba(74, 85, 104, 0.6)'};
  }
`

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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ExperienceContainer>
        <div
          className="container"
          style={{
            paddingTop: `30px`
          }}
        >
          <p className="mb-8">
            Experience
          </p>
          {data.allDataJson.edges[0].node.jobs.map(( job, index ) => (
            <Job key={index} job={job} last={index === data.allDataJson.edges[0].node.jobs.length-1}/>
          ))}
        </div>
      </ExperienceContainer>
    )}
  />
)

export default Experience
