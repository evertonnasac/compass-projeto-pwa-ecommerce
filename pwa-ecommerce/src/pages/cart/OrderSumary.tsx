import styled from "styled-components";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import { Context, IBag } from "../../Contexts/ContexBag";
import { useContext, useEffect , useState} from "react";

const SumaryContainer = styled.section`  
    width: 100% ;

    p{
        margin: 5px 0 ;
    }
    
    .title{
        font-size: ${typography.headingS20.fontSize} ;
        font-weight: ${typography.headingS20.fontWeight} ;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12); ;
    }

    .content_info_sumary{
        display: flex ;
        justify-content: space-between ;

        .subtotal, .delivery, .discount {
            color: ${colours.low_emphasis} ;
        }
    }

`

export const OrderSumary = ({bagCurrent} : {bagCurrent : IBag}) => {

    let subtotal =  Number (bagCurrent.products.reduce((acc, {price, rebate, qte}) => 
        price && rebate && qte ?  acc + ((price  * rebate /100) * qte) : price? price : acc, 0)).toFixed(2)

    return (
        <SumaryContainer>
            <p className="title">Order Sumary</p>
            <div className="content_info_sumary subtotal">
                <p className="subtotal">Subtotal: </p>
                <p>${subtotal}</p>
            </div>
            <div className="content_info_sumary dicount">
                <p className="discount">Discount:</p>
                <p>$0.00</p>
            </div>
            <div className="content_info_sumary delivery">
                <p className="delivery">Tax:</p>
                <p>${bagCurrent.tax}</p>
            </div>
            <div className="content_info_sumary total">
                <p className="total">Grand Total:</p>
                <p>${Number (subtotal + bagCurrent.tax).toFixed(2)}</p>
            </div>
        </SumaryContainer>
    )
}