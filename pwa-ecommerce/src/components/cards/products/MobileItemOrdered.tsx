import styled from "styled-components";
import { borderRadiusCards } from "../styles-cards-default";
import  typography from "../../../UI/typography"
import {StyleContainer} from "../ProductAny"
import imgProduct from "../../../../public/images/product/product-store2.png"
import { Button } from "../../buttons/Button";


export const StyleItemOrdered = styled.div`

    width: 100%;
    height: 100% ;
    display: flex ;
    gap: 2px;

    img{
        width: 40% ;
        height: 100% ;
        border-radius: ${borderRadiusCards} ;
    }

    span{

        .category{
            font-size: ${typography.paragraphS12.fontSize};
            font-weight: ${typography.paragraphS12.fontWeight };
        }
        .description, .qtd{
            font-size: ${typography.paragraphM12.fontSize};
            font-weight: ${typography.paragraphM12.fontWeight };
        }

        .price {
            font-size: ${typography.headingS14.fontSize};
            font-weight: ${typography.headingS14.fontWeight };
        }

        .btn-add{
            display: block ;
            align-self: flex-end;
        }

        .stepper, .close {
            display: none
        }
    }

    
`

export const MobileItemOrdered = () =>{
    return (
        <StyleContainer>
            <StyleItemOrdered>
                <img src= {imgProduct} alt="Foto do produto" />
                <span>
                <p className="category">PRADA</p>
                <p className="description">Leather Coach Bag</p>
                <p className="price">$54.69</p>
                <p className="qtd">Qty- 1</p>
                <p className="close">X</p>
                <Button className = "btn-add" 
                    type="outline" 
                    width="80%" height="25%">
                    Add to bag
                </Button>
                </span>
            </StyleItemOrdered>
        </StyleContainer>
    )     
}