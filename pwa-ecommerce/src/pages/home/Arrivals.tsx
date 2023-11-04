
import {StyleListCards, StyleArrivalsCard} from "./styles"
import { ProductStore, PropsProductStore } from "../../components/cards/products/ProductStore"

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
        urlImage : "public/images/product/product2-store.png",
        thin: true,
    },
    {
        category: "Remus",
        description: "Brown Strap Bag",
        price: 37.05,
        urlImage : "public/images/product/product3-store.png",
        thin: true,
    },
    {
        category: "Boujee",
        description: "Black Bag",
        price: 39.49,
        urlImage : "public/images/product/product4-store.png",
        thin: true,
    }
]

export const Arrivals = () => {
    return (
        <StyleListCards>
            {listProducts.map((product : PropsProductStore) => {
                return <StyleArrivalsCard> <ProductStore {...product }/></StyleArrivalsCard>
            })}
         </StyleListCards>
    )
    
}