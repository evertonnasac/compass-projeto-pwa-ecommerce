import { ReactNode, useState } from "react";
import styled from "styled-components";
import iconArrow from "../../../public/icons/arrow-goto.png"
import { colours } from "../../UI/colours";



interface PropsContainer{
    show : boolean
}

const ContainerAccordian = styled.div<PropsContainer>` 

    width: 100% ;
    height: ${props => props.show? "auto" : "50px"};
    overflow: hidden;
    transition: all 0.8s ease-in-out ;

    @media (max-width: 899px){
        height: ${props => props.show? "auto" : "80px"};
    }

`

const TitleAccordian = styled.div`
    width: 100% ;
    height: 50px ;
    display: flex ;
    justify-content: space-around;
    align-items: center ;
    background-color: ${colours.accent} ;
    margin-top: 10px ;
    cursor: pointer;

    .id_order{
        width: 40% ;
    }

    .date_order, .price_order{
        width: 15% ;
    }

    .status_order{
        width: 20% ;
    }

   
    img {
        width: 10px ;
        height: 20px ;
    }

    @media (max-width: 899px){
        position: relative ;
        flex-direction: column ;
        justify-content: center ;
        align-items: flex-start ;
        padding-left: 10px;
        height: 80px ;

        .status_order{
            display: none
        }

      
        .date_order{
            color : ${colours.low_emphasis}
        }

   

        img { 
            position: absolute ;
            transform: translateY(-50%) ;
            top: 50%;
            right: 10px;
        }
    }

`

interface AccordianProp {
    date: string,
    id_order : string | undefined
    price : number,
    status  : string
    children: ReactNode
}

export const AccordianOrder = (props : AccordianProp) => {

    const [show, setShow] = useState(false)

    return (
        <ContainerAccordian show = {show? true : false}>
            <TitleAccordian onClick = {() => setShow(!show)}>
                <div className="id_order">{props.id_order}</div>
                <div className="date_order">{props.date}</div>
                <div className="price_order">${props.price}</div>
                <div className="status_order">{props.status}</div>
                <img src={iconArrow} />
            </TitleAccordian>
            {props.children}
        </ContainerAccordian>
    )
}