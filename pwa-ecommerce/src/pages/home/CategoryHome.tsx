import styled from "styled-components";
import { colours } from "../../UI/colours";
import { Banner } from "../../components/banners/Banner";

const StyleContainer = styled.div ` 
    width: 100% ;
    height: 350px ;

    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: space-evenly ;
    position: relative ;
    background-color: ${colours.primary} ;

    @media (max-width : 899px){
        height: auto ;
        padding: 5% 5% ;
        .title{
            display: none ;
        }

    
    }

    p{
        margin: 0 ;
    }


    & > p{
        color: ${colours.white};
        margin: 0 ;
        font-weight: 600;
        font-size: 34px;
        width: 95% ;
    }

  
    .container-banner {
        width: 95%;
        height: 70%;

        display: flex ;
        flex-wrap: wrap ;
        justify-content: space-between ;

        & > div {
            width: 20% ;
            height: 100% ;
            position: relative ;

            img{
                height: 100% ;
                width: 100% ;
            }
        }

        p{
            position: absolute ;
            bottom: 7% ;
            left: 4% ;
            font-weight: 600;
            font-size: 20px;
            color : ${colours.high_emphasis} ;
        }

        @media (max-width : 899px){


            & > div{
                width: 45% ;
                margin-bottom: 20px ;
                
            }

            p{
                display: none ;
            }
        }
    }

`
const banners = [
    {
        name: "Personal Care",
        urlImage: "public/images/banner/cat-personalcare.png"
    },
    {
        name: "HandleBags",
        urlImage: "public/images/banner/cat-handbag.png"
    },
    {
        name: "Wrist Watches",
        urlImage: "public/images/banner/cat-watches.png"
    },
    {
        name: "Sun Glasses",
        urlImage: "public/images/banner/cat-sunglass.png"
    }
    
]

export const CategoryHome = () => {
    return (
        <StyleContainer>
             <p className="title">Handpicked Collections </p>
                <div className="container-banner">
                    {banners.map((banner, key) => {
                        return(
                            <div key = {key}>
                                <p className="name">{banner.name}</p>
                                <Banner  urlImage = {banner.urlImage} width = "100%" height = "100%"/>
                            </div>
                        )
                    })}
                </div>
        </StyleContainer>
    )
}