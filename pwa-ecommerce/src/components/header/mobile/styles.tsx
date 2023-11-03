import styled from "styled-components";

export const StyleAppBarMobile = styled.header` 
    width : 100%;
    height: 56px ;
    display: none ;
    align-items: center ;
    justify-content: space-evenly ;
    background-color: ${({theme}) => theme.colours.white} ;

    img{
        width: 17px;
        height: 17px ;
        cursor: pointer;
    }

    span {
        width: 50%;
        height: 56px ;
        line-height: 56px ;
        color:  ${({theme}) => theme.colours.primary} ;

    }

    @media (max-width: 1000px) {
        display: flex;
    }

`

export const StyleMenuLateral = styled.nav<{open : boolean}>`
    position: absolute;
    height: 350px;
    width: 20px;
    left: ${props => props.open ? "0px" : "-105px"};
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ItensMenu = styled.p`
    color : red
`