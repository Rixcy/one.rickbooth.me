import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLinkTag = styled.a`
  color: #3d4852;
  text-decoration: none;
  transition: color 0.2s ease-out;
  &:hover {
    color: #8795a1;
  }
  .dark-mode & {
    color: #a0aec0;
    &:hover {
      color: #cbd5e0;
    }
  }
`
const StyledLink = (props) => {
  return (
    <StyledLinkTag target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </StyledLinkTag>
  )
}
StyledLink.propTypes = {
  href: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}

export default StyledLink
