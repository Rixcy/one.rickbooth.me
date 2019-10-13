import React from 'react'
import PropTypes from 'prop-types'
import './layout.scss'
import styled from 'styled-components'
import Footer from './Footer'
import Devices from '../core/Devices'

const Content = styled.div`
  padding: 0 20px;
  color: #1a202c;
  background-color: #f3f3f3;
  background-image: url('data:image/svg+xml;utf8,<svg width="1440" height="950" xmlns="http://www.w3.org/2000/svg"><path d="M0 949.875c1.154 0 27.617-178.906 270.484-210.46 242.868-31.556 225.766-103.83 303.86-187.493 78.093-83.664 175.695-158.54 430.468-129.54 254.774 29 375.696 7.509 435.188-104.071-.215 0 0-318.311 0-318.311H0s.336 949.875 0 949.875z" fill="%23ffffff" fill-rule="evenodd"/></svg>');
  background-size: 100%;
  background-position: 0 -75px;
  background-repeat: no-repeat;
  transition: all 0.3s ease-out;
  .dark-mode & {
    background-color: #1a202c;
    color: #dfdfdf;
    background-image: url('data:image/svg+xml;utf8,<svg width="1440" height="950" xmlns="http://www.w3.org/2000/svg"><path d="M0 949.875c1.154 0 27.617-178.906 270.484-210.46 242.868-31.556 225.766-103.83 303.86-187.493 78.093-83.664 175.695-158.54 430.468-129.54 254.774 29 375.696 7.509 435.188-104.071-.215 0 0-318.311 0-318.311H0s.336 949.875 0 949.875z" fill="%232d3748" fill-rule="evenodd"/></svg>');
  }
  ${Devices.medium} {
    border: 8px solid black;
  }
`

const Layout = (props) => {
  return (
    <Content>
      <main>{props.children}</main>
      <Footer />
    </Content>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
