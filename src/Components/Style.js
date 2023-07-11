import Styled from "styled-components";
import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg"
import * as T from "./Theme"

export const ThemeButton = Styled(CgDarkMode)`
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.theme.name === "light" ? "#000" : "#fff"};
`

export const Container = Styled.div`
    background-color: ${props => props.theme.name === "light" ? T.bg_light : T.bg_dark};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = Styled.div`
    width: 700px;
    padding: 30px;
    border: 1px solid ${T.bdr_grey};
    border-radius: 10px;
`;

export const Header = Styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: ${(props) => (props.theme.status === "emergency" ? T.txt_emergency : props.theme.name === "light" ? T.txt_dark : T.txt_header)}
`;

export const Statement = Styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};
`;

export const Button = Styled.button`
    text-decoration: none;
    display: inline-block;
    margin-top: 50px;
    background-color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_header};
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    color: ${props => props.theme.name === "light" ? T.txt_light : T.txt_light};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;    
`

export const ButtonLink = Styled(Link)`
    text-decoration: none;
    display: inline-block;
    margin-top: 50px;
    background-color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_header};
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    color: ${props => props.theme.name === "light" ? T.txt_light : T.txt_light};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;  
`;

export const LinkTag = Styled(Link)`
    color: ${T.txt_light};
`;

export const Return = Styled(Link)`
    padding: 5px;
    display: inline-block;
    margin-bottom: 20px;
    text-decoration: none;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};;
`;
