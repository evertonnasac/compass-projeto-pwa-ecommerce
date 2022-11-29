import styled from "styled-components";
import typo from "../../UI/typography"
import {colours} from "../../UI/colours"

interface Prop{
    open: boolean
}

const Container = styled.div<Prop>` 
    position: fixed ;
    top: 0;
    width: 99.6vw ;
    height: 100vh ;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props => props.open ? "block" : "none"} ;
    z-index: 100 ;
    overflow: hidden ;

`

const Content = styled.div` 
    width: 99% ;
    position: absolute ;
    top: 0 ;
    height: 0;
    
    background-color: white ;
    box-sizing: border-box ;
    padding: 2% 2% ;
`

