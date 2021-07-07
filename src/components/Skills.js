import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;
`
const Skill = styled.a`
  padding: 11px 31px;
  border: 1px solid rgba(160,174,192,0.5);
  margin-top: 8px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 24px;
  text-decoration: none;
  color: inherit;
  background: ${props => props.colour};
  transition: all 0.1s ease-out;
  &:hover {
    background: ${props => darken('0.4', props.colour)};
  }
  .dark-mode & {
    background: transparent;
    &:hover {
      background: ${props => props.colour};
    }
  }
`

const Skills = () => {
  let skillsList = [
    {name: 'React', href: 'https://reactjs.org/', colour: 'rgba(0,216,255,0.1)'},
    {name: 'Vue.js', href: 'https://vuejs.org/', colour: 'rgba(65,184,131,0.1)'},
    {name: 'Gatsby', href: 'https://www.gatsbyjs.org/', colour: 'rgba(84,44,133,0.1)'},
    {name: 'ES6/ESNext', href: 'https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015', colour: 'rgba(250,222,52,0.1)'},
    {name: 'Nuxt', href: 'https://nuxtjs.org/', colour: 'rgba(17,192,128,0.1)'},
    {name: 'Next.js', href: 'https://nextjs.org/', colour: 'rgba(25,132,254,0.1)'},
    {name: 'JavaScript', href: 'https://en.wikipedia.org/wiki/JavaScript', colour: 'rgba(253,217,63,0.1)'},
    {name: 'Styled Components', href: 'https://www.styled-components.com/', colour: 'rgba(218,153,100,0.1)'},
    {name: 'TailwindCSS', href: 'https://tailwindcss.com/', colour: 'rgba(49,151,149,0.1)'},
    {name: 'AWS', href: 'https://aws.amazon.com/', colour: 'rgba(255,153,1,0.1)'},
    {name: 'CI/CD', href: 'https://en.wikipedia.org/wiki/CI/CD', colour: 'rgba(10,59,113,0.1)'},
    {name: 'Jest', href: 'https://jestjs.io/', colour: 'rgba(198,61,21,0.1)'},
    {name: 'Redux', href: 'https://redux.js.org/', colour: 'rgba(118,74,188,0.1)'},
    {name: 'Prettier', href: 'https://prettier.io/', colour: 'rgba(184,50,128,0.1)'},
    {name: 'ESLint', href: 'https://eslint.org/', colour: 'rgba(74,51,195,0.1)'},
    {name: 'Webpack', href: 'https://webpack.js.org/', colour: 'rgba(142,214,251,0.1)'},
    {name: 'Gulp', href: 'https://gulpjs.com/', colour: 'rgba(232,75,81,0.1)'},
    {name: 'Rollup', href: 'https://rollupjs.org/', colour: 'rgba(255,50,51,0.1)'},
    {name: 'Babel', href: 'https://babeljs.io/', colour: 'rgba(249,220,63,0.1)'},
    {name: 'SCSS', href: 'https://sass-lang.com/', colour: 'rgba(205,103,153,0.1)'},
    {name: 'CSS-in-JS', href: 'https://en.wikipedia.org/wiki/CSS-in-JS', colour: 'rgba(242,132,1,0.1)'},
    {name: 'Vuex', href: 'https://vuex.vuejs.org/', colour: 'rgba(65,184,131,0.1)'}
  ]
  return (
    <SkillsList>
      {skillsList.map((skill, index) => (
        <Skill key={index} href={skill.href} target="_blank" rel="noopener noreferrer" colour={skill.colour}>
          {skill.name}
        </Skill>
      ))}
    </SkillsList>
  )
}

export default Skills
