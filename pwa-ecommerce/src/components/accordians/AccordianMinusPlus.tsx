import { ReactNode, useState } from "react";
import styled from "styled-components";
import iconMinus from "../../../public/icons/plus.png"
import iconPlus from "../../../public/icons/minus.png"



interface PropsContainer{
    show : boolean
}

const ContainerAccordian = styled.div<PropsContainer>` 

    width: 100% ;
    height: ${props => props.show? "auto" : "48px"};
    max-height : ${props => props.show? "500px" : "48px"};
    overflow: hidden;

    transition: all 0.8s ease-in-out ;

`

const TitleAccordian = styled.div` 

    width: 100% ;
    height: 48px ;

    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    box-sizing: border-box ;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12); 
    cursor: pointer;


`

interface AccordianProp {
    title: string,
    children: ReactNode
}

export const AccordianMinusPlus = (props : AccordianProp) => {

    const [show, setShow] = useState(false)

    return (
        <ContainerAccordian show = {show? true : false}>
            <TitleAccordian onClick = {() => setShow(!show)}>
                <span> {props.title} </span>
                <img src = {show ? iconPlus : iconMinus} />
            </TitleAccordian>
            {props.children}
        </ContainerAccordian>
    )
}