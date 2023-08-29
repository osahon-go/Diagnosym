import Styled from "styled-components";
import * as T from "../Theme"
import {GrCheckmark} from 'react-icons/gr'
import {HiX} from 'react-icons/hi'
import { Container } from "../Style";

export const InfoContainer = Styled(Container)`
    position: relative;
    height: auto;
    padding: 10px 0;
`

export const Form = Styled.form`
    margin: 40px 0 10px 0;
`;
export const InputLabel = Styled.label`
    font-family: 'Montserrat', sans-serif;
    margin: 10px 0;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};

    &:first-child {
        margin-top: 0;
    }
`
export const Input = Styled.input`
    min-width: 300px;
    padding: 10px;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    outline: none;
    margin-bottom: 10px;
    background-color: ${props => props.theme.name === "light" ? T.txt_light : T.txt_dark};
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};
`;
export const Select = Styled.select`
    min-width: 300px;
    padding: 10px;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    outline: none;
    margin-bottom: 10px;
    background-color: ${props => props.theme.name === "light" ? T.txt_light : T.txt_dark};
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};;
`;

export const Valid = Styled(GrCheckmark)`
    margin-left: 15px;
    font-size: 16px;
    color: #198754;
`

export const Invalid = Styled(HiX)`
`