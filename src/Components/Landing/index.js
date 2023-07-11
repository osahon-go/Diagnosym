import React from 'react'
import { useSelector } from 'react-redux'

// General Styling
import * as S from "../Style"
import { ThemeProvider } from 'styled-components'

// Components
import Navbar from '../Navbar/Index'
import { Wrapper } from './LandingElements'
import Slide from '../Slide.js/Index'
import About from '../About/Index'

function Landing() {
    const { themeConfig } = useSelector((state) => state.themes)

  return <>
  <ThemeProvider theme={themeConfig}>
    <Wrapper>
        <Navbar></Navbar>
        <Slide></Slide>
        {/* <About></About> */}
    </Wrapper>
    </ThemeProvider>
  </>
}

export default Landing