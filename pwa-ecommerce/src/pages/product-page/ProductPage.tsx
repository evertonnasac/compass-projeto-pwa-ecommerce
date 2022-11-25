import styled from "styled-components";
import { ItemProp, Breadcrumbs } from "../../components/tabs/Breadcrumbs";
import { InfoProduct } from "./InfoProduct";
import { PhotoProduct } from "./PhotoProduct";
import { ContextNavTab } from "../../Contexts/ContexNavTab";
import { TabHoriz, ItemPropNav } from "../../components/tabs/TabHoriz";
import { AboutProduct } from "./AboutProduct";
import {useLocation} from "react-router-dom"
import { useEffect, useState } from "react";


const StyleMain = styled.section` 
    width: 98%;
    margin: 0 auto ;

`

const StyledResponsive = styled.section` 

    display: flex ;
    flex-direction: column ;
    gap: 25px;

    .main_content{
        display: flex ;
        justify-content: space-between ;

        .photo, .info{
            width: 48% ;
        }
        .photo{
            height: 704px ;
        }
        .info{
            height: 620px ;
        }
    }
    
    .tab{
        width: 100% ;
        height: 250px ;
    }

    @media (max-width : 899px){
        .main_content{
            flex-direction: column ;

            .photo, .info{
                width: 100% ;
                height: 400px
     
            }
        }
        .tab{
            display: none ;
        }

        
           
    }

`

const itensBreadcrumbs : ItemProp[] = [
    {
        item: "Home",
        link: "/"
    },
    {
        item: "HandleBags",
        link: "/handbags"
    },
   
]

const listPhotos = [
    "/public/images/product/product-store4.png",
    "/public/images/product/product-store.png",
    "/public/images/product/product-store2.png",
    "/public/images/product/product-store3.png",
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

const photoPrincipal =  "/public/images/product/product-store.png"

export const ProductPage = () =>{

    const {search} = useLocation()
    const [image, setImage] = useState("")


    useEffect(()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("image")){
            const image = searchParams.get("image") || ""
            console.log(image)
            setImage(image)
        }
        
    },[search])

    console.log(image)


    return(
        <StyleMain>
            <Breadcrumbs itens={itensBreadcrumbs}/>
            <StyledResponsive>
                <section className="main_content">
                    <div className="photo">
                        <PhotoProduct urlPrincipal= {photoPrincipal} arrayUrl = {listPhotos}/>  
                    </div>
                    <div className="info">
                         <InfoProduct/>
                    </div>
                </section>
                <div className="tab">
                    <ContextNavTab>
                        <TabHoriz array={itemNav}/>
                        <AboutProduct/>
                    </ContextNavTab>
                </div>
            </StyledResponsive>
        </StyleMain>
       
    )
}