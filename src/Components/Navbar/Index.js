import React from 'react'


// Styled components
import { NavbarContainer, NavbarLogo, NavbarMenu, NavbarLi, NavbarLink } from './NavbarElements'

function Navbar() {
  return <>
    <NavbarContainer>
        <NavbarLogo>LOGO</NavbarLogo>
        <NavbarMenu>
            <NavbarLi>
                <NavbarLink>Home</NavbarLink>
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