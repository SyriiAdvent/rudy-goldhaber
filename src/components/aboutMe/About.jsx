import React, { useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import me from '../../assets/me.jpg'
import './AboutMe.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faTwitterSquare, faDev, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  line-height: 1.4rem;
  `

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  width: 80%;
  border-radius: 16px;

  @media (max-width: 786px) {
    margin: 0;
    flex-direction: column;
    align-items: center;
  }
`
const AboutContents = styled.div`
  margin: 0 0 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    margin: 25px 0;
    padding-right: 20%;
  }

  h2, h4 {
    margin: 10px 0 0 0;
  }

  span {
    margin-top: 15px;
  }

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

  @media (max-width: 786px) {
    margin: 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p { 
      padding: 0 8px;
    }
  }
`

const PreviewImage = styled.div`
  width: 90%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 786px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
`

const About = () => {
  const hello = 'Hello, my name is'.split('')
  const myName = 'Rudy Goldhaber'
  const likeIntro = 'I like to engineer software.'
  const bio = `There has never been more insiration then the day I decided to persue a career in
  Software Engineering. The rush of challenges and new problems to solve are what keep me going. Can you give me a challenge? Contact me today!`

  const LetterAnimation = () => {
    anime({
      targets: '.letter-stagger .letts',
      translateY: -270,
      delay: anime.stagger(100)
    });
  }

  useEffect(() => {
    setTimeout(() => {
      LetterAnimation()
    }, 2000);
  }, [])

  return (
    <AboutContainer>
      <Container>
        <PreviewImage>
          <img src={me} />
        </PreviewImage>
        <AboutContents>
          <span classname='letter-stagger'>
            <div className='letters'>{hello.map(letter => {
              return (<span className='letts'>{letter}</span>)
            })}</div>
          </span>
          <h2>Rudy Goldhaber</h2>
          <h4>I like to engineer software.</h4>
          <p>
            There has never been more insiration then the day I decided to persue a career in
            Software Engineering. The rush of challenges and new problems to solve are what keep me going. Can you give me a challenge? Contact me today!
          </p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/rudy-goldhaber/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </li>

            <li>
              <a href="https://github.com/SyriiAdvent" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
              </a>
            </li>

            <li>
              <a href="https://dev.to/syriiadvent" target="_blank">
                <FontAwesomeIcon icon={faDev} size="3x" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/syriiadvent" target="_blank">
                <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
              </a>
            </li>

            <li>
              <a href="mailto:rgoldhaber24@gmail.com" target="_blank" rel="nofollow noiopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </a>
            </li>
          </ul>
        </AboutContents>
      </Container>
    </AboutContainer>
  )
}

export default About


// Hello! I'm Me, a software engineer based in Venice, CA.

// I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.

// Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.

// Here are a few technologies I've been working with recently:

// JavaScript (ES6+)
// HTML & (S)CSS
// React
// Vue
// Node.js
// WordPress