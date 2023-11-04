import {StyleCategoriesBox, Title, StyleListCards, BannerCardCategory} from "./styles" 

const banners = [
    {
        name: "Personal Care",
        urlImage: "/images/banner/cat-personalcare.png"
    },
    {
        name: "HandleBags",
        urlImage: "/images/banner/cat-handbag.png"
    },
    {
        name: "Wrist Watches",
        urlImage: "/images/banner/cat-watches.png"
    },
    {
        name: "Sun Glasses",
        urlImage: "/images/banner/cat-sunglass.png"
    }
    
]

export const CategoriesBox = () => {
    return (
        <StyleCategoriesBox>
             <Title $color="white"> Handpicked Collections</Title>
                <StyleListCards>
                    {banners.map((banner, key) => {
                        return(
                            <BannerCardCategory key = {key} $url={banner.urlImage}>
                                <p>{banner.name}</p>
                            </BannerCardCategory>
                        )
                    })}
                </StyleListCards>
        </StyleCategoriesBox>
    )
}