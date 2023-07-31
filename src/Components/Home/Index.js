import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

// Styled
import * as S from "../Style";

// image
import symbol from "../../images/stetoscope.png"

// Settings
import { PageSetup } from "../Setting";

function Home() {
  const { themeConfig } = useSelector((state) => state.themes);
  const ContainerHeight = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(()=>{
    PageSetup(ContainerHeight)
  },[])

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <S.Container ref={ContainerHeight}>
          <S.Wrapper>
            <S.Stetoscope src={symbol} />
          <S.Return to={"/"} replace={true}>Go Back</S.Return>
            <S.Header>Check Your Symptoms</S.Header>
            <S.Statement>
              If you are concerned about specific symptoms, we can provide
              guidance on the next steps you should take.
            </S.Statement>
            <S.ButtonLink to={"/emergency-check"} replace={true}>Start</S.ButtonLink>
          </S.Wrapper>
        </S.Container>
      <S.PolicyTag><S.PolicyLink to="/policy-statement">&#169; 2023 Privacy Statement</S.PolicyLink></S.PolicyTag>
      </ThemeProvider>
    </>
  );
}

export default Home;
