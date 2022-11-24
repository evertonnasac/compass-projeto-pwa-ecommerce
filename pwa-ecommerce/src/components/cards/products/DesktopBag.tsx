import styled from "styled-components";
import { borderRadiusCards } from "../styles-cards-default";
import  typography from "../../../UI/typography"
import {StyleContainer} from "../ProductAny"
import { Stepper } from "../../stepper/Stepper";
import imgProduct from "../../../../public/images/product/product-store2.png"


 const StyleBagDesktop = styled.div`

    width: 100%;
    height: 100%;

    display: flex ;
    gap: 2px;

    img{
        width: 30% ;
        height: 66% ;
        border-radius: ${borderRadiusCards} ;
    }

    span{
        position: relative;

        .description, .category{
            font-size: ${typography.paragraphR16.fontSize};
            font-weight: ${typography.paragraphR16.fontWeight};
        }


        .price, .qtd, .close {
            font-size: ${typography.paragraphR16.fontSize};
            font-weight: ${typography.paragraphR16.fontWeight };
        }

        .close {
            position: absolute;
            right: 0;
            top: 0 ;
        }

        .btn-add, .price {
            display: none;
        }

    }

`
export const BagDesktop = () =>{
    return (
        <StyleContainer>
            <StyleBagDesktop>
                    <img src= {imgProduct} alt="Foto do produto" />
                    <span>
                    <p className="category">PRADA</p>
                    <p className="description">Leather Coach Bag</p>
                    <p className="price">$54.69</p>
                    <p className="qtd">Qty- 1</p>
                    <p className="close">X</p>
                    <Stepper className = "stepper"/>
                </span>
            </StyleBagDesktop>
        </StyleContainer>
    )     
}