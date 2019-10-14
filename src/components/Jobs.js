import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Job from './Job.js'
import styled from 'styled-components'

const Jobs = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <>
      {data.allDataJson.edges[0].node.jobs.map(( job, index ) => (
        <Job key={index} job={job} last={index === data.allDataJson.edges[0].node.jobs.length-1}/>
      ))}
    </>
  )
}

export default Jobs
