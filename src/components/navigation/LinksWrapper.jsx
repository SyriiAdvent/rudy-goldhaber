import React from 'react'
import styled from 'styled-components'

const LinkContainer = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-evenly;

  li {
    text-decoration: none;
    list-style: none;
  }
`

const Resume = styled.li`
  
`

const LinksWrapper = () => {
  return (
    <LinkContainer>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
      <Resume>Resume</Resume>
    </LinkContainer>
  )
}

export default LinksWrapper
