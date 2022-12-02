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
import { getProductsApi } from "../../api/getProducts";
import { PropsProductStore } from "../../components/cards/products/ProductStore";
import api from "../../api/api";




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

    const [radioFilter, setRadioFilter] = useState(false)
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState<PropsProductStore[]>([])
    const [optionsFilters, setOptionsFilters] = useState([])
    const [filters, setFilters] = useState<Object[]>([])
    const {search} = useLocation()

    useEffect(()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("name")){
            const name = searchParams.get("name") || ""
            setCategory(name)

            api.get("/products/" + name.toLowerCase())
                .then((resp : any) => {

                    const listProducts = resp.data[0]
                    let filter = resp.data[1]

                    updateProdutcs(filter, listProducts) 
                })
                .catch(err => console.log(err))
        }
        
    },[search])

    useEffect(()=>{

        if(filters.length == 0){
           return
        }

        api.post("/products/filter/" + category.toLowerCase(), {filters} )
        .then((resp : any) => {
            setProducts(resp.data)
        })
        .catch(err => console.log(err))
    },[filters])

    const closeFilter = () => {
        setTimeout(() => {
            setRadioFilter(false)
        }, 400);
    }

    const updateProdutcs = (options : any, listProducts : any) =>{
        setOptionsFilters(options)
        setProducts(listProducts)
        setFilters([])
    }

    return(
        <Main>
            <FilterCategory open = {radioFilter} setClose = {closeFilter}/>
            <section className="banner">
                <Banner className="banner" width="98%" height="300px" urlImage="public/images/banner/banner-product-full.png"/>
            </section>
            <section className="breadcrumbs">
                <Breadcrumbs itens={itensBreadcrumbs}/>
            </section>
            <main className="main_content">
                <div className="menu_lateral"><MenuLateral filters={filters} setFilters = {setFilters} 
                    optionsFilters={optionsFilters}/></div>
                <div className="products"><Products products={products}/></div>
            </main>
            <footer className="filter">
                <div onClick={() => setRadioFilter(true)}>
                    <img src= {iconSort} alt="incone ordenação" />
                    <span>SORT</span>
                </div>
                <div onClick={() => setRadioFilter(true)}>
                    <img src= {iconFilter} alt="incone filtragem" />
                    <span>FILTER</span>
                </div>
                
            </footer>
        </Main>

    )
}