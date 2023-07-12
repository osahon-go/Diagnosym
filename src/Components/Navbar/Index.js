import React from 'react'
import { useSelector } from "react-redux"

// Logo
import logo from "../../images/logo.png"
import logo_w from "../../images/logo_w.png"

// Styled components
import { NavbarContainer, NavbarLogo, NavbarMenu, NavbarLi, NavbarLink } from './NavbarElements'

function Navbar() {
    const { themeConfig } = useSelector((state) => state.themes)
  return <>
    <NavbarContainer>
        <NavbarLogo src={themeConfig.name === "light" ? logo : logo_w}></NavbarLogo>
        <NavbarMenu>
            <NavbarLi>
                <NavbarLink to={"/start"} replace={true}>App</NavbarLink>
            </NavbarLi>
            {/* <NavbarLi>
                <NavbarLink>About</NavbarLink>
            </NavbarLi>
            <NavbarLi>
                <NavbarLink>
                    Contact
                </NavbarLink>
            </NavbarLi> */}
        </NavbarMenu>
    </NavbarContainer>
  </>
}

export default Navbar