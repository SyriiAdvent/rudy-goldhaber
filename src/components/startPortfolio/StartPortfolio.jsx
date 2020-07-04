import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import './StartPortfolio.css'

const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
`


const StartPortfolio = () => {
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
      height: Math.floor(window.innerHeight / 20),
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

  const Loading = () => {
    // anime({
    //   targets: 'staggering-grid-demo .el',
    //   scale: [
    //     {value: .1, easing: 'easeOutSine', duration: 500},
    //     {value: 1, easing: 'easeInOutQuad', duration: 1200}
    //   ],
    //   delay: anime.stagger(200, {grid: [windowSize.width, windowSize.height], from: 'center'})
    // });

    anime({
      targets: '.grid .el',
      rotate: '1turn'
    });
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
      anime({
        targets: '.grid .el',
        scaleX: 1.2,
        scaleY: 1.2,
        backgroundColor: '#000',
        duration: 1000,
        zIndex: 20
        
      }).finished.then(() => {
        anime({
          targets: '.grid .els',
          scaleX: 0,
          scaleY: 0,
          rotate: '1turn',
          duration: 2000,
          easing: 'linear'
        })
        .finished.then(() => {
          anime({
            targets: '.grid .el',
            scaleX: 0,
            scaleY: 0,
            rotate: '1turn',
            duration: 2000,
            easing: 'linear'
          })
        })
      })
      // anime({
      //   targets: '.grid .el',
      //   scaleX: 0,
      //   scaleY: 0,
      //   rotate: '1turn',
      //   duration: 2000,
      //   easing: 'linear'
      // })
      // .finished.then(() => {
      //   anime({
      //     targets: '.grid .els',
      //     scaleX: 0,
      //     scaleY: 0,
      //     rotate: '1turn',
      //     duration: 2000,
      //     easing: 'linear'
      //   });
      // })

    }, 1500);
  }, [])

  console.log("window size: ", windowSize.width, windowSize.height, grid);

  return (
    <LoadContainer>
      <div className='grid'>
        {windowSize.width && windowSize.height > 0 ? grid.verticalGrid.map(node => {
          return grid.horizontalGrid.map((node, index) => (<div className={index % 2 === 0 ? 'small square els' : 'small square el'}></div>))
        }) : null}
      </div>
      {/* <button onClick={() => Loading()}>Init</button> */}
    </LoadContainer>
  )
}

export default StartPortfolio
