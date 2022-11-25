import { ReactNode, useState } from "react";
import styled from "styled-components";
import iconArrow from "../../../public/icons/arrow-show-hidden.png"

interface PropsContainer{
    show : boolean
}

const ContainerAccordian = styled.div<PropsContainer>` 

    width: 100% ;
    height: ${props => props.show? "auto" : "48px"};
    max-height : ${props => props.show? "800px" : "48px"};
    overflow: hidden;

    transition: max-height 0.8s ease-in-out ;

`

const TitleAccordian = styled.div` 

    width: 100% ;
    height: 48px ;

    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    cursor: pointer;

    .show{
        transform: rotateX(180deg) ;
    }

    .up{
        transform: rotateX(180deg) ;
    }

    img {
        transition: 0.2s ease-in-out ;
        
    }

`

interface AccordianProp {
    title: string,
    children: ReactNode
}

export const AccordianShowHidden = (props : AccordianProp) => {

    const [show, setShow] = useState(false)
    const [clicked, setCliecked] = useState(false)

    const rotateImage = () => {
        setShow(!show)
        !clicked && setCliecked(true)  
    }

    return (
        <ContainerAccordian show = {show? true : false}>
            <TitleAccordian onClick = {() => rotateImage()}>
                <span> {props.title} </span>
                <img className= {show && clicked ? "up" : "down"} src = {iconArrow} />
            </TitleAccordian>
            {show && props.children}
        </ContainerAccordian>
    )
}