import Styled from "styled-components";
import * as T from "../Theme"

export const ListUl = Styled.ul`
    margin-top: 40px;
    padding-left: 15px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.name === "light" ? T.txt_dark : T.txt_light};
`; 
export const ListLi = Styled.li`
    margin-bottom: 10px;
`;

export const LineSubject = Styled.p`
    font-weight: bold;
    margin-bottom: 10px;
`;
export const LineBody = Styled.span`
`;
