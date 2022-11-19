import styled from "styled-components";
import lupa from "../../../public/icons-header/lupa.png"
import { colours } from "../../UI/colours";

const Container = styled.div` 
    width: 60%;
    height: 50% ;
    position: relative;

    img{
        width: 20px ;
        height: 20px ;
        position: absolute ;
        left: 5px;
        top: 10px;

    }

    input {
        width: 100% ;
        height: 100% ;
        padding-left: 35px ;
        background-color: ${colours.grey} ;
        border-style: none ;
        outline: none ;
    }
`

export const ContainerSearch = () =>{
    return (
        <Container>
            <img src= {lupa} alt="Lupa"/>
            <input type="search" name="search" id="search_header" />
        </Container>
    )
}