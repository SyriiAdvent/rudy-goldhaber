import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import gLanding from '../../assets/projects/thegardenedu/1thegardenedu_landing.jpg'
import gUserdash from '../../assets/projects/thegardenedu/2thegardenedu_userdashboard.png'
import gStudentDetails from '../../assets/projects/thegardenedu/3thegardenedu_studentDetails.png'
import gAdminDash from '../../assets/projects/thegardenedu/4thegardenedu_adminDashbaord.png'
import gStaffSection from '../../assets/projects/thegardenedu/5thegardenedu_staffSectoin.png'
import gStaffAttendance from '../../assets/projects/thegardenedu/6thegardenedu_staffAttendance.png'

const FloatingProjectImg = styled.div`
  background-image: url(${props => props.imgUrl});
  
  width: 20%;
  height: 100%;

  /* Center and scale the image */
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`

const ImageCard = () => {
  const [transitioned, setTransitioned] = useState(0)
  const [currentImage, setCurrentImage] = useState([gLanding, gUserdash, gStudentDetails, gAdminDash, gStaffSection, gStaffAttendance])

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
    console.log("init")
  }, [transitioned])

  return (
    <FloatingProjectImg imgUrl={currentImage[transitioned]} />
  )
}

export default ImageCard
