import styled from "styled-components";
import { MobileItemSheet as ProductCard } from "../../components/cards/products/MobileItemSheet";
import { IBag } from "../../Contexts/ContexBag";
import typography from "../../UI/typography";
import { colours } from "../../UI/colours";

const StyleContainer = styled.section` 
    width : 100%;

    p{
        margin: 5px 0 ;
    }
    
    .title{
        font-size: ${typography.headingS20.fontSize} ;
        font-weight: ${typography.headingS20.fontWeight} ;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12); 
        color: ${colours.dark}
    }

    .card_product {
        margin-top: 20px ;
        width: 100% ;
    }
`

export const OrderSumary = ({bagCurrent} : {bagCurrent : IBag}) => {
    return(
        <StyleContainer>
            <p className="title">Order Datails</p>
            {bagCurrent.products.map((item) => {
            return(
            <div className="card_product">
                <ProductCard
                    _id= {item._id}
                    description = {item.description}
                    qtd = {item.qte}
                    brand = {item.brand}
                    price = {Number (item.price && item.rebate ? item.price * item.rebate / 100 : item.price)}
                    urlImage = {item.urlPhoto}
                />
            </div>
            )})}
        </StyleContainer>
    )
   
}