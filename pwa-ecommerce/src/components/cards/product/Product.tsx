import styled from "styled-components";
import {PhotoContainer, StylePhoto, StyleBtnTrending} from "./Photo" 
import { Ratings } from "./Rating";
import * as S from "./Tags"


const StyleCardProduct = styled.div<{$width:string, $height: string}>`
    width : ${props => props.$width} ;
    height:  ${props => props.$height};
`

type Props = {
    _id: string,
    title: string,
    subtitle: string,
    price: string
    ratings?: number,
    sumGrade?: number,
    discount? : boolean,
    urlImage : string | undefined,
    $width: string,
    $height: string,
}

export const CardProduct = (props : Props) => {
    <StyleCardProduct $height={props.$height} $width={props.$width}>
        <PhotoContainer>
            <StylePhoto src={props.urlImage} alt="Foto do produto"/>
            {props.ratings && props.sumGrade  && props.ratings / props.sumGrade > 4 && <StyleBtnTrending/>}
        </PhotoContainer>
        <S.StyleTitle>{props.title}</S.StyleTitle>
        <S.StyleSubTitle>{props.subtitle}</S.StyleSubTitle>
        {props.ratings && props.sumGrade  && <Ratings rate={props.ratings / props.sumGrade }></Ratings>}
    </StyleCardProduct>
}