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
import { getProductsByCategory } from "../../api/getProducts";
import { PropsProductStore } from "../../components/cards/products/ProductStore";
import { ContainerBack as Back } from "../../components/mobile/HeaderBack";
import api from "../../api/api";


const Main = styled.main`
    width: 98%;
    margin: 0 auto ;

    display: flex ;
    flex-direction: column ;
    gap: 25px;


    .banner{
        max-width: 1100px ;
        width: 100% ;
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


export const SubCategory = () => {

    const itensBreadcrumbs : ItemProp[] = [
        {
            item: "Home",
            link: "/home"
        },
        {
            item: "",
            link: ""
        }
    ]

    const [radioFilter, setRadioFilter] = useState(false)
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState<PropsProductStore[]>([])
    const [optionsFilters, setOptionsFilters] = useState([])
    const [filters, setFilters] = useState<Object[]>([])
    const [onFilters, setOnfilters] = useState(false)
    const [breadcrumbs, setItemsBread] = useState(itensBreadcrumbs)
    const {search} = useLocation()


    useEffect( ()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("name")){
            let name = searchParams.get("name") || ""
            getProductsByCategory(name.toLowerCase())
            setFilters([])
            name = name[0].toUpperCase() + name.substring(1)
            setCategory(name)
            setItemsBread(itens => itens.map((item, index) => {
                if(index == 1){
                    item.item = name
                }
                return(item)
            }))
        }
        
    },[search])

    useEffect (()=>{

        if(onFilters && filters.length > 0){
            api.post("/products/filter/" + category.toLowerCase(), {filters} )
            .then((resp : any) => {
                setProducts(resp.data)
            
            })
            .catch(err => console.log(err))
          return           
        }

       onFilters && filters.length == 0 && getProductsByCategory(category) 

    }, [filters])
              
    const getProductsByCategory = (name : string) => {
        
        api.get("/products/category/" + name.toLowerCase())
            .then((resp : any) => {

                const listProducts = resp.data[0]
                let optionsFilters = resp.data[1]
                

                setProducts(listProducts)
                setOptionsFilters(optionsFilters)
                
            })
            .catch(err => console.log(err)
        )
    }

    
    const closeFilter = () => {
        setTimeout(() => {
            setRadioFilter(false)
        }, 400);
    }


    return(
        <Main>
            <Back title= {category}/>
            <FilterCategory open = {radioFilter} setClose = {closeFilter}/>
            <section className="banner">
                <Banner className="banner" width="98%" height="300px" urlImage="public/images/banner/banner-product-full.png"/>
            </section>
            <section className="breadcrumbs">
                <Breadcrumbs itens={breadcrumbs}/>
            </section>
            <main className="main_content">
                <div className="menu_lateral">
                    <MenuLateral 
                        filters={filters}
                        setFilters = {setFilters} 
                        optionsFilters={optionsFilters}
                        onFilters = {onFilters}
                        setOnFilters = {setOnfilters}
                        />
                        
                     </div>
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