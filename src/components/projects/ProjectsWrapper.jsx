import React from 'react'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FloatingProjectImg = styled.img`
  background-image: url('');
  
  /* Full height */
  height: 100%;

  /* Center and scale the image */
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`

const ProjectsWrapper = () => {
  return (
    <ProjectsContainer>
      <div style={{ width: '100%', height: '200px', background: 'red' }}>

      </div>
      <div style={{ width: '100%', height: '200px', background: 'red' }}></div>
      <div style={{ width: '100%', height: '200px', background: 'red' }}></div>
      <div style={{ width: '100%', height: '200px', background: 'red' }}></div>
    </ProjectsContainer>
  )
}

export default ProjectsWrapper