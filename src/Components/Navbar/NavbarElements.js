import Styled from 'styled-components'
import * as T from '../Theme'
import { Link } from 'react-router-dom'

export const NavbarContainer = Styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    padding: 0 50px;
    background-color: ${props => props.theme.name === "light" ? T.bg_light : T.bg_dark};
    border-bottom: 1px solid ${props => props.theme.name === "light" ? T.bdr_grey : T.bdr_dgrey};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        padding: 0 30px;
    }
`
export const NavbarLogo = Styled.img`
    width: 200px;
    margin-left: -5px;

    @media (max-width: 768px){
        width: 130px;
        margin-top: 7px;
    }
`

export const NavbarMenu = Styled.ul`
    height: 100%;
    list-style: none;
    margin: 0;
`
export const NavbarLi = Styled.li`
    position: relative;
    height: 100%;
    padding: 0 15px;
    cursor: pointer;
    display: inline-block;
    transition: all 0.35s ease;

    &:hover {
        border-bottom: 5px solid ${props => props.theme.name === "light" ? T.bg_dark : T.txt_header};
    }

    @media (max-width: 768px){
        padding: 0 0;
    }
`
export const NavbarLink = Styled(Link)`
    text-decoration: none;
    line-height: 68px;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};

    @media (max-width: 768px){
        display: none;
    }
`
export const MobileMenu = Styled.div``