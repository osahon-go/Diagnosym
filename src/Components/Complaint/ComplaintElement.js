import Styled from 'styled-components'
import * as T from '../Theme'
import { Button } from '../Style'
import { Refresh } from '../Symptoms/SymptomsElements'

export const Description = Styled.textarea`
    width: 100%;
    position: relative;
    max-height: 250px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.name === "light" ? T.bdr_grey : T.bdr_dgrey};
    padding: 15px;
    border-radius: 10px;
    outline: none;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};
`
export const SuggestBtn = Styled(Button)`
    margin: 5px 0 10px 0;
    width: 100%;
`
export const PossibleSymptoms = Styled.div`
    display: flex;
    flex-direction: rows;
    height: auto;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.name === "light" ? T.bdr_grey : T.bdr_dgrey};
    overflow: hidden;
    margin-bottom: 0;
`
export const RefreshBtn = Styled(Refresh)`
    position: relative;
`

export const Guide = Styled.p`
    padding: 5px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.name === "light" ? T.txt_dark : 'grey'};
`