import styled from "styled-components";
import { borderRadiusCards } from "../styles-cards-default";
import  typography from "../../../UI/typography"
import {StyleContainer} from "../ProductAny"


export const MobileItemOrdered = styled(StyleContainer)`

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