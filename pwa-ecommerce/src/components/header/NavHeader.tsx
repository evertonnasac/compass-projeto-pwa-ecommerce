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
    "Handbags",
    "Sunglass",
    "Skincare",
    "Jewellery",
    "Apparels"
]

export const NavHeader =  () => {
    return(
        <ContainerNavHeader>
            {itensNavHeader.map((item, index) =>   
                <Link to={"/category?name="+item}>
                    <span key={index}>{item}</span>
                </Link>)}
        </ContainerNavHeader>
    )
}
