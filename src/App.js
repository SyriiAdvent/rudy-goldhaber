import React, { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/themeUtils/GlobalStyles'
import { lightTheme, darkTheme } from './components/themeUtils/Theme'
import Navbar from './components/navigation/Navbar';
import LandingPage from './components/landing/LandingPage';
import StartPortfolio from './components/startPortfolio/StartPortfolio';
import ProjectsWrapper from './components/projects/ProjectsWrapper';
import About from './components/aboutMe/About';

const MainContainer = styled.div`
  margin: 0;
  width: 100%;
  scroll-behavior: smooth;

  font-family: 'Raleway';
`

function App() {
  const [theme, setTheme] = useState('dark')
  const [pageInitilized, setPageInitilized] = useState(true)

  // Smooth Scrolling handlers
  const aboutRef = useRef()
  const projectsRef = useRef()
  const scrollToRef = (ref) => window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
  const scrollToAbout = () => scrollToRef(aboutRef)
  const scrollToProjects = () => scrollToRef(projectsRef)

  const themeSelector = () => {
    theme === 'light' ? setTheme('dark') : setTheme('dark')
  }

  const osThemeHelper = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }

  const updatePageInit = () => {
    setPageInitilized(true)
  }

  useEffect(() => {
    osThemeHelper()
  }, [])

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      { pageInitilized ? (
        <MainContainer>
        <Navbar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} />
        <LandingPage />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <ProjectsWrapper />
        </div>
      </MainContainer>
      ) : <StartPortfolio updatePageInit={updatePageInit} />}
      
    </ThemeProvider>
  );
}

export default App;