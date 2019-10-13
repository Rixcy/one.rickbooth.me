import React from 'react'
import StyledLink from './StyledLink'
import styled from 'styled-components'

const JobContainer = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  transition: border-bottom 0.3s ease-out;
  border-bottom: ${props => props.last ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'};
  .dark-mode & {
    border-bottom: ${props => props.last ? 'none' : '1px solid rgba(74, 85, 104, 0.6)'};
  }
`

const Job = (props) => (
  <JobContainer last={props.last}>
    <p className="font-primary font-bold">{props.job.title}</p>
    <p className="mb-4 mt-1 font-secondary">
      <StyledLink href={props.job.company_website}>
        {props.job.company}
      </StyledLink>
    </p>
    <p
      className="font-secondary"
      dangerouslySetInnerHTML={{__html: props.job.role}}/>
  </JobContainer>
)

export default Job
