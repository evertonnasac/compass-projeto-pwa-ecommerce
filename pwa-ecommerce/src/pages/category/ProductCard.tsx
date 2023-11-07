import * as Tag from "../../components/cards/product/Tags"
import * as Photo from "../../components/cards/product/Photo"
import {Ratings} from "../../components/cards/product/Rating"
import {StyleCardProduct} from "./styles"
import {useNavigate} from "react-router-dom"


export interface PropsProductCard {
    _id? : string | undefined,
    brand?: string | undefined,
    category?: string | undefined,
    description: string | undefined,
    price: number | undefined,
    rebate?: number | undefined,
    rate?: number | undefined,
    totalRatings?: number  | undefined,
    urlImage : string | undefined,
}

export const ProductCartd = (props : PropsProductCard) => {

    const nav = useNavigate()

    return (
        <StyleCardProduct  onClick={() => nav(`/product?id=${props._id}`)}>
            <Photo.PhotoContainer>
                <Photo.StylePhoto src={props.urlImage} />
                {props.rate && props.totalRatings && (props.rate / props.totalRatings > 4 && 
                <Photo.StyleBtnTrending>Trending</Photo.StyleBtnTrending>)}
            </Photo.PhotoContainer>
            <Tag.StyleTitle>{props.brand}</Tag.StyleTitle>
            <Tag.StyleSubTitle>{props.description}</Tag.StyleSubTitle>
            {props.rate && props.totalRatings  && <Ratings rate={props.rate / props.totalRatings }></Ratings>}
            <Tag.PriceBox>
                <Tag.StyleMainPrice>{Number(props.price).toFixed(2)}R$</Tag.StyleMainPrice>
                <Tag.StylePriceWithDiscount>
                    {props.price && props.rebate && Number(props.price - (props.rebate)).toFixed(2)}R$
                </Tag.StylePriceWithDiscount>
                <Tag.StyleDiscount>{props.rebate}% OFF</Tag.StyleDiscount>
            </Tag.PriceBox>
        </StyleCardProduct>
    )
}