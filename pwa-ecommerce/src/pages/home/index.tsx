import styled from "styled-components"
//import {BrowserRouter, Routes, Route, Navigate, useNavigate} from  "react-router-dom"
import { Banner } from "../../components/banners"
import { CategoriesBox } from "./Categories"
import { GriffsBox } from "./Griffs"
import { Arrivals } from "./Arrivals"
import { ContainerCarousel } from "../../components/carousel"
import * as S from "./styles"


export const Home = () => {
    return(
        <S.Main>
            <ContainerCarousel cols={1} loop = {true} autoPlay={3000}
                items={[
                        <Banner imgSrc= "/images/banner/banner-1-full.png" length="big" />,
                        <Banner imgSrc="/images/banner/banner-2-full.png" length="big"/>,
                        <Banner imgSrc="/images/banner/banner-product-full.png"  length="big" />
                    ]}
            />
            <Arrivals/>
            <CategoriesBox/>
            <GriffsBox/>

            <S.BannerWrapper>
                <Banner imgSrc="public/images/banner/banner-2-full.png" length="big"/>
            </S.BannerWrapper>
            <S.StyleListCards>
                <Banner imgSrc="/images/banner/banner-3-full.png" length="small"/>
                <Banner imgSrc="/images/banner/banner-4-full.png" length="small"/>
            </S.StyleListCards>
       </S.Main> 
    )
}