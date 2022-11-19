import styled from "styled-components";
import heart from "../../../public/icons-header/coracao.png"
import bag from "../../../public/icons-header/bolsa.png"
import profile from "../../../public/icons-header/perfil.png"

const Container = styled.div` 

    width: 30% ;
    display: flex;
    justify-content: space-evenly ;

    img{
        cursor: pointer;
    }
`


export const ContainerIcon = () => {
    return(
        <Container>
            <img src= {heart} alt="heart" />
            <img src= {bag} alt="bag" />
            <img src=  {profile} alt="profile" />
        </Container>
    )
}
