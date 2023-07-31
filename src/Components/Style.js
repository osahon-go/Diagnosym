import Styled from "styled-components";
import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg"
import * as T from "./Theme"

export const ThemeButton = Styled(CgDarkMode)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.theme.name === "light" ? "#000" : "#fff"};

    @media (max-width: 768px){
        top: 23px !important;
        position: absolute;
    }
`
export const Stetoscope = Styled.img`
    position: absolute;
    width: 0px; // Hidden
    right: 20px;
    top: 20px;

    @media (max-width:768px){
    }
`

export const Container = Styled.div`
    background-color: ${props => props.theme.name === "light" ? T.bg_light : T.bg_dark};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        position: relative;
        height: ${props => props.theme.heightStatus === 1 ? "auto" : props.theme.screenHeight};
        display: inline-block;
    }
`

export const Wrapper = Styled.div`
    position: relative;
    width: 700px;
    padding: 30px;
    border: 1px solid ${T.bdr_grey};
    border-radius: 10px;

    @media (max-width: 768px){
        width: 100%;
        margin: 0 auto;
        border: none;
        padding-top: 20px;
    }
`

export const Header = Styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: ${(props) => (props.theme.status === "emergency" ? T.txt_emergency : props.theme.name === "light" ? T.txt_dark : T.txt_header)};
    
    @media (max-width: 768px){
        margin-top: 50px;
    }
`

export const Statement = Styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};

    @media (max-width: 768px){
        line-height: 30px;
    }
`

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
`

export const LinkTag = Styled(Link)`
    color: ${T.txt_light};
`

export const Return = Styled(Link)`
    display: inline-block;
    margin-bottom: 20px;
    text-decoration: none;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};
`

export const PolicyLink = Styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_header};
    cursor:pointer;
`

export const PolicyTag = Styled.div`
    position: "relative";
    width: 100%;
    padding: 20px 0; 
    text-align: center;
    background-color: ${props => props.theme.name === "light" ? T.bg_light : T.bg_dark};
`
