import styled from "styled-components";
import { colours } from "../../UI/colours";
import {Link} from "react-router-dom"



const ContainerNavHeader = styled.div` 
    width: 55%;
    max-width: 400px;
    display: flex ;
    justify-content: space-around ;
    color: ${colours.high_emphasis};
    font-weight: 500 ;
    line-height: 18px ;

    a, span {
        cursor: pointer;
    }

    a{
        color: ${colours.high_emphasis};
        text-decoration: none ;
    }

`

const itensNavHeader = [
    "Watches",
    "Skincare",
    "Jewellery",
    "Apparels"
]

export const NavHeader =  () => {
    return(
        <ContainerNavHeader>
             <Link to={"/category"}><span>Handbags</span></Link>
            {itensNavHeader.map((item, index) => <span key={index}>{item}</span>)}
        </ContainerNavHeader>
    )
}
