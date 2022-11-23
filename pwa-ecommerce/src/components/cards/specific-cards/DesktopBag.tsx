import styled from "styled-components";
import { borderRadiusCards } from "../styles-cards-default";
import  typography from "../../../UI/typography"
import {StyleContainer} from "../ProductAny"



export const BagDesktop = styled(StyleContainer)` 

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