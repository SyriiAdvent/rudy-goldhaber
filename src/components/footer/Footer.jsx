import React from 'react'
import styled from 'styled-components'
import SocialMediaList from '../social/SocialMediaList'

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(26,32,44);
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialWrapper>
        <h2>Be sure to get in touch!</h2>
        <SocialMediaList size='2x' />
      </SocialWrapper>
      <h5>© 2020 Rudy Goldhaber. All Rights Reserved.</h5>
      
    </FooterContainer>
  )
}

export default Footer
