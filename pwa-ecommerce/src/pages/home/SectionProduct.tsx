import styled from "styled-components"
import { ProductStore, PropsProductStore } from "../../components/cards/products/ProductStore"

const StyleSectionProduct = styled.section` 
    width: 100%;
    height: 400px ;
    display: flex ;
    justify-content: space-evenly ;
    align-items: center ;

    & > div{
        width: 23% ;
        height: 98% ;
    }

    @media (max-width: 899px){
       min-width: 899px  ;
       overflow-x: scroll ;
    }

`
const listProducts : PropsProductStore[] = [
    {
        category: "Grande",
        description: "Blossom Pouch",
        price: 39.49,
        urlImage : "public/images/product/product-store.png",
        thin: true,
    },
    {
        category: "Coach",
        description: "Leather Coach Bag",
        price: 59.49,
        urlImage : "public/images/product/product-store2.png",
        thin: true,
    },
    {
        category: "Remus",
        description: "Brown Strap Bag",
        price: 37.05,
        urlImage : "public/images/product/product-store3.png",
        thin: true,
    },
    {
        category: "Boujee",
        description: "Black Bag",
        price: 39.49,
        urlImage : "public/images/product/product-store4.png",
        thin: true,
    }
]

export const SectionProduct = () => {
    return (
        <StyleSectionProduct>
            {listProducts.map((product : PropsProductStore) => {
                return <div> <ProductStore {...product }/></div>
            })}
         </StyleSectionProduct>
    )
    
}