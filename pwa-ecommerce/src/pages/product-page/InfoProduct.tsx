import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import iconStar from "../../../public/icons-ratings/star-gold.png"
import { Ratings } from "../../components/ratings/Retings";
import { Stepper } from "../../components/stepper/Stepper";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import imgDiscount from "../../../public/icons/discount.png"
import imgDelivery from "../../../public/icons/delivery.png"
import iconHeart from "../../../public/icons/heart-blue.png"
import iconBag from "../../../public/icons/bag.png"
import { Context ,IBag } from "../../Contexts/ContexBag";
import { PropsProductStore } from "../../components/cards/products/ProductStore";
import { useNavigate } from "react-router-dom";
import { addProductWishList } from "../../hooks/user/addWishList";

const StylerContainer = styled.div` 

    width: 100%;
    height: 85% ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-between;

    p{
        margin: 0 ;
    }

    .category{
        font-size: ${typography.headingS34.fontSize} ;
        font-weight: ${typography.headingS34.fontWeight} ;
    }

    .description{
        font-size: ${typography.headingS20.fontSize} ;
        font-weight: ${typography.headingS20.fontWeight} ;
        color : ${colours.low_emphasis}
    }

    .content_rate, .content_price, .delivery, .stepsContent, .controls{
        display: flex ;
        gap: 10px;
    }

    .content_price{

        .price{
            font-size: ${typography.headingB52.fontSize} ;
            font-weight: ${typography.headingB52.fontWeight} ;
        }
        .price_before{
            font-size: 34px;
            font-weight: 600;
            color: ${colours.light_text};
        }

        .discount{
            font-weight: 600;
            font-size: 20px;
            color: #FF404B;
        }
    }

    .ratings_mobile{
        display: none ;
       
    }

    .content_rate{
        color: ${colours.low_emphasis}
    }

    .delivery{
        img{
            width: 50%;
            height: 56px ;
        }
    }

    .info_delivery{
        .title{
            font-size: ${typography.headingS20.fontSize} ;
            font-weight: ${typography.headingS20.fontWeight} ;
            margin-bottom: 8px ;
        }
        .resume{
            font-size: ${typography.paragraphR16.fontSize} ;
            font-weight: ${typography.paragraphR16.fontWeight} ;
        } 
    }

    .coupon{
        width: 60% ;

        img{
            height: 96px ;
            width: 100% ;
        }
    }

    .stepsContent{
        span{
            font-size: ${typography.headingS20.fontSize} ;
            font-weight: ${typography.headingS20.fontWeight} ;
        }
    }

    .controls {
        width: 100% ;

        & button:last-child {
            display: none ;
        }
    }

    @media (max-width: 899px){

        height: auto ;
        gap: 15px;

        .ratings_mobile{
            display: flex ;
            gap : 5%;
            width: 100% ;
            height: 85px ;
            line-height: 30px ;

            .rate{
                width: 60px ;
                background-color: ${colours.accent};
                display: flex ;
                align-items: center ;
                justify-content: space-around;
            }

            .numbers_rates{
                color: ${colours.low_emphasis} ;

            }
               
            .resume{
                .average{
                    color: ${colours.high_emphasis} ;
                    font-weight: bold ;
                }
            }
        }

        .content_price{

            .price{
                font-size: 24px;
                font-weight: 600 ;
            }
            .price_before{
                font-size: 18px;
                font-weight: 600;
            }
        }
        .stepsContent,  .content_rate{
            display: none ;
        }

        .delivery{
            flex-direction: column ;
         
        }

        .controls{
            height: 65px ;
            background-color: #fff ;
            position: fixed ;
            bottom: 0 ;
            transform: translateX(-50%) ;
            left: 50% ;
        }

        
    }

    @media (max-width: 550px){
        .coupon{
            width: 80% ;
            margin: 0 auto ;
        }

        .controls {
            flex-direction: row-reverse;
            justify-content: center ;

            & button:first-child{
                width: 85%!important ;
            }

            & button:nth-child(2)  {
                display: none ;
            }
            & button:nth-child(3)  {
                display: block ;
                width: 15%!important ;
            }
        }   
        
    }

`
interface PropsInfoProduct {
    _id: string | undefined
    brand : string | undefined,
    description: string | undefined,
    rate: number | undefined,
    totalRatings: number | undefined,
    price: number | undefined,
    rebate: number | undefined,
    urlPhoto: string | undefined,
    setProduct : React.Dispatch<React.SetStateAction<PropsProductStore | undefined>>

}



export const InfoProduct = (props: PropsInfoProduct) => {

    const [qte, setQte] = useState(1)

    const {setCurrentBag, currentBag, getBag, setBag} = useContext(Context)
    const nav = useNavigate()
    
    const addProductInBag = () => {

        if(!localStorage.getItem("userPWA")){
            nav("/login")
            return
        }

        let bag : IBag = getBag()
        bag.products.push({...props, qte : qte})
        setBag(bag)
    }

    const addWishList = () => {
        if(!localStorage.getItem("userPWA")){
            nav("/login")
            return
        }

        addProductWishList(props._id)


    }

    const updateValue = (operation : string) =>{
        if (operation == "plus"){
            setQte(qte => qte +1)
           
        }

        if (operation == "minus" && qte > 0){
            setQte(qte => qte - 1)
           
        }
    }


    return(
        <StylerContainer>
            <p className="category">{props.brand}</p>
            <p className="description">{props.description}</p>
            <div className="content_rate">
                <Ratings rate={4}/>
                <p className="tota_ratings">{props.totalRatings}</p>
            </div>
            <div className="content_price">
                <p className="price">${ props.rebate && props.price ? Number((props.price * props.rebate/100) * qte).toFixed(2) : props.price}</p>
                <p className="price_before">${ props.price ? Number(props.price * qte).toFixed(2) : props.price}</p>
                <p className="discount">{props.rebate}%OFF</p>
            </div>
            <div className="ratings_mobile">
                <span className="rate">
                    <img src= {iconStar} className = "icon_star" />
                    <span className="rate_mobile">{props.rate && (props.totalRatings && 
                        props.rate / props.totalRatings)?.toFixed(1)}
                    </span>
                </span>
                <span className="resume">
                    <p className="average">Average Rate</p>
                    <p className="numbers_rates">{props.totalRatings} Ratings and 23 Reviews</p>
                </span>
            </div>
            <div className="delivery"> 
                <div className="info_delivery">
                    <p className="title">Delivery Details</p>
                    <p className="resume">Check estimated delivery date/pickup option.</p>
                </div>
                <img src={imgDiscount} alt="" />
            </div>
            <div className="stepsContent">
                <span>Quantity: {qte}</span>
                <Stepper updateValue = {updateValue} className="stepper"/>
            </div>
            <div className="coupon">
                <img src={imgDelivery} alt="" />
            </div>
            <div className="controls">
                <Button type="primary" height="44px" width="60%" onclick={addProductInBag}>
                    <img src={iconBag} alt="" />
                    Add to bag
                </Button>
                <Button onclick={addWishList} type="outline" height="44px" width="35%">
                    <img src={iconHeart} alt="" />
                    Add To Wishlist
                </Button>
                <Button type="outline" height="44px" width="50px"><img src={iconHeart} alt="" /></Button>
            </div>
        </StylerContainer>
    )
}

