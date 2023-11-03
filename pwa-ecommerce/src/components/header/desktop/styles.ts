//import {StyleHeader} from "./StyleHeader"
import styled from "styled-components"

export const MainContainer = styled.header` 
    width: 98% ;
    height: 80px;
    margin: 0 auto ;
    display: flex ;
    justify-content: space-between;
    align-items: center ;

    @media (max-width: 1000px) {
        display: none;
    }

`

export const Logo = styled.div`
    width: 8% ;
    height: 25% ;

    a{
        width: 100% ;
        height: 100% ;
        text-decoration: none ;
    }

    img{
        width: 100% ;
        height: 100% ;
    }

`

export const ItemsMenuContainer = styled.div` 
    width: 55%;
    max-width: 400px;
    display: flex ;
    justify-content: space-around ;
    color: ${({theme}) => theme.colours.high_emphasis};
    font-weight: 500;
    line-height: 18px ;

    a, span {
        cursor: pointer;
    }

    a{
        color: ${({theme}) => theme.colours.high_emphasis};
        text-decoration: none ;
    }

`


export const SearchBar = styled.div` 
    width: 40%;
    height: 50% ;
    position: relative;

    img{
        width: 20px ;
        height: 20px ;
        position: absolute ;
        left: 5px;
        top: 10px;
        cursor: pointer;

    }

    input {
        width: 100% ;
        height: 100% ;
        padding-left: 35px ;
        background-color:  ${({theme}) => theme.colours.grey};
        border-style: none ;
        outline: none ;
    }
`


export const IconsContainer = styled.div` 

    width: 10% ;
    height: 30% ;
    display: flex;
    justify-content: space-between ;
    
    img{
        cursor: pointer;
    }
`

export const ContainMiddle = styled.section` 
    width: 80% ;
    height: 100% ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;

`
