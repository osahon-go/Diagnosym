import Styled from 'styled-components'
import { SymptomsArea } from '../Symptoms/SymptomsElements'
import { Container } from '../Style'
import * as T from "../Theme"

export const ResultContainer = Styled(Container)`
    align-items: normal;
    height: auto;
    padding: 50px 0;
`

export const SubHeading = Styled.p`
    margin-top: 20px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.name === "light" ? "#000" : "#fff"};
`

export const Restart = Styled.span`
    margin-left: 470px;
    font-size: 16px;
    color: ${props => props.theme.name === "light" ? "#000" : "#fff"};
    cursor: pointer;

    @media (max-width: 768px){
        margin-left: 20px;
    }
`
export const Symptoms = Styled(SymptomsArea)`
    overflow: hidden;
    border-radius: 0;
    margin-bottom: 20px;
    background-color: ${props => props.theme.name === "light" ? "#f9f9f9" : "#2c3034"};
    border: 1px solid ${props => props.theme.name === "light" ? T.bdr_grey : "#373b3e"};
    color: ${props => props.theme.name === "light" ? "#000" : "#fff"};
`

export const Comments = Styled(Symptoms)``