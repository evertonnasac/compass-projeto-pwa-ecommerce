import styled from "styled-components"
//import {BrowserRouter, Routes, Route, Navigate, useNavigate} from  "react-router-dom"
import { Banner } from "../../components/banners/Banner"
import { CategoryHome } from "./CategoryHome"
import { GriffsHome } from "./GriffsHome"
import { SectionProduct } from "./SectionProduct"
import { AccordianShowHidden } from "../../components/accordians/AccordianShowHidden"
import { Footer } from "../../components/footer/Footer"
import { BottonNavigate } from "../../components/mobile/BottonNavigate"


 
const Main = styled.main`
    width: 100%;
    margin: 0 auto ;

    display: flex ;
    flex-direction: column;
    align-items: center ;
    gap: 50px;

    overflow : hidden;

    .header_mobile{
        display: none ;
        width: 100% ;

        @media (max-width : 899px){
            display: block ;
        }

    }

    .banner_large.two{
        display: none ;

        @media (max-width : 899px){
            display: block ;
        }

    }

    .banner_large{
        width: 98% ;
        height: 400px;
        display: flex ;
        gap: 15px;
        overflow : hidden;

        .banner{
            flex-shrink: 0 ;
        }

        &:nth-child(2), &:nth-child(2){
            display: none ;
        }

        @media (max-width : 899px){
            height: 300px;
        
            .banner{
                display: block ;
            }
        }

        @media (max-width : 700px){
            height: 200px;
        }  

    }

    .banner_small{
        width: 98% ;
        height: 250px;
        margin: 0 auto ;

        display: flex ;
        justify-content: space-between ;
        align-items: center ;

        @media (max-width : 899px){
            height: 150px;
        }  
    }

    .nav_mobile, .footer_mobile{
        width: 98% ;

        @media (min-width: 899px){
            .footer_mobile, .nav_mobile{
                display: none ;
            }
        }
    }

`
export const Home = () => {
    return(
       <Main>
        <article className="banner_large">
            <Banner className="banner" width="100%" height="100%" urlImage="public/images/banner/banner-1-full.png"/>
            <Banner className="banner" width="100%" height="100%" urlImage="public/images/banner/banner-1-full.png"/>
            <Banner className="banner" width="100%" height="100%" urlImage="public/images/banner/banner-1-full.png"/>
        </article>

        <SectionProduct/>
        <CategoryHome/>
        <GriffsHome/>

        <section className="banner_large">
         <Banner className="banner" width="100%" height="100%" urlImage="public/images/banner/banner-2-full.png"/>
        </section>

        <article className="banner_small">
            <Banner className="banner" width="45%" height="100%" urlImage="public/images/banner/banner-3-full.png"/>
            <Banner className="banner" width="45%" height="100%" urlImage="public/images/banner/banner-4-full.png"/>
        </article>

        <article className="banner_large two">
            <Banner className="banner" width="100%" height="100%" urlImage="public/images/banner/banner-5-full.png"/>
            <Banner className="banner" width="100%" height="100%" urlImage="public/images/banner/banner-1-full.png"/>
            <Banner className="banner" width="100%" height="100%" urlImage="public/images/banner/banner-1-full.png"/>
        </article>
        
        <footer className="footer_mobile">
            <AccordianShowHidden title = "More about CORA’L">
                <Footer/>
            </AccordianShowHidden>
        </footer>

        <nav className="nav_mobile">
            <BottonNavigate/>
        </nav>  

       </Main>
    )
}