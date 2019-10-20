import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import autosize from 'autosize'

const InputStyles = `
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  margin: 0 0 .5rem 0;
  padding: .6rem 0 .4rem 0;
  outline: none;
  border-bottom: 1px solid #ced4da;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  margin-right: 10px;
  &:focus {
    border-bottom: 1px solid ${darken(0.1, '#ced4da')};
    box-shadow: 0 1px 0 0 ${darken(0.1, '#ced4da')};
  }
  margin-bottom: 20px;
`
const StyledInput = styled.input`${InputStyles}`
const TextArea = styled.textarea`${InputStyles}`
const Label = styled.label`
  line-height: 1.5;
  text-align: left;
  font-family: Roboto,sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: .5rem;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  transition: transform .2s ease-out,color .2s ease-out;
  transform-origin: 0 100%;
  transform: ${props => props.active ? 'translateY(-14px) scale(.8)' : 'translateY(12px)'};
  cursor: text;
  user-select: none;
  color: ${props => props.active ? darken(0.1, '#ced4da') : darken(0.2, '#ced4da')};
`

const Input = React.forwardRef(({ id, name, label, type, rows=3 }, ref) => {
  const LabelRef = useRef(null)
  const [inputState, setInputState] = useState(false)
  useEffect(() => {
    if (type === 'textarea' && ref) {
      autosize(ref.current)
    }
  }, [])
  return (
    <>
      {type === 'text' &&
        <StyledInput
          id={id}
          type="text"
          name={name}
          ref={ref}
          onFocus={() => setInputState(true)}
          onBlur={e => e.target.value.length ? null : setInputState(false)} />
      }
      {type === 'textarea' &&
        <TextArea
          id={id}
          name={name}
          ref={ref}
          rows={rows}
          onFocus={() => setInputState(true)}
          onBlur={e => e.target.value.length ? null : setInputState(false)} />
      }
      <Label htmlFor={id} ref={LabelRef} active={inputState}>{label}</Label>
    </>
  )
})

export default Input
