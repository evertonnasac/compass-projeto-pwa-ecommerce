import styled from "styled-components";
import { Banner } from "../../components/banners/Banner";
import { Breadcrumbs , ItemProp  } from "../../components/tabs/Breadcrumbs";
import { MenuLateral } from "./MenuLateral";
import { Products } from "./Products";
import { FilterCategory } from "./FilterCategory";
import iconFilter from "../../../public/icons/filter.png"
import iconSort from "../../../public/icons/sort.png"
import { useState } from "react";


const StyleResponsive = styled.section` 

    .main_content{
        display: flex ;

        .menu_lateral{
            width: 24%
        }
        .products{
            width: 75% ;
        }
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

                section > div{
                    width: 40% ;

                    @media (max-width: 350px){
                        width: 100% ;
                    }
                }
                section > div:last-child{
                    display: none;
                }
            }
        }
    }

`
const StyleMain = styled.main`
    width: 98%;
    margin: 0 auto ;

    display: flex ;
    flex-direction: column ;
    gap: 25px;

`
const itensBreadcrumbs : ItemProp[] = [
    {
        item: "Home",
        link: ""
    },
    {
        item: "HandleBags",
        link: ""
    }
]

export const SubCategory = () => {

    const [filter, setFilter] = useState(false)

    const closeFileer = () => {
        setTimeout(() => {
            setFilter(false)
        }, 400);
    }

    return(
        <StyleMain>
            <FilterCategory open = {filter} setClose = {closeFileer}/>
            <StyleResponsive>
                <div className="banner">
                    <Banner width="98%" height="300px" urlImage="public/images/banner/home-hor-1.png"/>
                </div>
                <div className="breadcrumbs">
                    <Breadcrumbs itens={itensBreadcrumbs}/>
                </div>
                <div className="main_content">
                    <div className="menu_lateral">
                        <MenuLateral/>
                    </div>
                    <div className="products">
                        <Products/>
                    </div>
                </div>
                <div className="filter">
                    <div onClick={() => setFilter(true)}>
                        <img src= {iconSort} alt="incone ordenação" />
                        <span>SORT</span>
                    </div>
                    <div onClick={() => setFilter(true)}>
                        <img src= {iconFilter} alt="incone filtragem" />
                        <span>FILTER</span>
                    </div>
                   
                </div>
            </StyleResponsive>
        </StyleMain>

    )
}