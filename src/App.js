import React, { useState, useEffect } from 'react';
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

  font-family: 'Raleway'
`

function App() {
  const [theme, setTheme] = useState('light')
  const [pageInitilized, setPageInitilized] = useState(true)

  const themeSelector = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
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
        <Navbar />
        <LandingPage />
        {/* <button>About</button>
        <button onClick={themeSelector} >THEME</button> */}
        <About />
        <ProjectsWrapper />
      </MainContainer>
      ) : <StartPortfolio updatePageInit={updatePageInit} />}
      
    </ThemeProvider>
  );
}

export default App;