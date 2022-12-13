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
import { ContainerBack as Back } from "../../components/mobile/HeaderBack";
import { AccordianShowHidden } from "../../components/accordians/AccordianShowHidden";
import api from "../../api/api";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import { ContainerGoto } from "../../components/mobile/Goto";
import iconArrowright from "../../../public/icons/arrow-right.png"

const Main = styled.section` 
    width: 90%;
    margin: 0 auto ;
    display: flex ;
    flex-direction: column ;
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
    
    .container_desktop{
        width: 100% ;
        height: 250px ;
    }

    .container_mobile{
       display: none ;
    }

    @media (max-width : 899px){

        margin-bottom: 80px ;

        .main_content{
            flex-direction: column ;
            align-items: center ;

            .info{
                width: 100% ;
                height: auto;
            }
            .photo{
                width: 70% ;
                height: 500px ;
            }
        }

        .container_desktop{
            display: none ;
        }
        
        .container_mobile{
            display: block ;
            border-top: 15px solid ${colours.grey} ;
            width: 100% ;

            .title_accordion, .title_goto, .title_invite{
                color: ${colours.high_emphasis};
                font-size: ${typography.headingM14.fontSize} ;
                font-weight: bold;
            }

            .description_mobile, .text_invite{
                color: ${colours.low_emphasis} ;
            }

            .invite{
                width: 100% ;
                display: flex ;
                justify-content: space-between ;

                .arrow_invite{
                    color: ${colours.primary};
                    font-size: 16px;
                    font-weight: bold ;

                    & span:first-child{
                        margin-right: 20px ;
                    }
                }

                .square_invite{
                    width: 100px ;
                    height: 95px ;
                    background-color: rgba(255, 230, 202, 1);
;
                }
            }
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

const itensBreadcrumbs : ItemProp[] = [
    {
        item: "Home",
        link: "/"
    },
    {
        item: "",
        link: ""
    },
    {
        item: "",
        link: ""
    },
   
]

export const ProductPage = () =>{

    const {search} = useLocation()
    const [product, setProduct] = useState<PropsProductStore>()
    const [breadcrumbs, setItemsBread] = useState(itensBreadcrumbs)

    useEffect(()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("id")){
            const id = searchParams.get("id") || ""

            api.get("/products/" + id )
                .then(resp => {
                    setProduct(resp.data)
                    setItemsBread(itens => itens.map((item, index) => {
                        if(index == 1){
                            item.item = resp.data.category[0].toUpperCase() + resp.data.category.substring(1)
                            item.link = `/category?name=${resp.data.category[0].toUpperCase() + resp.data.category.substring(1)}`
                        }
                        else if (index == 2) {
                            item.item = resp.data.brand[0].toUpperCase() + resp.data.brand.substring(1)
                            item.link = `/${resp.data.category[0].toUpperCase() + resp.data.category.substring(1)}`

                        }
                        return(item)
                    }))
                })
        }   
    },[search])
    

    return(
        <Main>
            <Back title=""/>
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

                <section className="container_desktop">
                    <ContextNavTab>
                        <TabHoriz array={itemNav}/>
                        <AboutProduct/>
                    </ContextNavTab>
                </section>

                <section className="container_mobile">
                    <AccordianShowHidden title="Product Description" className="title_accordion">
                        <div className="description_mobile">
                            Experience comfortable and easy travelling like never before 
                            with this coach bag. It features a zip closure, removable straps and 
                            multiple organization compartments to keep your valuables safe. 
                            Crafted from premium material, it is durable and lasts long.
                        </div>
                    </AccordianShowHidden>
                    <ContainerGoto title="Ratings & Reviews"/>
                    <div className="invite">
                        <div className="left_invite">
                            <p className="title_invite">Invite Friends & Earn</p>
                            <p className="text_invite">
                                Get uptp 100 reward points for 
                                every friend you invite
                            </p>
                            <div className="arrow_invite">
                                <span>Invite Now</span>
                                <img src= {iconArrowright} className = "img_arrow_right"/>
                            </div>
                        </div>
                        <div className="square_invite"></div>
                    </div>
                </section>
        
        </Main>
       
    )
}