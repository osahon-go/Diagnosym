import Styled from 'styled-components'
import * as T from '../Theme'

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
`
export const NavbarLogo = Styled.div``

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
`
export const NavbarLink = Styled.p`
    line-height: 68px;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};
`
export const MobileMenu = Styled.div``