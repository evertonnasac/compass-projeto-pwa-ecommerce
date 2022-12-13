import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import {BagDesktop} from "../../cards/products/DesktopBag"
import { Context as ContextBag, IBag, ProductsBagInfo } from "../../../Contexts/ContexBag";
import tipograpy from "../../../UI/typography"
import {colours} from "../../../UI/colours"
import typography from "../../../UI/typography";
import {Button} from "../../buttons/Button"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"


interface Prop{
    open: boolean
}

const StyleContainer = styled.div<Prop>` 

    position: fixed ;
    width: 99% ;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100 ;
    display: ${props => props.open? "block" : "none"} ;
    

`

const Content = styled.div` 
    width: 35% ;
    height: 80% ;
    overflow-y: scroll ;
    background-color: white ;
    position: absolute ;
    top: 75px ;
    right: 15px ;
    display: flex;
    flex-direction: column ;
  
`

const ContainerProducts = styled.div`
    width: 100% ;
    padding: 2% ;
    box-sizing: border-box ;

    .back{
        color : ${colours.primary};
        border-style: none ;
        background-color: transparent ;
        height: 54px ;
        font-size: 18px ;
        font-weight: 600 ;
        width: 100% ;
        cursor: pointer;

    }

    .card_product{
        height: 150px ;
        box-sizing: border-box ;
        padding: 3%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
 
    }
`

const ContainerInfo = styled.div`
    width: 100% ;
    padding: 2% ;
    box-sizing: border-box ;

    .info {
        display: flex ;
        justify-content: space-between ;
        color : ${colours.high_emphasis};
        font-size: ${tipograpy.paragraphM12.fontSize} ;
        font-weight: ${tipograpy.paragraphR14.fontWeight} ;
        margin: 10px 0 ;
    }

    .total {
        font-size: ${tipograpy.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight} ;
    }

    .container_shop{
        text-align: center ;
        margin: 10px auto ;

        .link_shop{ 
            color: ${colours.primary}  ;
            font-weight: 600 ;
            font-size: 14px ;
            text-align: center ;
            text-decoration: underline ;
            cursor: pointer;
        }
    }


`

type ProductsBaginfo = {
    _id : string,
    brand: string,
    description: string
    qte : number,
    price : number,
    rebate: number,
    urlPhoto: string
}

export const BagModal = () => {

    const {currentBag, setCurrentBag, visible, setVisible, setBag} = useContext(ContextBag)
    const nav = useNavigate()


    const closedBag = () =>{
        setVisible(visible => !visible)
        setBag(currentBag)

    }

    if(visible){

        let subtotal =  Number (currentBag.products.reduce((acc, {price, rebate, qte}) => 
        price && rebate && qte ?  acc + ((price  * rebate /100) * qte) : price? price : acc, 0)).toFixed(2)
         
        return (
            <StyleContainer open = {visible}>
                <Content>
                    <ContainerProducts>
                        <div className="back" onClick={closedBag}>Back</div>
                        {currentBag.products.map((item : ProductsBagInfo, key : number) => {
                            return (
                                <div className="card_product" key={key}>
                                    <BagDesktop 
                                        _id= { item._id}
                                        brand = {item.brand}
                                        description = {item.description}
                                        price = {item.price}
                                        rebate = {item.rebate}
                                        qte = {item.qte}
                                        urlPhoto = {item.urlPhoto}
                                    />
                                </div>
                            )
                        })} 
                    </ContainerProducts>
                    <ContainerInfo>
                        <div className="subtotal info">
                            <span>Subtotal:</span>
                            <span>{subtotal}</span>
                        </div>
                        <div className="tax info">
                            <span>Tax:</span>
                            <span>${Number(currentBag.tax).toFixed(2)}</span>
                        </div>
                        <div className="total info">
                            <span>Total:</span>
                            <span>${Number(subtotal + currentBag.tax).toFixed(2)}</span>
                        </div>
                        <Button 
                        type={"primary"}
                        className="btn_next"
                        width="100%"
                        height="40px"
                        onclick={() => {
                            nav("/cart")
                            setVisible(false)}}>
                        Place Order
                    </Button> 
                    <div onClick={closedBag} className="container_shop"><Link to = "/" className="link_shop">Continue Shopping</Link></div>
                    </ContainerInfo>        
                </Content> 
            </StyleContainer>
        )
    }

    else{
        return(
            <div></div>
        )
    }
   
}
 

    
