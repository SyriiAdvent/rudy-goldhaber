import React, { useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import me from '../../assets/me.jpg'
import './AboutMe.css'
import SocialMediaList from '../social/SocialMediaList'

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
  const bio = `There has never been a more inspirational day then then the day I decided to persue a career in Software Engineering. The rush of challenges and new problems to solve are what keep me going. Can you give me a challenge?`

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
          <SocialMediaList />
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