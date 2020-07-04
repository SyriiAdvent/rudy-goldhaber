import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import gLanding from '../../assets/projects/thegardenedu/1thegardenedu_landing.jpg'
import gUserdash from '../../assets/projects/thegardenedu/2thegardenedu_userdashboard.png'
import gStudentDetails from '../../assets/projects/thegardenedu/3thegardenedu_studentDetails.png'
import gAdminDash from '../../assets/projects/thegardenedu/4thegardenedu_adminDashbaord.png'
import gStaffSection from '../../assets/projects/thegardenedu/5thegardenedu_staffSectoin.png'
import gStaffAttendance from '../../assets/projects/thegardenedu/6thegardenedu_staffAttendance.png'

import anime from 'animejs'

const ImageCardContainer = styled.div`
  width: 32rem;
  height: 25rem;
  
`

const FloatingProjectImg = styled.div`
  background-image: url(${props => props.imgUrl});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

const ImageCard = props => {
  const [transitioned, setTransitioned] = useState(0)
  const currentImage = [gLanding, gUserdash, gStudentDetails, gAdminDash, gStaffSection, gStaffAttendance]
  const direction = props.direction

  const imageAnimate = () => {
    return anime({
      targets: (`${direction}`) === 'reverse' ? '.reverse' : '.animate-image',
      translateX: (`${direction}`) === 'reverse' ? 2000 : -2000,
      direction: 'alternate',
      easing: 'easeInOutSine'
    })
  }

  const imageSlider = () => {
    if(transitioned < currentImage.length) {
      setTimeout(() => {
        imageAnimate()
      }, 1000)
      setTimeout(() => {
        setTransitioned(transitioned + 1);
      }, 2500)
    } 
    else {
      setTransitioned(0)
    }
  }

  useEffect(() => {
      imageSlider()
  }, [transitioned])

  return (
    <ImageCardContainer>
      <FloatingProjectImg className={'animate-image ' + props.direction} imgUrl={currentImage[transitioned]} />
    </ImageCardContainer>
  )
}

export default ImageCard
