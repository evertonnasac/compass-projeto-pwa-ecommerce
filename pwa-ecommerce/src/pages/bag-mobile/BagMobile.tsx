import styled from "styled-components"
import { ContainerBack } from "../../components/mobile/HeaderBack"
import { useContext, useEffect } from "react"
import { Context } from "../../Contexts/ContexBag"
import { CardBagMobile } from "./CardBagMobile"
import { OrderSumary } from "../../components/sumary/OrderSumary"
import { Button } from "../../components/buttons/Button"
import typography from "../../UI/typography"
import { colours } from "../../UI/colours"


const StyleContainer = styled.section`  
    width: 100% ;
    max-width: 899px ;
    margin-bottom: 100px;
`

const ContainerCard = styled.div`  
    width: 95%;
    margin: 10px auto ;

    .container_controls_bag{
        width: 100% ;

        span{
            width: 50% ;
        }
    }
    
`

const ContainerSumary = styled.div`  
    width: 90% ;
    margin: 50px auto;
` 

const ContainerBotton = styled.div`  
    width: 100% ;
    height: 85px ;

    display: flex ;
    align-items: center ;
    justify-content: space-evenly ;

    position: fixed ;
    bottom: 0 ;
    background-color:#fff ;

    .total{

        .total_title{
            font-size: ${typography.captiomM12.fontSize} ;
            color : ${colours.low_emphasis}
        }
        .total_value{
            font-size: ${typography.paragraphR16.fontSize} ;

        }
       
    }

`


export const BagMobile = () => {

    const {currentBag, setBag, getBag, setCurrentBag} = useContext(Context)
    
    useEffect(() => {
        setCurrentBag(getBag())


    },[])

    let subtotal =  Number (currentBag.products.reduce((acc, {price, rebate, qte}) => 
    price && rebate && qte ?  acc + ((price  * rebate /100) * qte) : price? price : acc, 0)).toFixed(2)




    return (
        <StyleContainer>
            <ContainerBack title="My Bag" />
            {currentBag.products.map((item, index) => {
                return <ContainerCard key={index}>
                            <CardBagMobile
                                _id={item._id}
                                brand={item.brand}
                                description={item.description}
                                price={item.price}
                                qte={item.qte}
                                rebate={item.rebate}
                                urlPhoto={item.urlPhoto}
                            />
                       </ContainerCard>
            })}

            <ContainerSumary>
                <OrderSumary bagCurrent={currentBag} screen = "mobile"/>
            </ContainerSumary>
            <ContainerBotton>
                <div className="total">
                    <p className="total_title">Total Bag Amount</p>
                    <p className="total_value">${subtotal}</p>
                </div>
                <Button type="primary" width="55%" height="50%">Place Order</Button>
            </ContainerBotton>
        </StyleContainer>
    )
}