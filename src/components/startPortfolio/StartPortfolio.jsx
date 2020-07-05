import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'

const LoadContainer = styled.div`
  display: flex;
  width: 100% + 20px;
  height: 100%;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 999;
`
const Square = styled.div`
  background-color: #1e71b6;
  width: ${props => props.width || '20px' };
  height: ${props => props.height || '20px' };
`

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const StartPortfolio = props => {
  const [grid, setGrid] = useState({
    verticalGrid: [],
    horizontalGrid: []
  })
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0
  })

  const windowSizeHelper = () => {
    setWindowSize({
      height: Math.floor(window.innerHeight / 20) + 1,
      width: Math.floor(window.innerWidth / 20) + 1
    })
  }

  const gridCreator = (height = 0, width = 0) => {
    const xArray = []
    const yArray = []

     for (let i = 0; i < windowSize.width; i++) {
       console.log("looped y")
       yArray.push({ node: true })
     }

     for (let i = 0; i < windowSize.height; i++) {
      console.log("looped x")
      xArray.push({ node: true })
    }
    
     setGrid({
      ...grid,
      horizontalGrid: xArray,
      verticalGrid: yArray
    })
  }

  const loadingAnim = () => {
    anime({
      targets: '.stagger-grid .el',
      scale: [
        {value: 0, easing: 'easeOutSine', duration: 500},
        // {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(50, { 
        grid: [
          Math.floor(window.innerWidth / 20) - 1, 
          Math.floor(window.innerHeight / 20) - 1
        ], from: 'center' })
    }).finished.then(() => {
      props.updatePageInit()
      document.querySelector('.grid').remove();
    })
  }

  useEffect(() => {
    windowSizeHelper()
  }, [])

  useEffect(() => {
    if(windowSize.width > 0) {
      gridCreator(windowSize.height, windowSize.width)
    }
  }, [windowSize.height, windowSize.width])

  useEffect(() => {
    setTimeout(() => {
      loadingAnim()
    }, 2000);
  }, [])

  return (
    <LoadContainer className='stagger-grid'>
      <Grid className='grid'>
        {windowSize.width && windowSize.height > 0 ? grid.verticalGrid.map(node => {
          return grid.horizontalGrid.map((node, index) => (<Square key={index} className={'small square el'} />))
        }) : null}
      </Grid>
      {/* <button onClick={() => Loading()}>Init</button> */}
    </LoadContainer>
  )
}

export default StartPortfolio
