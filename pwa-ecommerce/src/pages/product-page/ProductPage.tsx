import styled from "styled-components";
import { ItemProp, Breadcrumbs } from "../../components/tabs/Breadcrumbs";
import { InfoProduct } from "./InfoProduct";
import { PhotoProduct } from "./PhotoProduct";
import { ContextNavTab } from "../../Contexts/ContexNavTab";
import { TabHoriz, ItemPropNav } from "../../components/tabs/TabHoriz";
import { AboutProduct } from "./AboutProduct";
import {useLocation} from "react-router-dom"
import { PropsProductStore } from "../../components/cards/products/ProductStore";
import { useEffect, useState } from "react";
import api from "../../api/api";

const Main = styled.section` 
    width: 98%;
    margin: 0 auto ;
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    gap: 25px;

    .breadcrumbs{
        align-self: flex-start ;
    }

    .main_content{
        width: 100% ;
        display: flex ;
        justify-content: space-between ;
        align-items: flex-start ;

        .photo, .info{
            height: 600px;
            width: 48%;
        }
    }
    
    .tab{
        width: 100% ;
        height: 250px ;
    }

    @media (max-width : 899px){

        .main_content{
            flex-direction: column ;
            align-items: center ;

            .info{
                width: 100% ;
                height: 400px;
            }
            .photo{
                width: 70% ;
                height: 500px ;
            }
        }

        .tab{
            display: none ;
        }  
    }

    @media (max-width : 615px){

        .main_content{

            .photo{
                width: 95%;
                height: 500px ;
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
        item: "HandBags",
        link: "/handbags"
    },
   
]

const listPhotos = [
    "/public/images/product/product4-store.png",
    "/public/images/product/product2-store.png",
    "/public/images/product/product3-store.png",
    "/public/images/product/product-store.png",
]

const itemNav : ItemPropNav[] = [
    {
        item: "Product Description",
    },
    {
        item: "Related Products"
    },
    {
        item: "Ratings and Reviews"
    },
    
]


export const ProductPage = () =>{

    const itensBreadcrumbs : ItemProp[] = [
        {
            item: "Home",
            link: "/"
        },
        {
            item: "",
            link: ""
        },
       
    ]

    const {search} = useLocation()
    const [product, setProduct] = useState<PropsProductStore>()
    const [breadcrumbs, setItemsBread] = useState(itensBreadcrumbs)

    useEffect(()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("id")){
            const id = searchParams.get("id") || ""

            api.get("/product/" + id )
                .then(resp => {
                    setProduct(resp.data)

                    setItemsBread(itens => itens.map((item, index) => {
                        if(index == 1){
                            item.item = resp.data.category[0].toUpperCase() + resp.data.category.substring(1)
                            item.link = `/${resp.data.category}`
                        }
                        return(item)
                    }))
                })

        }
        
    },[search])
    

    return(
        <Main>
            <section className="breadcrumbs">
                <Breadcrumbs itens={breadcrumbs}/>
            </section>
                <section className="main_content">
                    <div className="photo">
                        <PhotoProduct urlPrincipal= {product?.urlImage} arrayUrl = {listPhotos}/>  
                    </div>
                    <div className="info">
                         <InfoProduct
                           _id = {product?._id}
                           brand = {product?.brand}
                           description = {product?.description}
                           price = {product?.price}
                           rate = { product?.rate && product.totalRatings ? product?.rate / product?.totalRatings : 5}
                           rebate = {product?.rebate}
                           urlPhoto = {product?.urlImage}
                           totalRatings = {product?.totalRatings }
                           setProduct = {setProduct}
                         />
                    </div>
                </section>
                <div className="tab">
                    <ContextNavTab>
                        <TabHoriz array={itemNav}/>
                        <AboutProduct/>
                    </ContextNavTab>
                </div>
        
        </Main>
       
    )
}