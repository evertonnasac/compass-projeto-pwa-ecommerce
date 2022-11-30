import styled from "styled-components";
import { ProductStore , PropsProductStore} from "../../components/cards/products/ProductStore";


const StyleContainer = styled.div` 
    width: 100% ;
    display: flex;
    justify-content: space-around ;
    align-items: center;
    flex-wrap: wrap ;

    .card_product{
        width: 30% ;
        margin-bottom: 35px ;
    }

    @media (max-width : 899px ){
        .card_product{
            width: 40%;
        }
    }

    @media (max-width: 350px){
        .card_product{
            width: 100% ;
        }    
    }

    
`

interface IProduct {
    products: PropsProductStore[]
}

export const Products = (props : IProduct) => {
    return(
        <StyleContainer>
            {props.products.map((product , index) => {
                return(
                    <div className="card_product" key={index}>
                         <ProductStore
                        category={product.category}
                        description={product.description}
                        price = {product.price}
                        thin = {false}
                        urlImage = {product.urlImage}
                        rate = {product.rate}
                        rebate = {product.rebate}
                        totalRatings = {product.totalRatings}
                        key = {index}
                    />
                    </div>
                )
            })}
        </StyleContainer>
    )
}