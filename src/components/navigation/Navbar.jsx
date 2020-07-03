import React from 'react'
import styled from 'styled-components'
import LinksWrapper from './LinksWrapper'

const NavContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 1rem 0 1rem;
  border: 1px solid black;
`

const Navbar = () => {
  return (
    <NavContainer>
      <h3>R</h3>
      <LinksWrapper />
    </NavContainer>
  )
}

export default Navbar
