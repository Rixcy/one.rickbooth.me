import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Input from './Input'

const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`
const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${InputContainer}:nth-child(1) {
    flex: 5;
  }
  ${InputContainer}:nth-child(2) {
    flex: 7;
  }
`
const SubmitButton = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #1a202c;
  overflow: hidden;
  cursor: pointer;
  margin-right: 10px;
  &::after {
    content: '';
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }
  &:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ContactForm = () => {
  const NameRef = useRef(null)
  const EmailRef = useRef(null)
  const SubjectRef = useRef(null)
  const BodyRef = useRef(null)
  useEffect(() => {
    NameRef.current.focus()
  })
  return (
    <form name="message" method="POST" data-netlify-recaptcha="true" data-netlify="true" data-netlify-honeypot="bot-field" action="/">
      <input type="hidden" name="form-name" value="message"/>
      <TwoColumns>
        <InputContainer>
          <Input
            id="name"
            type="text"
            name="name"
            label="Your name"
            ref={NameRef}/>
        </InputContainer>
        <InputContainer>
          <Input
            id="email"
            type="text"
            name="email"
            label="Your email"
            ref={EmailRef}/>
        </InputContainer>
      </TwoColumns>
      <InputContainer>
        <Input
          id="subject"
          type="text"
          name="subject"
          label="Subject"
          ref={SubjectRef}/>
      </InputContainer>
      <InputContainer>
        <Input
          id="body"
          type="textarea"
          name="body"
          rows="1"
          label="Message"
          ref={BodyRef}/>
      </InputContainer>
      <InputContainer>
        <div data-netlify-recaptcha="true" />
      </InputContainer>
      <Right>
        <SubmitButton type="submit">Send</SubmitButton>
      </Right>
    </form>
  )
}

export default ContactForm
