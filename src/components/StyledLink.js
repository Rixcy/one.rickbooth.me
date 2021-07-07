import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

const sharedStyle = css`
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

const StyledAnchor = styled.a`${sharedStyle}`
const StyledButton = styled.button`
  ${sharedStyle}
  &:focus {
    outline: none;
  }
`

const StyledLink = (props) => {
  return (
    <StyledAnchor target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </StyledAnchor>
  )
}
StyledLink.propTypes = {
  href: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}

export const StyledLinkButton = (props) => {
  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  )
}
StyledLinkButton.propTypes = {
  children: PropTypes.node.isRequired
}

export default StyledLink
