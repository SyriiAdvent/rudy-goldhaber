import React from 'react'
import styled from 'styled-components'
import ImageCard from './ImageCard'

const ProjectsContainer = styled.div`
  padding: 2rem 2rem;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProjectsWrapper = () => {
  return (
    <ProjectsContainer>
      <div style={{ width: '100%', height: '200px' }}>
      <ImageCard />
      </div>
      <div style={{ width: '100%', height: '200px', background: 'red' }}></div>
      <div style={{ width: '100%', height: '200px', background: 'red' }}></div>
    </ProjectsContainer>
  )
}

export default ProjectsWrapper