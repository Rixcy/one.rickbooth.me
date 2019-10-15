import React, { useState } from 'react'
import '../assets/layout.scss'
import styled from 'styled-components'
import Devices from '../core/Devices'
import useDarkMode from '../hooks/useDarkMode'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import IntroBlock from '../components/IntroBlock'
import Jobs from '../components/Jobs'
import Skills from '../components/Skills'

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 20px;
  color: #1a202c;
  background-color: #f3f3f3;
  background-image: url('data:image/svg+xml;utf8,<svg width="1440" height="950" xmlns="http://www.w3.org/2000/svg"><path d="M0 949.875c1.154 0 27.617-178.906 270.484-210.46 242.868-31.556 225.766-103.83 303.86-187.493 78.093-83.664 175.695-158.54 430.468-129.54 254.774 29 375.696 7.509 435.188-104.071-.215 0 0-318.311 0-318.311H0s.336 949.875 0 949.875z" fill="%23ffffff" fill-rule="evenodd"/></svg>');
  background-position: 0 0;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: all 0.3s ease-out;
  ${Devices.medium} {
    border: 8px solid black;
    background-position: 0 -75px;
  }
  .dark-mode & {
    background-color: #1a202c;
    color: #a0aec0;
    background-image: url('data:image/svg+xml;utf8,<svg width="1440" height="950" xmlns="http://www.w3.org/2000/svg"><path d="M0 949.875c1.154 0 27.617-178.906 270.484-210.46 242.868-31.556 225.766-103.83 303.86-187.493 78.093-83.664 175.695-158.54 430.468-129.54 254.774 29 375.696 7.509 435.188-104.071-.215 0 0-318.311 0-318.311H0s.336 949.875 0 949.875z" fill="%232d3748" fill-rule="evenodd"/></svg>');
  }
`
const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`
const MainContent = styled.div`
  padding-top: 30px;
  margin: 25px 0;
  transition: border-top 0.3s ease-out;
  border-top: ${props => props.last ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'};
  .dark-mode & {
    border-top: ${props => props.last ? 'none' : '1px solid rgba(74, 85, 104, 0.6)'};
  }
`
const ContentTabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.8rem;
`
const ContentTab = styled.span`
  padding-bottom: 4px;
  border-bottom: 3px solid ${props => props.active ? 'rgba(160, 174, 192, 0.5)' : 'transparent'};
  cursor: pointer;
  user-select: none;
  transition: border-bottom 0.5s ease-out;
`
const IndexPage = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const [activeTab, setActiveTab] = useState('experience')
  let tabContent
  if (activeTab === 'experience') {
    tabContent = <Jobs />
  } else if (activeTab === 'skills') {
    tabContent = <Skills />
  }
  return (
    <Wrapper>
      <SEO title="Home" keywords={[
        `gatsby`,
        `application`,
        `react`,
        `portfolio`,
        `Rick Booth`,
        `Richard Booth`,
        `Rick`,
        `Richard`,
        `Web Developer`,
        `Software Developer`,
        `Front End Developer`,
        `Back End Developer`,
        `Full Stack Developer`,
        `Rixcy`,
        `Rixcy Developer`
      ]} />
      <Container>
        <IntroBlock darkMode={darkMode} setDarkMode={setDarkMode} />
        <MainContent>
          <ContentTabs>
            <ContentTab active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>
              Experience
            </ContentTab>
            <ContentTab active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>
              Skills
            </ContentTab>
          </ContentTabs>
          {tabContent}
        </MainContent>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default IndexPage
