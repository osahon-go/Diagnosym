import React from 'react'
import { useSelector } from 'react-redux'

// General Styling
import { ThemeProvider } from 'styled-components'

// Styled components
import * as S from '../Style'

// Components
import Navbar from '../Navbar/Index'
import { Wrapper } from './LandingElements'
import Slide from '../Slide.js/Index'

function Landing() {
    const { themeConfig } = useSelector((state) => state.themes)

  return <>
  <ThemeProvider theme={themeConfig}>
    <Wrapper>
        <Navbar></Navbar>
        <Slide></Slide>
        
    </Wrapper>
      <S.PolicyTag><S.PolicyLink to="/policy-statement">&#169; 2023 Privacy Statement</S.PolicyLink></S.PolicyTag>
    </ThemeProvider>
  </>
}

export default Landing