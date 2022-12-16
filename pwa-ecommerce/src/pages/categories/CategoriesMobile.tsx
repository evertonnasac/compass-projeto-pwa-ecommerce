import styled from "styled-components";
import imgHandbags from "../../../public/images/categories/handbags.png"
import imgsSunglass from "../../../public/images/categories/sunglass.png"
import imgApparels from "../../../public/images/categories/apparels.png"
import imgFrangance from "../../../public/images/categories/fragrance.png"
import imgSkincare from "../../../public/images/categories/skincare.png"
import { ContainerBack } from "../../components/mobile/HeaderBack";
import { useNavigate } from "react-router-dom";
import { BottonNavigate } from "../../components/mobile/BottonNavigate";


const StyleContainer = styled.section` 
    width: 100% ;
    height: 100vh;
    

`
const ContainerImages = styled.section` 
    height: 80% ;
    width: 95% ;

    display: flex ;
    flex-direction: column ;
    justify-content: space-around ;
    align-items: center ;


    img{
        width: 95% ;
        height: 20% ;
        cursor: pointer ;
    
    }

`
 


export const CategoriesMobile = () => {

    const nav = useNavigate()

    return(
        <StyleContainer>
            <ContainerBack title="Categories"/>
            <ContainerImages>
                <img src={imgHandbags} alt="imagem handbags" onClick={()=>nav("/category?name=handbags")}  />
                <img src={imgsSunglass} alt="imagem sunglass"  onClick={()=>nav("/category?name=sunglass")}/>
                <img src={imgApparels} alt="imagem apparels" onClick={()=>nav("/notfound")}  />
                <img src={imgFrangance} alt="imagem fragrance"  onClick={()=>nav("/notfound")}/>
                <img src={imgSkincare} alt="imagem skincare" onClick={()=>nav("/notfound")} />
            </ContainerImages>
            <BottonNavigate/>
        </StyleContainer>
    )
}