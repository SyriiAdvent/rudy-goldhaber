import React from 'react'
import styled from 'styled-components'
import cv from '../../assets/Rudy_Goldhaber_Resume.pdf'

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
  return (
    <LinkContainer>
      <li className='li-anime' onClick={() => props.refs.scrollToAbout()}>About</li>
      <li className='li-anime' onClick={() => props.refs.scrollToBlog()}>Blog</li>
      <li className='li-anime' onClick={() => props.refs.scrollToProjects()}>Projects</li>
      {/* <li>Contact</li> */}
      <Resume className='li-anime'><a href={cv} target='_blank'>Resume</a></Resume>
    </LinkContainer>
  )
}

export default LinksWrapper
