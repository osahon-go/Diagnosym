import Styled from 'styled-components'
import { BiRefresh } from 'react-icons/bi'
import { Button, LinkTag } from '../Style'
import * as T from "../Theme"

export const SymptomsArea = Styled.div`
    max-height: 250px;
    overflow: scroll;
    background-color: ${props => props.theme.name === "light" ? T.bg_light : T.txt_dark};
    padding: 15px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.name === "light" ? T.bdr_grey : T.bdr_dgrey};
`
export const SymptomsPills = Styled.div`
    padding: 5px 10px;
    display: inline-block;
    background-color: ${props => props.theme.name === "light" ? T.txt_light : T.txt_dark};
    border-radius: 10px;
    border: 1px solid ${props => props.theme.name === "light" ? T.bdr_grey : T.bdr_dgrey};
    transition: padding 0.6s ease;
    cursor: pointer;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};

    &:hover {
        background-color: red;
        padding: 10px 15px;
        color: #fff;
    }
`
export const SelectedArea = Styled(SymptomsArea)`
    position: relative;
    margin-top: 10px;
    transition: all 0.35s ease;
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};
`
export const AreaSymptoms = Styled.div`
    width:95%;
`
export const AreaRefresh = Styled.div`
    background-color: ${props => props.theme.name === "light" ? T.txt_light : T.txt_dark};
    position: relative;
    width:5%
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.35s ease;
`
export const SelectedPill = Styled.div`
    display: inline-block;
`

export const Refresh = Styled(BiRefresh)`
    padding: 5px;
    color: red;
    cursor: pointer;
    font-size: 30px !important;
`

export const Diagnose = Styled(Button)`
    font-size: 16px;
    margin-left: 10px;
    display: ${props => props.ready === "false" ? "none" : "inline-block"};
    transition: all 0.35s ease;
`