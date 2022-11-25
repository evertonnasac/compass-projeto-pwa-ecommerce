import { useState } from "react";
import styled from "styled-components";

const StylerContainer = styled.div`  
    width: 100% ;
    height: 100% ;

    display: flex ;
    flex-direction: column ;
    justify-content: space-evenly ;
    align-items: center ;

    img{
        border-radius: 16px;
    }

    
    .bigPhoto{
        width: 100% ;
        height: 80% ;

        img{
            width: 100% ;
            height: 100% ;
        }
        
    }
    
    .otherPhotos{
        width: 80% ;
        height: 15% ;
        display: flex ;
        justify-content: space-evenly ;

        img{
            width: 20% ;
            height: 100%;
            cursor: pointer;
        }
    }

    @media (max-width: 899px){
        .otherPhotos{
            display: none ;
        }
    }

`
interface PropsImage {
    urlPrincipal: string,
    arrayUrl: Array<string>

}
export const PhotoProduct = ({urlPrincipal, arrayUrl} : PropsImage) => {
    
    const [urlPhoto, setUrlPhoto] = useState(urlPrincipal)

    return(
        <StylerContainer>
            <div className="bigPhoto">
                <img src={urlPhoto} alt = "Foto do produto"/>
            </div>
            <div className="otherPhotos">
                {arrayUrl.map((url, index) => {
                    return(
                        <img src= {url} alt = "foto do produto" key={index} onClick = {() => setUrlPhoto(url)}/>
                    )
                })}
            </div>
         </StylerContainer>
    ) 

}