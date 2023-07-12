import Styled from 'styled-components'
import { Container } from '../Style'

export const Wrapper = Styled(Container)`
    display: inline-block;

    @media (max-width: 768px){
        height: auto;
    }
`