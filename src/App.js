import React, { useState } from 'react';
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
    theme === 'lightmode' ? setTheme('darkmode') : setTheme('lightmode')
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <MainContainer>
        <Navbar />
        <button onClick={themeSelector} >THEME</button>

        <LandingPage />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;