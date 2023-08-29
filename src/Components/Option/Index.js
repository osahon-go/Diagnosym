import React from 'react'
import { useSelector } from 'react-redux'

// General styling
import * as S from '../Style'
import { ThemeProvider } from 'styled-components'
import { LineBody, LineSubject, ListLi, ListUl } from '../Emergency/EmergencyElements'
import { SubjectLink } from '../Select/StartElements'

function Option() {
  const { themeConfig } = useSelector((state) => state.themes)

  return <>
    <ThemeProvider theme={themeConfig}>
    <S.Container>
      <S.Wrapper>
          <S.Return to={"/start"} replace={true}>Go Back</S.Return>
          <S.Header>
            Choose an option
          </S.Header>
          <S.Statement>
            
          </S.Statement>
          <ListUl>
            <ListLi>
              <LineSubject>
                <SubjectLink to={"/select-category"} replace={true}>
                Common Symptoms Selector
                </SubjectLink>
              </LineSubject>
              <LineBody>
              If you know your symptoms, pick them from a list.
              </LineBody>
            </ListLi>
            <ListLi>
              <LineSubject>
                <SubjectLink to={"/describe-symptoms"} replace={true}>
                Symptom Description Assistant
                </SubjectLink>
                </LineSubject>
                <LineBody>
                Unsure about symptoms? Describe how you feel; we'll identify possible symptoms for you.
                </LineBody>
            </ListLi>
          </ListUl>
      </S.Wrapper>
    </S.Container>
    </ThemeProvider>  
  </>
}

export default Option