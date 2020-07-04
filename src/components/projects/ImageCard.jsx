import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import gLanding from '../../assets/projects/thegardenedu/1thegardenedu_landing.jpg'
import gUserdash from '../../assets/projects/thegardenedu/2thegardenedu_userdashboard.png'
import gStudentDetails from '../../assets/projects/thegardenedu/3thegardenedu_studentDetails.png'
import gAdminDash from '../../assets/projects/thegardenedu/4thegardenedu_adminDashbaord.png'
import gStaffSection from '../../assets/projects/thegardenedu/5thegardenedu_staffSectoin.png'
import gStaffAttendance from '../../assets/projects/thegardenedu/6thegardenedu_staffAttendance.png'

const ImageCardContainer = styled.div`
  width: 25rem;
  height: 15rem;
`

const FloatingProjectImg = styled.div`
  background-image: url(${props => props.imgUrl});
  height: 100%;
  max-width: 100%;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: contain;
`

const ImageCard = () => {
  const [transitioned, setTransitioned] = useState(0)
  const currentImage = [gLanding, gUserdash, gStudentDetails, gAdminDash, gStaffSection, gStaffAttendance]

  const imageSlider = () => {
    if(transitioned < currentImage.length) {
      setTimeout(() => {
        setTransitioned(transitioned + 1);
      }, 2500);
    } else {
      setTransitioned(0)
    }
  }

  useEffect(() => {
    imageSlider()
  }, [transitioned])

  return (
    <ImageCardContainer>
      <FloatingProjectImg imgUrl={currentImage[transitioned]} />
    </ImageCardContainer>
  )
}

export default ImageCard
