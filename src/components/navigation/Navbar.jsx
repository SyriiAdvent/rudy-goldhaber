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


const Navbar = (props) => {
  const pageInitilized = props.pageInitilized
  const logo = 'Rudy Goldhaber'.split('')

  const dropAnimation = () => {
    anime({
      targets: '.nav-anime',
      translateY: [
        { value: 0, duration: 500, delay: 0 },
      ],
    })
    anime({
      targets: '.logo-anime',
      translateY: [
        { value: -100, duration: 500 },
        { value: 0, duration: 500, delay: 200 },
      ],
    })
    anime({
      targets: '.li-anime',
      translateY: [
        { value: -100, duration: 500, endDelay: 600 },
        { value: 0, duration: 500, delay: anime.stagger(400, { grid: [4, 0], from: 'last' }) },
      ],
    })
  }
  
  useEffect(() => {
    anime({
      targets: '.nav-anime',
      translateY: [
        { value: -100, duration: 0, delay: 0 },
      ],
    })
    if(pageInitilized) {
      dropAnimation()
    }
  }, [pageInitilized])

  return (
    <NavContainer className='nav-anime'>
      {console.log("mounted")}
      <NameText className='logo-anime'>Rudy Goldhaber</NameText>
      <LinksWrapper refs={props} />
    </NavContainer>
  )
}

export default Navbar
 