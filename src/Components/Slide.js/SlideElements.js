import Styled from 'styled-components'

export const SlideBg = Styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    padding: 50px;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        padding: 30px 30px 100px 30px;
        text-align: justify;
    }
`

export const BgLeft = Styled.div`
    position: relative;
    flex: 1;

    @media (max-width: 768px){
        margin-top: 20px;
    }
`
export const BgRight = Styled.div`
    position: relative;
    flex: 1.5;
    //display: flex;

    @media (max-width: 768px){
        margin-top: 20px;
    }
`

export const SlideSvg = Styled.img`
    width: 100%;
`