import React from 'react'
import styled from 'styled-components'
import LinksWrapper from './LinksWrapper'

const NavContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.3);
  padding: 0;
  position: fixed;
  z-index: 10;

  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const NameText = styled.h3`
  font-size: 1.8rem;
  margin-left: 1.5rem;

  @media (max-width: 786px) {
    margin: 0;
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <NameText>Rudy Goldhaber</NameText>
      <LinksWrapper />
    </NavContainer>
  )
}

export default Navbar
 