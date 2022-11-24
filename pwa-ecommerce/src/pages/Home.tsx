import styled from "styled-components"
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from  "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Banner } from "../components/banners/banner"
import { ProductStore, PropsProductStore } from "../components/cards/products/ProductStore"


const Main = styled.main`
    width: 100%;
`
const SectionProduct = styled.section` 
    width: 100%;
    height: 400px ;
    display: flex ;
    justify-content: space-evenly ;
    align-items: center ;

    & > div{
        width: 23% ;
        height: 90% ;
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

export const Home = () => {
    return(
       <Main>
        <Header/>
        <Banner width="98%" height="300px" urlImage="public/images/banner/home-hor-1.png"/>
        <SectionProduct>
            {listProducts.map((product : PropsProductStore) => {
                return <div> <ProductStore {...product }/></div>
                
            })}
        </SectionProduct>
        <Banner width="98%" height="300px" urlImage="public/images/banner/home-hor-2.png"/>
        <Footer/>
       </Main>
    )
}