import React from 'react'
import styled from 'styled-components'
import LinksWrapper from './LinksWrapper'

const NavContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.3);
  
  padding: 0 1rem 0 1rem;
  /* border: 1px solid black; */
  position: fixed;
`

const Navbar = () => {
  return (
    <NavContainer>
      <h3>Rudy Goldhaber</h3>
      <LinksWrapper />
    </NavContainer>
  )
}

export default Navbar
 