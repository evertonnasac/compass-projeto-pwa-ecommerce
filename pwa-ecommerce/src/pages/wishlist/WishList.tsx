import styled from "styled-components"
import { ContainerBack as Back } from "../../components/mobile/HeaderBack"
import { ProductStore , PropsProductStore } from "../../components/cards/products/ProductStore"
import { useEffect, useState } from "react"
import api from "../../api/api"


const Main = styled.main`
    width: 98%;
    margin: 0 auto ;

    display: flex ;
    flex-direction: column ;
    gap: 25px;


    .main_content{
        display: flex ;

        .products{
            width: 75% ;
        }
    }

    @media (max-width : 899px ){

        .products{
            width: 100% ;
        }
   }  

`


const Products = styled.div` 
    width: 100% ;
    display: flex;
    justify-content: space-around ;
    align-items: center;
    flex-wrap: wrap ;

    .card_product{
        width: 30% ;
        height: 300px ;
        margin-bottom: 35px ;
    }

    @media (max-width : 899px ){
        .card_product{
            width: 40%;
        }
    }

    @media (max-width: 350px){
        .card_product{
            width: 100% ;
        }    
    }

`


export const Wishlist = () => {

    const [products, setProducts] = useState<PropsProductStore[]>([])

    useEffect(() => {

        let idUser = JSON.parse(localStorage.getItem("userPWA") || "")["_id"]

        api.get(`products/wishlist/${idUser}`)
        .then(result => setProducts(result.data))
        .catch(err => console.log(err))
    },[])
    
    return(
        <Main>
            <Back title= "My Wishlist"/>
                <Products>
                {products.map((product , index) => {
                    return(
                        <div className="card_product" key={index}>
                            <ProductStore
                                _id={product._id}
                                category={product.category}
                                description={product.description}
                                price = {product.price}
                                thin = {false}
                                urlImage = {product.urlImage}
                                rate = {product.rate}
                                rebate = {product.rebate}
                                brand = {product.brand}
                                totalRatings = {product.totalRatings}
                                key = {index} />
                        </div>
                    )
                })}
                </Products>
        </Main>
    )
}
