
import {StyleGriffsBox, Title, StyleListCards, BannerCardGriffs } from "./styles"


const banners = [
    {
        name: "Zara",
        urlImage: "/images/banner/griffs/zara.png"
    },
    {
        name: "DeG",
        urlImage: "/images/banner/griffs/dg.png"
    },
    {
        name: "HeM",
        urlImage: "/images/banner/griffs/hm.png"
    },
    {
        name: "Channel",
        urlImage: "/images/banner/griffs/chanel.png"
    },
    {
        name: "Prada",
        urlImage: "/images/banner/griffs/prada.png"
    },
    {
        name: "Biba",
        urlImage: "/images/banner/griffs/biba.png"
    }
    
]

export const GriffsBox = () => {
    return (
        <StyleGriffsBox>
            <Title $color="dark"> Shop by Brands</Title>
                <StyleListCards>
                    {banners.map((banner, key) => {
                        return(
                            <BannerCardGriffs key = {key} $url={banner.urlImage}/>
                        )
                    })}
                </StyleListCards>
        </StyleGriffsBox>
    )
}