import styled from "styled-components";


export const TitleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
export const PriceBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const StyleTitle = styled.p`
    font-size: ${({theme}) => theme.typography.paragraphR16.fontSize} ;
    font-weight: ${({theme}) => theme.typography.paragraphR16.fontWeight} ;
    margin: 0;

`

export const StyleSubTitle = styled.p`
    font-size: ${({theme}) => theme.typography.paragraphR14.fontSize} ;
    font-weight: ${({theme}) => theme.typography.paragraphR14.fontWeight} ;
    color: ${({theme}) => theme.colours.low_emphasis};
    margin: 0;

`

export const StyleMainPrice = styled.p`
    font-size: ${({theme}) => theme.typography.paragraphR14.fontSize} ;
    font-weight: ${({theme}) => theme.typography.paragraphR14.fontWeight} ;
    margin: 0;
`
export const StylePriceWithDiscount = styled.p`
    font-size: ${({theme}) => theme.typography.paragraphR14.fontSize} ;
    font-weight: ${({theme}) => theme.typography.paragraphR14.fontWeight} ;
    color: ${({theme}) => theme.colours.low_emphasis};
    margin: 0;
`
export const StyleDiscount = styled.p`
    font-size: ${({theme}) => theme.typography.paragraphR16.fontSize} ;
    font-weight: ${({theme}) => theme.typography.paragraphR16.fontWeight} ;
    color: ${({theme}) => theme.colours.red};
    margin: 0;
`


