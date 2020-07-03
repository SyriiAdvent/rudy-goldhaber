import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/themeUtils/GlobalStyles'
import { lightTheme, darkTheme } from './components/themeUtils/Theme'
import Navbar from './components/navigation/Navbar';
import LandingPage from './components/landing/LandingPage';

const MainContainer = styled.div`
  margin: 0;
  width: 100%;
`

function App() {
  const [theme, setTheme] = useState('light')

  const themeSelector = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const osThemeHelper = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }

  useEffect(() => {
    osThemeHelper()
  }, [])

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <MainContainer>
        <Navbar />

        <LandingPage />
        <button>About</button>
        <button onClick={themeSelector} >THEME</button>

        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
        <h3>F I L L E R</h3>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;