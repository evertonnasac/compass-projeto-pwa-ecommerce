import styled from "styled-components";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import { BannerGriffs } from "../../components/banners/BannerGriffs";

const StyleContainer = styled.div ` 
    width: 100% ;
    height: 250px ;

    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: space-evenly ;
    position: relative ;

    p{
        width: 95%;
        margin: 0 ;
        font-size: ${typography.headingS34.fontSize} ;
        font-weight: ${typography.headingS34.fontWeight} ;
    }

    .container-banner {
        width: 95%;
        height: 60%;

        display: flex ;
        justify-content: space-between ;

        & > div {
            width: 13% ;
            height: 100% ;
            background-color: ${colours.accent} ;

            
        }
    }

`
const banners = [
    {
        name: "Zara",
        urlImage: "public/images/banner/griffs/zara.png"
    },
    {
        name: "DeG",
        urlImage: "public/images/banner/griffs/dg.png"
    },
    {
        name: "HeM",
        urlImage: "public/images/banner/griffs/hm.png"
    },
    {
        name: "Channel",
        urlImage: "public/images/banner/griffs/chanel.png"
    },
    {
        name: "Prada",
        urlImage: "public/images/banner/griffs/prada.png"
    },
    {
        name: "Biba",
        urlImage: "public/images/banner/griffs/biba.png"
    }
    
]

export const GriffsCategory = () => {
    return (
        <StyleContainer>
             <p className="title">Shop by Brands</p>
                <div className="container-banner">
                    {banners.map((banner, key) => {
                        return(
                            <div key = {key}>
                                <BannerGriffs  urlImage = {banner.urlImage} width = "100%" height = "100%"/>
                            </div>
                        )
                    })}
                </div>
        </StyleContainer>
    )
}