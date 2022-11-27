import styled from "styled-components";
import { ItemProp, Breadcrumbs } from "../../components/tabs/Breadcrumbs";
import { InfoProduct } from "./InfoProduct";
import { PhotoProduct } from "./PhotoProduct";
import { ContextNavTab } from "../../Contexts/ContexNavTab";
import { TabHoriz, ItemPropNav } from "../../components/tabs/TabHoriz";
import { AboutProduct } from "./AboutProduct";
import {useLocation} from "react-router-dom"
import { useEffect, useState } from "react";


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

    return(
        <Main>
            <section className="breadcrumbs">
                <Breadcrumbs itens={itensBreadcrumbs}/>
            </section>
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
        </Main>
       
    )
}