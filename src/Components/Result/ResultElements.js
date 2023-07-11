import Styled from 'styled-components'

export const SubHeading = Styled.p`
    margin-top: 20px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.name === "light" ? "#000" : "#fff"};
`

export const Restart = Styled.span`
    margin-left: 480px;
    font-size: 16px;
    color: ${props => props.theme.name === "light" ? "#000" : "#fff"};
    cursor: pointer;
`