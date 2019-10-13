import React from 'react'
import styled from 'styled-components'
import useDarkMode from '../hooks/useDarkMode'
import Toggle from './Toggle'
import SocialIcons from './SocialIcons'

const Text = styled.p`
  text-align: center;
  font-size: 24px;
`

const IntroText = styled.span`
  font-weight: bold;
`

export default () => {
  const [darkMode, setDarkMode] = useDarkMode()
  return (
    <section className="pt-24">
      <div>
        <Text>
          <IntroText>Hi, I'm Rick Booth.</IntroText> I'm an ambitious and personable individual with experience in both web development and full stack software development. As a self-driven, forward-thinking individual, I constantly strive to embrace new techniques and technologies, understanding their impact and weaving them into new and existing projects alike.
        </Text>
        <div className="flex mt-6">
          <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <SocialIcons />
        </div>
      </div>
    </section>
  )
}
