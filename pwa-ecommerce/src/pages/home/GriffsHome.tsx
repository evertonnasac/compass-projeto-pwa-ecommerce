import styled from "styled-components";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import { BannerGriffs } from "../../components/banners/BannerGriffs";

const StyleContainer = styled.section ` 
    width: 98% ;
    height: 250px ;
    color: #171520;


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


    .container_card {
        width: 100%;
        height: 60%;

        display: flex ;
        justify-content: space-between ;
        flex-wrap: wrap ;

        .card_griff {
            width: 13% ;
            height: 100% ;
            background-color: ${colours.accent} ;  
        }
    }

    @media (max-width: 899px){
        height: 500px;
        p{
            font-size: 20px ;
        }

        .container_card{
            height: 75% ;
            
            .card_griff{
                width: 30% ;
                height: 40% ;
                
            }
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

export const GriffsHome = () => {
    return (
        <StyleContainer>
             <p className="title">Shop by Brands</p>
                <div className="container_card">
                    {banners.map((banner, key) => {
                        return(
                            <div key = {key} className = "card_griff">
                                <BannerGriffs  
                                urlImage = {banner.urlImage} 
                                width = "100%" 
                                height = "100%"/>
                            </div>
                        )
                    })}
                </div>
        </StyleContainer>
    )
}