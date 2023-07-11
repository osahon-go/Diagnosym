import Styled from "styled-components";
import * as T from "../Theme"

export const Form = Styled.form`
    margin: 40px 0;
`;
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
