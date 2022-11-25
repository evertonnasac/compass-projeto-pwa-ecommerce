import styled from "styled-components"
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from  "react-router-dom"
import { Banner } from "../../components/banners/Banner"
import { CategoryHome } from "./CategoryHome"
import { GriffsCategory } from "./GriffsHome"
import { SectionProduct } from "./SectionProduct"
import { AccordianShowHidden } from "../../components/accordians/AccordianShowHidden"
import { Footer } from "../../components/footer/Footer"
import { BottonNavigate } from "../../components/mobile/BottonNavigate"


const StyleResponsive = styled.section`
    width: 100% ;

    .nav_mobile{
        width: 100% ;
    }

    @media (min-width: 899px){
        .footer_mobile, .nav_mobile{
            display: none ;
        }
    }
`

const Main = styled.main`
    width: 100%;
    display: flex ;
    flex-direction: column;
    align-items: center ;
    margin: 0 auto ;
    gap: 50px;
    overflow : hidden;


    .banner_double{
        width: 98% ;
        display: flex ;
        justify-content: space-between ;
        margin: 0 auto ;

    }
    .frame_mobile{

        width: 98% ;
        margin: 0 auto ;

        @media (min-width: 899px){
            display: none ;
        }

    }

`
export const Home = () => {
    return(
       <Main>
            <Banner width="98%" height="300px" urlImage="public/images/banner/banner-1-full.png"/>
            <SectionProduct/>
            <CategoryHome/>
            <GriffsCategory/>
            <Banner width="98%" height="300px" urlImage="public/images/banner/banner-2-full.png"/>
            <section className="banner_double">
                <Banner width="48%" height="228px" urlImage="public/images/banner/banner-3-full.png"/>
                <Banner width="48%" height="228px" urlImage="public/images/banner/banner-4-full.png"/>
            </section>
            <StyleResponsive>
                <div className="footer_mobile">
                    <AccordianShowHidden title = "More about CORA’L">
                        <Footer/>
                    </AccordianShowHidden>
                </div>
                <div className="nav_mobile">
                     <BottonNavigate/>
                </div>
            </StyleResponsive>
       </Main>
    )
}