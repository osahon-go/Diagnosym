import Styled from 'styled-components'
import { BiRefresh } from 'react-icons/bi'
import { Button } from '../Style'
import * as T from "../Theme"
import { Link } from 'react-router-dom'

export const SymptomsMask = Styled.div`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${props => props.theme.name === "light" ? T.bdr_grey : T.bdr_dgrey};
`

export const SymptomsArea = Styled.div`
    width: 103%;
    position: relative;
    max-height: 250px;
    overflow-y: scroll;
    background-color: ${props => props.theme.name === "light" ? T.bg_light : T.txt_dark};
    padding: 15px;
    border-radius: 10px;
`
export const SymptomsPills = Styled.div`
    padding: 5px 10px;
    display: inline-block;
    background-color: ${props => props.theme.name === "light" ? T.txt_light : T.txt_dark};
    border-radius: 10px;
    border: 1px solid ${props => props.theme.name === "light" ? T.bdr_grey : T.bdr_dgrey};
    transition: padding 0.35s ease;
    cursor: pointer;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};

    &:hover {
        background-color: red;
        padding: 10px 15px;
        color: #fff;
    }
`
export const SelectedMask = Styled(SymptomsMask)`
    margin-top: 10px;
`

export const LaunchNlp = Styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: ${T.txt_header}
`

export const SelectedArea = Styled(SymptomsArea)`

    position: relative;
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
    position: absolute;
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