import Styled from 'styled-components'
import * as T from '../Theme'
import { Container } from '../Style'

export const StatementContainer = Styled(Container)`
    position: relative;
    height: auto;
    display: inline-block;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};
    text-align: justify;
    line-height: 30px;

    @media (max-width: 768px){
        
    }
`
export const PolicyStatement = Styled.div`
    position: relative;
    width: 100%;
    padding: 50px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 768px){
        padding: 50px 30px;
    }
`

export const MainTitle = Styled.h4`
    font-weight: bold;
`

export const SubTitle = Styled.h5`
    font-weight: bold;
    margin-top: 20px;
`

export const Paragraph = Styled.p``

export const ListItem = Styled.ul``

export const Items = Styled.li``