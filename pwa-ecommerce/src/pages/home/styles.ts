import styled from "styled-components";
import { CustomBanner } from "../../components/banners/styles";


export const Main = styled.main`
    width: 100%;
    margin: 0 auto;
    overflow : hidden;
`

export const Title = styled.p<{$color: "white" | "dark"}>`
    color: ${props=> props.$color == "white" ? props.theme.colours.white : props.theme.colours.dark};
    font-weight: 600;
    font-size: 4vw;
    align-self: flex-start;
   

`
export const StyleListCards = styled.div` 
    width: 100%;
    display: flex ;
    justify-content: space-evenly ;
    align-items: center ;
    flex-wrap: wrap;
    row-gap: 25px;
    
`
export const StyleArrivalsCard = styled.div`
    width: 23% ;
    height: 370px ;

`
export const BannerWrapper = styled.div`
    width: 95%;
    margin: 0 auto;

`
export const StyleCategoriesBox = styled.section`
    width: 100% ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-around ;
    align-items: center;
    background-color: ${({theme}) => theme.colours.primary} ;
    padding: 25px 10px;
`

export const BannerCardCategory = styled(CustomBanner)`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 20%;
    height: 220px;
    background-size: cover;
    
    @media (max-width: ${({theme}) => theme.screen.mobile_max}) {
        width: 35% ;
    }

    @media (max-width: ${({theme}) => theme.screen.mobile_mid}) {
        width: 40% ;
        height: 170px;
    }

`
export const StyleGriffsBox = styled(StyleCategoriesBox) `
    background-color: white;

`
export const BannerCardGriffs = styled(CustomBanner)`
    width: 10%;
    height: 80px;
    max-width: 90px;
    background-size: 70%;
    background-color: ${({theme}) => theme.colours.accent};

    @media (max-width: ${({theme}) => theme.screen.large}) {
        margin: 0 10%;
        min-width: 65px;
    }
   
`
