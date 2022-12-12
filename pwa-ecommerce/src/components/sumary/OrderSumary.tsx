import styled from "styled-components";
import typo from "../../UI/typography"
import {colours} from "../../UI/colours"



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
    subtotal: number,
    discount: number,
    deliveryfee: number,
    screen: "desktop" | "mobile"
}

export const OrderSumary = ({subtotal, discount, deliveryfee, screen} : PropsSumary) =>{
    return(
        <Container screen={screen}>
            <p className="title">Order Sumary</p>
            <div className="container_info">
                <section className="content">
                    <span className="key">Sub Total</span>
                    <span className="value">${subtotal}</span>
                </section>
                <section className="content">
                    <span className="key">Discount</span>
                    <span className="value">${discount}</span>
                </section>
                <section className="content">
                    <span className="key">Delivery Fee</span>
                    <span className="value">${deliveryfee}</span>
                </section>
                 <section className="content">
                    <span className="key_grand">Grand Total</span>
                    <span className="value_gran">${(subtotal - discount) + deliveryfee}</span>
                </section>
            </div>
        </Container>
    )
}