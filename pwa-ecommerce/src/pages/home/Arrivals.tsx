import { StyleTitle, StyleSubTitle, StyleMainPrice} from "../../components/cards/product/Tags"
import {PhotoContainer, StylePhoto} from "../../components/cards/product/Photo"
import styled from "styled-components"
import { ContainerCarousel } from "../../components/carousel"
import {StyleArrivalsBox, Title} from "./styles"


type Product = {
    title: string,
    subtitle: string,
    price: number,
    urlImage : string,
}
const listProducts : Product[] = [
    {
        title: "Grande",
        subtitle: "Blossom Pouch",
        price: 39.49,
        urlImage : "/images/product/product-store.png",
        
    },
    {
        title: "Coach",
        subtitle: "Leather Coach Bag",
        price: 59.49,
        urlImage : "/images/product/product2-store.png",
       
    },
    {
        title: "Remus",
        subtitle: "Brown Strap Bag",
        price: 37.05,
        urlImage : "/images/product/product3-store.png",
    },
    {
        title: "Boujee",
        subtitle:  "Black Bag",
        price: 39.49,
        urlImage : "/images/product/product4-store.png",
    },
    {
        title: "Remus",
        subtitle: "Brown Strap Bag",
        price: 37.05,
        urlImage : "/images/product/product3-store.png",
    },
    {
        title: "Coach",
        subtitle: "Leather Coach Bag",
        price: 59.49,
        urlImage : "/images/product/product2-store.png",
       
    },
    {
        title: "Boujee",
        subtitle:  "Black Bag",
        price: 39.49,
        urlImage : "/images/product/product4-store.png",
    },
]


const StyleCardProduct = styled.div`
    width : 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Arrivals = () => {
    return (
        <StyleArrivalsBox>
            <Title  $color="dark">New Arrivals</Title>
             <ContainerCarousel cols={4} loop = {true}  arrows = {true} items={
                listProducts.map((product : Product, id) => {
                return ( 
                    <StyleCardProduct key={id}>
                        <PhotoContainer>
                            <StylePhoto src={product.urlImage}/>
                        </PhotoContainer>
                        <StyleTitle>{product.title}</StyleTitle>
                        <StyleSubTitle>{product.subtitle}</StyleSubTitle>
                        <StyleMainPrice>R${product.price}</StyleMainPrice>
                     </StyleCardProduct>
                    )
            }) 
        }/>
        </StyleArrivalsBox>
       
    )
    
}