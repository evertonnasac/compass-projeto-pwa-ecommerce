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

const listProucts : PropsProductStore[] = [
    {
        category: "Grande",
        description: "Blossom Pouch",
        price : 39.49,
        rate : 5,
        thin: false,
        rebate: 12,
        totalRatings: 45,
        urlImage: "/public/images/product/product-store.png"
    },
    {
        category: "Remus",
        description: "Brown Strap Bag",
        price : 69.45,
        rate : 4,
        thin: false,
        rebate: 37,
        totalRatings: 60,
        urlImage: "/public/images/product/product-store2.png"
    },
    {
        category: "Coach",
        description: "Leather Coach Bag",
        price : 59.45,
        rate : 5,
        thin: false,
        rebate: 45,
        totalRatings: 77,
        urlImage: "/public/images/product/product-store3.png"
    },
    {
        category: "Boujee",
        description: "Black Bag",
        price : 59.45,
        rate : 5,
        thin: false,
        rebate: 45,
        totalRatings: 77,
        urlImage: "/public/images/product/product-store4.png"
    },
    {
        category: "Grande",
        description: "Blossom Pouch",
        price : 39.49,
        rate : 4,
        thin: false,
        rebate: 12,
        totalRatings: 45,
        urlImage: "/public/images/product/product-store.png"
    },
    {
        category: "Remus",
        description: "Brown Strap Bag",
        price : 69.45,
        rate : 4,
        thin: false,
        rebate: 37,
        totalRatings: 60,
        urlImage: "/public/images/product/product-store2.png"
    },
    {
        category: "Coach",
        description: "Leather Coach Bag",
        price : 59.45,
        rate : 5,
        thin: false,
        rebate: 45,
        totalRatings: 77,
        urlImage: "/public/images/product/product-store3.png"
    },
    {
        category: "Boujee",
        description: "Black Bag",
        price : 59.45,
        rate : 5,
        thin: false,
        rebate: 45,
        totalRatings: 77,
        urlImage: "/public/images/product/product-store4.png"
    },
    {
        category: "Coach",
        description: "Leather Coach Bag",
        price : 59.45,
        rate : 5,
        thin: false,
        rebate: 45,
        totalRatings: 77,
        urlImage: "/public/images/product/product-store3.png"
    },

]

export const Products = () => {
    return(
        <StyleContainer>
            {listProucts.map((product , index) => {
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