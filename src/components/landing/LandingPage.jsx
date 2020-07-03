import React from 'react'
import styled from 'styled-components'
import TitleText from './TitleText'
import codeImgBlurred from '../../assets/Code_XLZpZAGEXyblurred.png'

const LandingWrapper = styled.div`
  height: 100vh;
`

const BackgroundImg = styled.div`
  background-image: url(${codeImgBlurred});
  
  /* Full height */
  height: 100%;

  /* Center and scale the image */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const LandingPage = () => {

  return (
    <LandingWrapper>
      <BackgroundImg />
      <TitleText />
    </LandingWrapper>
  )
}

export default LandingPage
