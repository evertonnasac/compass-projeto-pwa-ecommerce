import styled from "styled-components"
import {StyleItemOrdered}  from "./MobileItemOrdered"
import { StyleContainer } from "../ProductAny"
import imgProduct from "../../../../public/images/product/product-store2.png"

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
export const MobileItemSheet = () =>{
    return (
        <StyleContainer>
            <StyleItemOrdered>
                <StyleMobileItemSheet>
                    <img src= {imgProduct} alt="Foto do produto" />
                    <span>
                        <p className="category">PRADA</p>
                        <p className="description">Leather Coach Bag</p>
                        <p className="price">$54.69</p>
                        <p className="qtd">Qty- 1</p>
                        <p className="close">X</p>
                    </span>
                </StyleMobileItemSheet>
            </StyleItemOrdered>
        </StyleContainer>
    )     
}