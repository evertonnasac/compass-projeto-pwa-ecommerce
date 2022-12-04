import styled from "styled-components";
import { borderRadiusCards } from "./styles-cards-default";
import  typography from "../../../UI/typography"
import {StyleContainer} from "../ProductAny"
import { Stepper } from "../../stepper/Stepper";
import imgProduct from "../../../../public/images/product/product-store2.png"
import { Context as ContextStepper } from "../../../Contexts/ContextStepper";
import { useContext, useEffect, useState } from "react";
import { Context as ContextBag, ProductsBagInfo } from "../../../Contexts/ContexBag";


 const StyleBagDesktop = styled.div`

    width: 100%;
    height: 100%;

    display: flex ;
    gap: 2px;

    img{
        width: 30% ;
        height: 66% ;
        border-radius: ${borderRadiusCards} ;
    }

    span{
        position: relative;

        .description, .brand{
            font-size: ${typography.paragraphR16.fontSize};
            font-weight: ${typography.paragraphR16.fontWeight};
        }


        .price, .qtd, .close {
            font-size: ${typography.paragraphR16.fontSize};
            font-weight: ${typography.paragraphR16.fontWeight };
        }

        .close {
            position: absolute;
            right: 0;
            top: 0 ;
        }

        .btn-add, .price {
            display: none;
        }

    }

`
interface ProductBagdesktop {
    _id : string,
    brand : string,
    description : string,
    price: number,
    rebate : number,
    urlPhoto : string,
    qte : number
}

export const BagDesktop = (props : ProductsBagInfo) =>{

    const [product, setProduct] = useState<ProductsBagInfo>(props)
    const {setCurrentBag, currentBag} = useContext(ContextBag)

    useEffect(()=> {
        setCurrentBag(bag  => {
            return {...bag, 
                products : bag.products.map((item :ProductsBagInfo ) => 
                item._id == product._id ? product : item)}
        })
    }, [product])

    const handleQte = (operation : string) =>{
        if(operation == "minus" ){
            console.log("MINUS")
            setProduct(product => {return {...product, qte: product.qte && product.qte > 1 ?
                 product.qte -1  : product.qte}})
            
        }

        else if(operation == "plus"){
            setProduct(product => {return {...product, qte: product.qte ? product.qte  + 1  : 1}})
        }
    }

    const saveBag = () => {
        localStorage.setItem("bag", JSON.stringify(currentBag))
    }

    return (
        <StyleContainer>
            <StyleBagDesktop>
                    <img src= {props.urlPhoto} alt="Foto do produto" />
                    <span>
                    <p className="brand">{props.brand}.</p>
                    <p className="description">{props.description}</p>
                    <p className="price">{props.price && props.rebate ? props.price * props.rebate /100 : ""}</p>
                    <p className="qtd">Qtd - {props.qte}</p>
                    <p className="close" onClick={saveBag}>X</p>
                    <Stepper className = "stepper" updateValue={handleQte} qte = {product.qte}/>
                </span>
            </StyleBagDesktop>
        </StyleContainer>
    )     
}