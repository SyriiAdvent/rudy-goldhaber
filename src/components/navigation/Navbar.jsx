import React, { useEffect } from 'react'
import styled from 'styled-components'
import LinksWrapper from './LinksWrapper'
import anime from 'animejs'

const NavContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 5rem;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.5);
  padding: 0;
  position: fixed;
  z-index: 15;
  transform: translateY(-100px);

  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const NameText = styled.h3`
  font-size: 1.8rem;
  margin-left: 1.5rem;
  font-weight: 400;
  transform: translateY(-100px);

  @media (max-width: 786px) {
    margin: 0;
  }
`


const Navbar = props => {
  const logo = 'Rudy Goldhaber'.split('')
  const dropAnimation = () => {
    anime({
      targets: '.nav-anime',
      translateY: [
        { value: -100, duration: 500, delay: 0 },
        { value: 0, duration: 500, delay: 4150 },
      ],
    })
    anime({
      targets: '.logo-anime',
      translateY: [
        { value: -100, duration: 500 },
        { value: 0, duration: 500, delay: 5000 },
      ],
    })
    anime({
      targets: '.li-anime',
      translateY: [
        { value: -100, duration: 500, endDelay: 6000 },
        { value: 0, duration: 500, delay: anime.stagger(400, { grid: [3, 0] }) },
      ],
    })
  }
  
  useEffect(() => {
    dropAnimation()
  }, [])

  return (
    <NavContainer className='nav-anime'>
      <NameText className='logo-anime'>Rudy Goldhaber</NameText>
      <LinksWrapper refs={props} />
    </NavContainer>
  )
}

export default Navbar
 