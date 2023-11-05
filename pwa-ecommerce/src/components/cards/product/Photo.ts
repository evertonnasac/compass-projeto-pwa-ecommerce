import styled from "styled-components";

export const PhotoContainer = styled.div`
    width: 100%;
    height: 60%;
    position: relative;
`

export const StylePhoto = styled.img`
    width: 100%;
    height: 100%;
`

export const StyleBtnTrending = styled.div`

    width: 38%;
    min-width: 53px ;
    height: 10%;
    min-height: 18px ;

    position: absolute;
    border-radius: 4px ;

    right: 3.75% ;
    top: 3.81%;
    background-color: ${({theme}) => theme.colours.highlight} ;
    color:  ${({theme}) => theme.colours.white};

    text-align: center;
`


