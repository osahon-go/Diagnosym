import Styled from 'styled-components'
import { Container } from '../Style'

export const AboutBg = Styled(Container)`
    position: relative;
    width: 100%;
    height: 500px;
    margin-top: 50px;
    padding: 100px 50px;
    display: flex;
    justify-content: center;
`
export const CardHolder = Styled.div`
    width: 85%;
    background-color: grey;
`

export const CardUl = Styled.ul`
    position: relative;
    width: 100%;
    list-style: none;
    background-color: blue;
    padding: 0;
`

export const CardLi = Styled.li`
    display: inline-block;
    background-color: red;
    width: 200px;
`