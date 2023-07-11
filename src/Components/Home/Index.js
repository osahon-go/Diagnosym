import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

// Styled
import * as S from "../Style";

function Home() {
  const { themeConfig } = useSelector((state) => state.themes);

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <S.Container>
          <S.Wrapper>
          <S.Return to={"/"} replace={true}>Go Back</S.Return>
            <S.Header>Check Your Symptoms</S.Header>
            <S.Statement>
              If you are concerned about specific symptoms, we can assist
              guidance on the next steps you should take.
            </S.Statement>
            <S.ButtonLink to={"/emergency-check"} replace={true}>Start</S.ButtonLink>
          </S.Wrapper>
        </S.Container>
      </ThemeProvider>
    </>
  );
}

export default Home;
