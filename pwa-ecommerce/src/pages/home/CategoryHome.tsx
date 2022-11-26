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

    p{
        margin: 0 ;
    }

    .title{
        color: ${colours.white};
        margin: 0 ;
        font-weight: 600;
        font-size: 34px;
        width: 95% ;
    }

    .body {
        width: 95%;
        height: 70%;

        display: flex ;
        flex-wrap: wrap ;
        justify-content: space-between ;

        .card_banner{ 
            width: 20% ;
            height: 100% ;
            position: relative ;

            .name{
                position: absolute ;
                bottom: 7% ;
                left: 4% ;
                font-weight: 600;
                font-size: 20px;
                color : ${colours.high_emphasis} ;
            }

            .banner{

                img{
                    height: 100% ;
                    width: 100% ;
                }
            }     
        }

    }

    @media (max-width : 899px){

        height: 600px ;

        .title{
            font-size: 24px ;
        }

        .body{
            align-content: space-between ;
            height: 80% ;
            
            .card_banner{
                width: 45% ;
                height: 45% ;
            }
        }
    }

    @media (max-width : 500px){
        height: auto;

        .title{
            text-align: center ;
            margin: 15px 0 15px 0
        }
        .body{
            align-items: center ;
              
            .card_banner{
                width: 60%;
                margin-bottom: 25px ;
                margin: 15px auto ;
              
                .banner{
                    height: 250px ;
                }
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
                <div className="body">
                    {banners.map((banner, key) => {
                        return(
                            <div key = {key} className = "card_banner">
                                <p className="name">{banner.name}</p>
                                <Banner  
                                    urlImage = {banner.urlImage} 
                                    width = "100%" 
                                    height = "100%"
                                    className="banner"/>
                            </div>
                        )
                    })}
                </div>
        </StyleContainer>
    )
}