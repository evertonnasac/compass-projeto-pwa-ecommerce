import styled from "styled-components";
import { colours } from "../../../UI/colours";
import typography from "../../../UI/typography";
import { Rating } from "../../../stories/Ratings.stories";
import iconHeart from "../../../../public/icons/coracao.png"
import iconHeartFill from "../../../../public/icons/coracao-fill.png"
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

const StyleContainer = styled.div`
    width: 100% ;
    min-width: 136px;

    height: 100%;
    min-height: 200px;
    max-height: 406px ;

    display: flex ;
    flex-direction: column ;
    justify-content: space-evenly ;

    p{
        margin: 0 ;
    }

    @media (max-width : 480px){
        .rate-content{
            display: none ;
        }
    }

`

const ContainerImage = styled.div` 
    width: 100% ;
    height: 70% ;

    position: relative ;

    a {
        width: 100% ;
        height: 100%

    }
    
    img{
        width: 100% ;
        height: 100% ;
    }

    @media (max-width : 480px){
        font-size: ${typography.sm.fontSize} ;
        font-weight: ${typography.sm.fontWeight} ;
    }

    cursor: pointer;

`
const StyleTrending = styled.div`

    width: 38%;
    min-width: 53px ;
    height: 10%;
    min-height: 18px ;

    position: absolute;
    border-radius: 4px ;

    right: 3.75% ;
    top: 3.81%;
    background-color: ${colours.highlight} ;
    color: ${colours.white};

    text-align: center;
`

const ContainerInfo = styled.div`
    width: 100% ;
    height: 29% ;

    display: flex ;
    flex-direction: column ;
    justify-content: space-evenly ;

`
const CategoryContent = styled.div` 

    position: relative ;

    img{
        position: absolute ;
        right: 1% ;
        cursor: pointer;
    }

    .category{
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight} ;
        margin-bottom: 1% ;
    }

    .description {
        font-size: ${typography.paragraphR14.fontSize} ;
        font-weight: ${typography.paragraphR14.fontWeight} ;
        color: ${colours.low_emphasis}
    }

    @media (max-width : 480px){

        .category{
            font-size: ${typography.paragraphS12.fontSize} ;
            font-weight: ${typography.paragraphS12.fontWeight} ;
        }   
        .description {
            font-size: ${typography.paragraphM12.fontSize} ;
            font-weight: ${typography.paragraphM12.fontWeight} ;
            color: ${colours.low_emphasis}
        }
    }

`

const RateContent = styled.div`
    width : 100% ;
    display: flex ;
    gap: 5%;

    span{
        color: ${colours.primary};
        margin-left: 2% ;
        font-size: ${typography.headingM14.fontSize} ;
        font-weight: ${typography.headingM14.fontWeight} ;
    }

    @media (max-width : 899px){ 
     display: none ;    
    }
`

const PriceContent = styled.div` 
    width: 100% ;
    display: flex ;
    gap: 2%;

    .price{
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight} ;
    }

    .price_before{
        font-size: ${typography.paragraphR14.fontSize} ;
        font-weight: ${typography.paragraphR14.fontWeight} ;
        color: ${colours.low_emphasis}
    }

    .rebate{
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight} ;
        color: ${colours.red};
    }

    @media (max-width : 899px){

        .price{
            font-size: ${typography.headingS14.fontSize} ;
            font-weight: ${typography.headingS14.fontWeight} ;
        }

        .price_before{
            font-size: ${typography.sm.fontSize} ;
            font-weight: ${typography.sm.fontWeight} ;
            
        }

        .rebate{
            font-size: ${typography.sm.fontSize} ;
            font-weight: ${typography.sm.fontWeight} ;

        }
    }
`


export interface PropsProductStore {
    _id? : string | undefined,
    brand?: string | undefined,
    category?: string | undefined,
    description: string | undefined,
    price: number | undefined,
    rebate?: number | undefined,
    rate?: number | undefined,
    totalRatings?: number  | undefined,
    urlImage : string | undefined,
    thin : boolean | undefined
}


export const ProductStore = (props : PropsProductStore) => {

    const [like, setLike] = useState(false)

    const nav = useNavigate()
    

    return(
        <StyleContainer>
            <ContainerImage>
                {!props.thin && <StyleTrending>Trending</StyleTrending> }
                 <img onClick={() => nav(`/product?id=${props._id}`)} src = {props.urlImage} alt="produto" /> 
            </ContainerImage>

            <ContainerInfo>
                <CategoryContent>
                    <img src= {like? iconHeartFill : iconHeart} 
                        alt="coracao" 
                        onClick={() => setLike(!like)}/>
                    <p className="category">{props.brand}</p>
                    <p className="description">{props.description}</p>
                </CategoryContent>

                {!props.thin && 
                <RateContent className="rate-content">
                    {props.rate && props.totalRatings  && <Rating rate={props.rate / props.totalRatings }></Rating>}
                    {props.totalRatings && <span>{props.totalRatings} Ratings</span>}
                </RateContent> }

                <PriceContent>
                    <span className="price">
                        ${props.rebate && props.price ? ( props.price * (props.rebate/100)).toFixed(2) : props.price && props.price.toFixed(2)}
                    </span>
                    {props.rebate &&  props.price && <span className="price_before">${props.price.toFixed(2)}</span>}
                    {props.rebate && <span className="rebate">{props.rebate}% OFF</span>}
                </PriceContent>
            </ContainerInfo>
        </StyleContainer>
    )
}