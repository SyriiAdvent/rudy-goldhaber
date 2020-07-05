import React from 'react'
import styled from 'styled-components'
import cv from '../../assets/Rudy Goldhaber CV.pdf'

const LinkContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 22;

  li {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  @media (max-width: 786px) {
    width: 100%;
    padding-bottom: 5px;
  }
`

const Resume = styled.li`
  
`

const LinksWrapper = props => {
  console.log(props);
  return (
    <LinkContainer>
      <li onClick={() => props.refs.scrollToAbout()}>About</li>
      <li onClick={() => props.refs.scrollToProjects()}>Projects</li>
      {/* <li>Contact</li> */}
      <Resume><a href={cv} target='_blank'>Resume</a></Resume>
    </LinkContainer>
  )
}

export default LinksWrapper
