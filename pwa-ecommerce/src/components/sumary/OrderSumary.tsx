import styled from "styled-components";
import typo from "../../UI/typography"
import {colours} from "../../UI/colours"
import { IBag } from "../../Contexts/ContexBag";



interface Prop {
    screen: "mobile" | "desktop"
}

const Container = styled.div<Prop>` 
    width: 100%auto;
    height: 100% ;

    .title {
        font-size: ${props => props.screen == "desktop" ? typo.headingS20.fontSize : typo.headingS14.fontSize} ;
        font-weight: ${props => props.screen == "desktop" ? typo.headingS20.fontWeight : typo.headingS14.fontWeight};
        border-bottom: 1px solid rgba(0, 0, 0, 0.12) ;
    }

    .content {
        width: 100%auto;
        height: 100% ;

        display: flex ;
        justify-content: space-between ;

        .key, .value {
            color: ${colours.low_emphasis} ;
            font-size: ${props => props.screen == "desktop" ? typo.paragraphR16.fontSize : typo.headingM14.fontSize} ;
            font-weight: ${props => props.screen == "desktop" ? typo.paragraphR16.fontWeight : typo.headingM14.fontWeight};     
        }

        .value {
            color: ${colours.high_emphasis} ;   
        }

        .key_grand, .value_grand{
            color: ${colours.high_emphasis} ;
            font-size: ${props => props.screen == "desktop" ? typo.paragraphR16.fontSize : typo.headingS14.fontSize} ;
            font-weight: ${props => props.screen == "desktop" ? typo.paragraphR16.fontWeight : typo.headingS14.fontWeight};
        }
    }



`

interface PropsSumary{
    bagCurrent : IBag
    screen: "desktop" | "mobile"
}

export const OrderSumary = ({bagCurrent, screen} : PropsSumary) => {

    let subtotal =  Number (bagCurrent.products.reduce((acc, {price, rebate, qte}) => 
        price && rebate && qte ?  acc + ((price  * rebate /100) * qte) : price? price : acc, 0)).toFixed(2)
    
        return(
        <Container screen={screen}>
            <p className="title">Order Datails</p>
            <div className="container_info">
                <section className="content">
                    <span className="key">Sub Total</span>
                    <span className="value">${subtotal}</span>
                </section>
                <section className="content">
                    <span className="key">Discount</span>
                    <span className="value">$0.00</span>
                </section>
                <section className="content">
                    <span className="key">Delivery Fee</span>
                    <span className="value">{bagCurrent.tax.toFixed(2)}</span>
                </section>
                 <section className="content">
                    <span className="key_grand">Grand Total</span>
                    <span className="value_gran">${Number (subtotal + bagCurrent.tax).toFixed(2)}</span>
                </section>
            </div>
        </Container>
    )
}