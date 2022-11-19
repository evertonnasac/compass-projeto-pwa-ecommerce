import styled from "styled-components";
import { colours } from "../../UI/colours";


const ContainerNavHeader = styled.div` 
    width: 80%;
    display: flex ;
    justify-content: space-around ;
    color: ${colours.high_emphasis};
    font-weight: 500 ;
    line-height: 18px ;

    span {
        cursor: pointer;
    }

`

const itensNavHeader = [
    "Handbags",
    "Watches",
    "Skincare",
    "Jewellery",
    "Apparels"
]

export const NavHeader =  () => {
    return(
        <ContainerNavHeader>
            {itensNavHeader.map(item => <span>{item}</span>)}
        </ContainerNavHeader>
    )
}
