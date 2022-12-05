import styled from "styled-components"
import {StyleItemOrdered}  from "./MobileItemOrdered"
import { StyleContainer } from "../ProductAny"

export const StyleMobileItemSheet = styled.div` 

    display: flex ;
    gap: 2px;
    max-height: 75px;

    span{
        .btn-add, .close, .stepper {
            display: none ;
        }
    }
`

interface Props {
    _id : string | undefined,
    brand : string | undefined,
    description : string | undefined,
    price : number | undefined,
    qtd: number | undefined,
    urlImage : string | undefined
}

export const MobileItemSheet = (props : Props) =>{
    return (
        <StyleContainer>
            <StyleItemOrdered>
                <StyleMobileItemSheet>
                    <img src= {props.urlImage} alt="Foto do produto" />
                    <span>
                        <p className="category">{props.brand}</p>
                        <p className="description">{props.description}</p>
                        <p className="price">{props.price}</p>
                        <p className="qtd">Qty- {props.qtd}</p>
                    </span>
                </StyleMobileItemSheet>
            </StyleItemOrdered>
        </StyleContainer>
    )     
}