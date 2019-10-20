import React, { useEffect } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: ${props => props.active ? 'flex' : 'none'};
  `
const ModalContainer = styled.div`
  z-index: 100;
  background: white;
  position: fixed;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
  width: 100%;
`
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`
const ModalContent = styled.div`
  max-height: 85vh;
  overflow: scroll;
`
const ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: .5;
  }
  outline: none !important;
`
const Header = styled.h1`
  font-weight: 1.6rem;
`

const Modal = ({ body, header, onClose, active }) => {
  useEffect(() => {
    active
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'visible'
  })
  return (
    typeof document !== `undefined`
      ? ReactDOM.createPortal(
        <>
          <ModalOverlay onClick={onClose} aria-modal tabIndex={-1} role="dialog" active={active}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <ModalContent>
                <ModalHeader>
                  <Header>{header}</Header>
                  <ModalCloseButton type="button" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                  </ModalCloseButton>
                </ModalHeader>
                {body}
              </ModalContent>
            </ModalContainer>
          </ModalOverlay>
        </>, document.body
      )
      : null
  )
}

export default Modal
