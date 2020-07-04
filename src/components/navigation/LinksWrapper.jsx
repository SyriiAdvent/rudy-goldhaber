import React from 'react'
import styled from 'styled-components'

const LinkContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  li {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  @media (max-width: 786px) {
    width: 100%;
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
