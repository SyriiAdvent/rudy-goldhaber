import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faTwitterSquare, faDev, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialList = styled.div`
  ul {
    margin: 0;
    padding: 0 0 20px 0;
    display: flex;
    margin-top: auto;

    li {
      list-style: none;
      margin-left: 12px;

      a {
        color: #fff;
        text-decoration: none;
      }
    }

    li:first-child {
      margin: 0
    }

    @media (max-width: 786px) {
      margin: 0;
      justify-content: center;
      text-align: center;
    }
  }
`

const SocialMediaList = (props) => {
  const size = props.size
  return (
    <SocialList>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/rudy-goldhaber/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size={size ? size : '3x'} />
          </a>
        </li>

        <li>
          <a href="https://github.com/SyriiAdvent" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size={size ? size : '3x'} />
          </a>
        </li>

        <li>
          <a href="https://dev.to/syriiadvent" target="_blank">
            <FontAwesomeIcon icon={faDev} size={size ? size : '3x'} />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/syriiadvent" target="_blank">
            <FontAwesomeIcon icon={faTwitterSquare} size={size ? size : '3x'} />
          </a>
        </li>

        <li>
          <a href="mailto:rgoldhaber24@gmail.com" target="_blank" rel="nofollow noiopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size={size ? size : '3x'} />
          </a>
        </li>
      </ul>
    </SocialList>
  )
}

export default SocialMediaList
