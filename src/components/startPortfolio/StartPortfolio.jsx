import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import './StartPortfolio.css'

const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
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
      height: Math.floor(window.innerHeight / 20) - 1,
      width: Math.floor(window.innerWidth / 20)
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
          Math.floor(window.innerWidth / 20), 
          Math.floor(window.innerHeight / 20) - 1
        ], from: 'center' })
    }).finished.then(() => props.updatePageInit())
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

  console.log("window size: ", windowSize.width, windowSize.height, grid);

  return (
    <LoadContainer className='stagger-grid'>
      <div className='grid'>
        {windowSize.width && windowSize.height > 0 ? grid.verticalGrid.map(node => {
          return grid.horizontalGrid.map((node, index) => (<div key={index} className={index % 2 === 0 ? 'small square el' : 'small square el'}></div>))
        }) : null}
      </div>
      {/* <button onClick={() => Loading()}>Init</button> */}
    </LoadContainer>
  )
}

export default StartPortfolio
