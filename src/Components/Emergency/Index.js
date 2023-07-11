import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

// General Styling
import * as S from "../Style";

// Styled Components
import { ListUl, ListLi, LineSubject, LineBody } from "./EmergencyElements";

function Emergency() {
  const { themeConfig } = useSelector((state) => state.themes)

  const theme = {
    status: "emergency"
  }

  return (
    <>
    <ThemeProvider theme={themeConfig}>
      <S.Container>
        <S.Wrapper>
          <S.Return to={"/start"} replace={true}>Go Back</S.Return>
          <ThemeProvider theme={theme}>
            <S.Header>Emergency Check</S.Header>
          </ThemeProvider>
          <S.Statement>
            If you have any of the following below, please call <b>999</b>?
          </S.Statement>
          <ListUl>
            <ListLi>
              <LineSubject>Signs of a stroke </LineSubject>
              <LineBody>
                Face dropping on one side, can’t hold both arms up, difficulty
                speaking. 
              </LineBody>
            </ListLi>
            <ListLi>
              <LineSubject>Signs of a heart attack </LineSubject>
              <LineBody>
                Chest pain, pressure, heaviness, tightness or squeezing across
                the chest.
              </LineBody>
            </ListLi>
            <ListLi>
              <LineSubject>Difficulty breathing </LineSubject>
              <LineBody>
                Struggling to get words out, choking or gasping.
              </LineBody>
            </ListLi>
            <ListLi>
              <LineSubject>Severe injuries</LineSubject>
              <LineBody>After a serious accident.</LineBody>
            </ListLi>
          </ListUl>
          <S.ButtonLink to={"/necessary-details"} replace={true}>
            I don't have any
          </S.ButtonLink>
        </S.Wrapper>
      </S.Container>
      </ThemeProvider>
    </>
  );
}

export default Emergency;
