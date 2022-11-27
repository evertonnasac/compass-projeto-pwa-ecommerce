import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/buttons/Button";

import { Ratings } from "../../components/ratings/Retings";
import { Stepper } from "../../components/stepper/Stepper";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import imgDiscount from "../../../public/icons/discount.png"
import imgDelivery from "../../../public/icons/delivery.png"
import iconHeart from "../../../public/icons/heart-blue.png"
import iconBag from "../../../public/icons/bag.png"


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
            img{
                display: none ;
            }
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
                width: 10%!important ;
            }
        }   
        
    }

`

export const InfoProduct = () => {
    return(
        <StylerContainer>
            <p className="category">Coach</p>
            <p className="description">Leather Coach Bag with adjustable starps.</p>
            <div className="content_rate">
                <Ratings rate={4}/>
                <p className="tota_ratings">250 Ratings</p>
            </div>
            <div className="content_price">
                <p className="price">$54.69</p>
                <p className="price_before">$78.66</p>
                <p className="discount">50%OFF</p>
            </div>
            <div className="delivery">
                <div className="info_delivery">
                    <p className="title">Delivery Details</p>
                    <p className="resume">Check estimated delivery date/pickup option.</p>
                </div>
                <img src={imgDiscount} alt="" />
            </div>
            <div className="stepsContent">
                <span>Quantity:</span>
                <Stepper className="stepper"/>
            </div>
            <div className="coupon">
                <img src={imgDelivery} alt="" />
            </div>
            <div className="controls">
                <Button type="primary" height="44px" width="60%" >
                    <img src={iconBag} alt="" />
                    Add to bag
                </Button>
                <Button type="outline" height="44px" width="35%">
                    <img src={iconHeart} alt="" />
                    Add To Wishlist
                </Button>
                <Button type="outline" height="44px" width="50px"><img src={iconHeart} alt="" /></Button>
            </div>
        </StylerContainer>
    )
}

