import styled from "styled-components";
import heart from "../../../public/icons-header/coracao.png"
import bag from "../../../public/icons-header/bolsa.png"
import profile from "../../../public/icons-header/perfil.png"
import { Context } from "../../Contexts/ContexBag";
import { useContext } from "react";

const Container = styled.div` 

    width: 10% ;
    height: 30% ;
    display: flex;
    justify-content: space-between ;
    
    img{
        cursor: pointer;
    }
`

export const ContainerIcons = () => {

    const {setVisible, getBag, setCurrentBag, currentBag} = useContext(Context)

    const openBag = () =>{
        setCurrentBag(getBag())
        setVisible(visible => !visible)
       
    }
    console.log(currentBag)

    return(
        <Container>
            <img src= {heart} alt="heart" />
            <img src=  {profile} alt="profile" />
            <img src= {bag} alt="bag" onClick={() => openBag()} />
        </Container>
    )
}
