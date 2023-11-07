import { Banner } from "../../components/banners";
import { Breadcrumbs} from "../../components/tabs/Breadcrumbs";
import { Filters } from "./Filters";
import { ProductsContainer } from "./ProductsContainer";
import {PropsProductCard} from "./ProductCard"
import { Modal } from "./Modal";
import iconFilter from "../../../public/icons/filter.png"
import iconSort from "../../../public/icons/sort.png"
import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom"
import { getProductsByCategory } from "../../api/getProducts";
import { ContainerBack as Back } from "../../components/mobile/HeaderBack";
import api from "../../api/api";
import * as S from "./styles"
import * as fetch from "./fetchs"


export const Category = () => {

    const [radioFilter, setRadioFilter] = useState(false)
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState<PropsProductCard[]>([])
    const [optionsFilters, setOptionsFilters] = useState([])
    const [filters, setFilters] = useState<Object[]>([])
    const [onFilters, setOnfilters] = useState(false)
    const [breadcrumbsItems, setbreadcrumbsItems] = useState([{item: "home", link : "/home"}])
    const {search} = useLocation()


    const getProductsAndFilters = async (name : string) => {
        const {err, filters, products} = await fetch.getProductsByCategory(name)

        if(products && filters){
            setProducts(products)
            setOptionsFilters(filters)
        }
    }
    useEffect( ()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("name")){
            let name = searchParams.get("name") || ""

            getProductsAndFilters(name.toLowerCase())
    
            setFilters([])

            name = name[0].toUpperCase() + name.substring(1)
            setCategory(name)

            setbreadcrumbsItems([{item: "Home", link : "/Home"}, {item: name, link: `/${name}`}])

            /*setItemsBread(itens => itens.map((item, index) => {
                if(index == 1){
                    item.item = name
                }
                return(item)
            }))*/
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
       
    /*
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
*/
    
    const closeFilter = () => {
        setTimeout(() => {
            setRadioFilter(false)
        }, 400);
    }


    return(
        <S.StyleContainer>
            <Modal open = {radioFilter} setClose = {closeFilter}>
                <Filters 
                    filters={filters}
                    setFilters = {setFilters} 
                    optionsFilters={optionsFilters}
                    onFilters = {onFilters}
                    setOnFilters = {setOnfilters}
                    Container={S.WrapperFilterModal}
                />
            </Modal>
            <S.WrapperBanner>
                <Banner length="big" imgSrc="public/images/banner/banner-product-full.png"/>
            </S.WrapperBanner>
            <S.WrapperBreadcrumbs>
                <Breadcrumbs itens={breadcrumbsItems}/>  
            </S.WrapperBreadcrumbs>
            <S.StyleMainSection>
                <Filters 
                    filters={filters}
                    setFilters = {setFilters} 
                    optionsFilters={optionsFilters}
                    onFilters = {onFilters}
                    setOnFilters = {setOnfilters}
                    Container={S.StyleContainerLateralFilter}
                    />
                <ProductsContainer products={products}/>
            </S.StyleMainSection>
            <S.StyleContainerBottomFilter>
                <div onClick={() => setRadioFilter(true)}>
                    <img src= {iconSort} alt="incone ordenação" />
                    <span>SORT</span>
                </div>
                <div onClick={() => setRadioFilter(true)}>
                    <img src= {iconFilter} alt="incone filtragem" />
                    <span>FILTER</span>
                </div>          
            </S.StyleContainerBottomFilter>
        </S.StyleContainer>

    )
}