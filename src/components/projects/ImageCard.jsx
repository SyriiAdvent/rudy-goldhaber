import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import gLanding from '../../assets/projects/thegardenedu/1thegardenedu_landing.jpg'
import gUserdash from '../../assets/projects/thegardenedu/2thegardenedu_userdashboard.png'
import gStudentDetails from '../../assets/projects/thegardenedu/3thegardenedu_studentDetails.png'
import gAdminDash from '../../assets/projects/thegardenedu/4thegardenedu_adminDashbaord.png'
import gStaffSection from '../../assets/projects/thegardenedu/5thegardenedu_staffSectoin.png'
import gStaffAttendance from '../../assets/projects/thegardenedu/6thegardenedu_staffAttendance.png'

import fLanding from '../../assets/projects/flattencurve/1flattencurve_landing.png'
import fStatistics from '../../assets/projects/flattencurve/2flattencurve_stats.png'
import fAbout from '../../assets/projects/flattencurve/3flattencurve_about.png'
import fMap from '../../assets/projects/flattencurve/4flattencurve_map.png'

import conway1 from '../../assets/projects/conways/VDggNxFpdb.png'
import conway2 from '../../assets/projects/conways/cWAIZkA9FR.png'
import conway3 from '../../assets/projects/conways/ZrlLYggi8K.png'
import conway4 from '../../assets/projects/conways/Y8XOTC03cq.png'
import conway5 from '../../assets/projects/conways/p3mBSI1lf4.png'

import anime from 'animejs'

const ImageCardContainer = styled.div`
  width: 32rem;
  height: 25rem;

  @media (max-width: 786px) {
    /* width: 28rem; */
    height: 21rem;
  }

  @media (max-width: 512px) {
    width: 95%;
  }
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
  const [currentImage, setCurrentImage] = useState([])
  const gardenImage = [gLanding, gUserdash, gStudentDetails, gAdminDash, gStaffSection, gStaffAttendance]
  const flattenImage = [fLanding, fStatistics, fAbout, fMap]
  const conwayImage = [conway1, conway2, conway3, conway4, conway5, ]
  const {direction, project } = props

  const imageAnimate = () => {
    return anime({
      targets: '.animate-image',
      opacity: [
        {value: 0, easing: 'linear', duration: 700},
        {value: 1, easing: 'linear', duration: 700}
      ],
    })
  }

  const imageSlider = () => {
    if(transitioned < currentImage.length) {
      setTimeout(() => {
        imageAnimate()
        setTimeout(() => {
          setTransitioned(transitioned + 1);
        }, 700)
      }, 5000)
    } 
    else {
      setTransitioned(0)
    }
  }

  const projectChecker = () => {
    if(project === 'garden') {
      setCurrentImage(gardenImage)
    } else if(project === 'flatten') {
      setCurrentImage(flattenImage)
    } else if(project === 'conway') {
      setCurrentImage(conwayImage)
    }
  }

  useEffect(() => {
    projectChecker()
  }, [project])

  useEffect(() => {
      imageSlider()
  }, [transitioned, currentImage])

  return (
    <ImageCardContainer>
      <FloatingProjectImg className={'animate-image'} imgUrl={currentImage[transitioned]} />
    </ImageCardContainer>
  )
}

export default ImageCard
