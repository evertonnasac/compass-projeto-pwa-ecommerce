import styled from "styled-components";
import { Banner } from "../../components/banners/Banner";
import { Breadcrumbs , ItemProp  } from "../../components/tabs/Breadcrumbs";
import { MenuLateral } from "./MenuLateral";
import { Products } from "./Products";
import { FilterCategory } from "./FilterCategory";
import iconFilter from "../../../public/icons/filter.png"
import iconSort from "../../../public/icons/sort.png"
import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom"


const Main = styled.main`
    width: 98%;
    margin: 0 auto ;

    display: flex ;
    flex-direction: column ;
    align-items: center ;
    gap: 25px;

    .banner{
        max-width: 1100px ;
        width: 100% ;
    }

    .breadcrumbs{
        align-self: flex-start ;
    }

    .main_content{
        display: flex ;

        .menu_lateral{
            width: 24%
        }
        .products{
            width: 75% ;
        }
    }

    .breadcrumbs{
        margin: 20px 0 0 0  ;
    }

    .filter {
        display: flex ;
        align-items: center ;
        justify-content: space-evenly ;
        height: 56px ;
        width: 100%;
        
        div{
            cursor: pointer;
        }

        img{
            margin: 5px 15px 0 0;
        }
        span{
            font-size: 18px ;
        }

        @media (min-width : 899px){
            display: none ;
        }

    }
    @media (max-width : 899px ){

        .banner {
            display: none ;
        }
        .main_content{
            display: block ;

            .menu_lateral{
                display: none ;
            }   
            .products{
                width: 100% ;
            }
        }
    }
`

const itensBreadcrumbs : ItemProp[] = [
    {
        item: "Home",
        link: "/"
    },
    {
        item: "Handbags",
        link: "/product"
    }
]

export const SubCategory = () => {

    const [filter, setFilter] = useState(false)
    const {search} = useLocation()

    useEffect(()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("name")){
            const image = searchParams.get("image") || ""
        }
        
    },[search])

    const closeFileer = () => {
        setTimeout(() => {
            setFilter(false)
        }, 400);
    }

    return(
        <Main>
            <FilterCategory open = {filter} setClose = {closeFileer}/>
            <section className="banner">
                <Banner className="banner" width="98%" height="300px" urlImage="public/images/banner/banner-product-full.png"/>
            </section>
            <section className="breadcrumbs">
                <Breadcrumbs itens={itensBreadcrumbs}/>
            </section>
            <main className="main_content">
                <div className="menu_lateral"><MenuLateral/></div>
                <div className="products"><Products/></div>
            </main>
            <footer className="filter">
                <div onClick={() => setFilter(true)}>
                    <img src= {iconSort} alt="incone ordenação" />
                    <span>SORT</span>
                </div>
                <div onClick={() => setFilter(true)}>
                    <img src= {iconFilter} alt="incone filtragem" />
                    <span>FILTER</span>
                </div>
                
            </footer>
        </Main>

    )
}