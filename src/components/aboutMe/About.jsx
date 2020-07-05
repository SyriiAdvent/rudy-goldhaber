import React, { useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import me from '../../assets/me.jpg'
import './AboutMe.css'

const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  `

const Container = styled.div`
  padding: 1rem;
  width: 50%;
  border-radius: 16px;
  /* background: #0f141f;
  box-shadow:  10px 10px 18px #090c13, 
             -10px -10px 18px #151c2b; */
`

const myImage = styled.img`
  src: me;
  width: 20%;
  height: 20%;
`

const About = () => {
  const hello = 'Hello, my name is'.split('')
  const myName = 'Rudy Goldhaber'
  const likeIntro = 'I like to engineer software.'
  const bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis facilisis metus. Quisque scelerisque ultrices vulputate. Sed sed velit metus. Sed eu ante a libero viverra rutrum non non elit. Sed hendrerit nibh vel dictum suscipit. Nunc mauris nibh, vulputate sed molestie non, porttitor semper magna. Etiam ultricies gravida nisl ut placerat.'

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
        <span classname='letter-stagger'>
          <div className='letters'>{hello.map(letter => {
            return (<span className='letts'>{letter}</span>)
          })}</div>
        </span>
        <h2>Rudy Goldhaber</h2>
        <h4>I like to engineer software.</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis facilisis metus. Quisque scelerisque ultrices vulputate. Sed sed velit metus. Sed eu ante a libero viverra rutrum non non elit. Sed hendrerit nibh vel dictum suscipit. Nunc mauris nibh, vulputate sed molestie non, porttitor semper magna. Etiam ultricies gravida nisl ut placerat.
        </p>
      </Container>
      <img src={me} style={{ width: '30%', borderRadius: '14px' }} />
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