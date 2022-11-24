import styled from "styled-components";
import { borderRadiusCards } from "./products/styles-cards-default"
import  typography from "../../UI/typography"
import {Button} from "../buttons/Button"
import {Stepper} from "../stepper/Stepper"
import { colours } from "../../UI/colours";
import imgProduct from "../../../public/images/product/product-store2.png"


export const StyleContainer = styled.div` 

    width: 100%;
    height: 120px ;

    p{
        margin : 0 0 0 2%
    }

    img{
        width: 20% ;
        height: 100% ;
        border-radius: ${borderRadiusCards} ;
    }

    span {
        width: 78% ;
        height: 100% ;

        .description, .qtd{
            color: ${colours.low_emphasis}
        }
        .category, .close{
            margin-top: 0;

        }

        display: flex;
        flex-direction: column ;
        align-items: flex-start ;
        justify-content: space-between ;
    }

`
const BagDesktop = styled(StyleContainer)` 

    width: 100%;
    height: 100% ;

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

const MobileItemOrdered = styled(StyleContainer)`

    width: 100%;
    height: 100% ;

     img{
        width: 45% ;
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

const MobileItemSheet = styled(MobileItemOrdered)` 

    width: 100%;
    max-height: 80px;

    span{
        .btn-add, .close, .stepper {
            display: none ;
        }
    }
`

const HtmlItens = 
    <>
        <img src= {imgProduct} alt="Foto do produto" />
        <span>
        <p className="category">PRADA</p>
        <p className="description">Leather Coach Bag</p>
        <p className="price">$54.69</p>
        <p className="qtd">Qty- 1</p>
        <p className="close">X</p>
        <Button className = "btn-add" type="outline" width="80%" height="25%">Add to bag</Button>
        <Stepper className = "stepper"/>
        </span>
    </>



interface Props {
    type: "Bag-Desktop" | "Mobile-Ordered" | "Mobile-Itemsheet"
}


export const ProductAny = ({type} : Props) => {
    if(type == "Bag-Desktop"){
        return (
           <BagDesktop>
                {HtmlItens}
            </BagDesktop>           
        )
    }

    else if(type == "Mobile-Itemsheet"){
        return (
            <MobileItemSheet>
               {HtmlItens}
            </MobileItemSheet>
        )
     
    }

    else if(type == "Mobile-Ordered"){
        return (
            <MobileItemOrdered>
                {HtmlItens}
            </MobileItemOrdered>
        )
       
    }
    return(
        <></>
    )
}

