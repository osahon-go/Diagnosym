import React from "react";
import { useSelector } from 'react-redux'

// General Styling
import * as S from "../Style";

// Styled Components
import { SubjectLink } from "./StartElements";
import {
  ListUl,
  ListLi,
  LineSubject,
  LineBody,
} from "../Emergency/EmergencyElements";
import { ThemeProvider } from "styled-components";

// images 
import symbol from "../../images/stetoscope.png"

function Start() {
  const { themeConfig } = useSelector((state) => state.themes)
  return (
    <>
    <ThemeProvider theme={themeConfig}>
      <S.Container>
        <S.Wrapper>
          <S.Stetoscope src={symbol} />
          <S.Return to={"/start"} replace={true}>Go Back</S.Return>
          <S.Header>Select Body Region</S.Header>
          <S.Statement>
            Please select the specific body part that is affected by the
            symptom.
          </S.Statement>
          <ListUl>
            <ListLi>
              <LineSubject>
                <SubjectLink to={"/select-category/Head, face and neck"} replace={true}>
                  Head, face and neck
                </SubjectLink>
              </LineSubject>
              <LineBody>Includes eyes, ears, nose, mouth, and throat.</LineBody>
            </ListLi>
            <ListLi>
              <LineSubject>
              <SubjectLink to={"/select-category/Upper body"} replace={true}>
                Upper body
                </SubjectLink>
                </LineSubject>
              <LineBody>
                Includes chest, breasts and nipples, upper back, shoulders,
                arms, wrists, and hands.
              </LineBody>
            </ListLi>
            <ListLi>
              <LineSubject>
              <SubjectLink to={"/select-category/Stomach and sides"} replace={true}>
                Stomach and sides
                </SubjectLink>
                </LineSubject>
              <LineBody></LineBody>
            </ListLi>
            <ListLi>
              <LineSubject>
              <SubjectLink to={"/select-category/Lower body"} replace={true}>
                Lower body
                </SubjectLink>
                </LineSubject>
              <LineBody>
                Includes lower back, genitals, bottom, legs, and feet.
              </LineBody>
            </ListLi>
            <ListLi>
              <LineSubject>
              <SubjectLink to={"/select-category/Skin, hair and nails"} replace={true}>
                Skin, hair, and nails
                </SubjectLink>
                </LineSubject>
              <LineBody>
                Includes rashes, moles, bites and stings, small cuts, and grazes.
              </LineBody>
            </ListLi>
          </ListUl>
        </S.Wrapper>
      </S.Container>
      </ThemeProvider>
    </>
  );
}

export default Start;
