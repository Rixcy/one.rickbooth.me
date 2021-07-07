import React from 'react'
import styled from 'styled-components'
import Toggle from './Toggle'
import SocialIcons from './SocialIcons'
import Devices from '../core/Devices'

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  ${Devices.large} {
    font-size: 24px;
  }
`

const IntroText = styled.span`
  font-weight: bold;
`

const IntroBlock = styled.section`
  padding-top: 4rem;
  ${Devices.medium} {
    padding-top: 5rem;
  }
  ${Devices.large} {
    padding-top: 6rem;
  }
`

export default ({ darkMode, setDarkMode, setModalOpen }) => {
  return (
    <IntroBlock>
      <div>
        <Text>
          <IntroText>Hi, I'm Rick Booth.</IntroText> I'm an ambitious and personable individual with experience in both web development and full stack software development. As a self-driven, forward-thinking individual, I constantly strive to embrace new techniques and technologies, understanding their impact and weaving them into new and existing projects alike.
        </Text>
        <div className="flex mt-6">
          <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <SocialIcons setModalOpen={setModalOpen}/>
        </div>
      </div>
    </IntroBlock>
  )
}
