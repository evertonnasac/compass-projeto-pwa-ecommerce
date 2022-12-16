import styled from "styled-components";
import imgNotFound from "../../../public/icons/404.png"
import { ContainerBack } from "../mobile/HeaderBack";


const Container = styled.div` 
    width: 100% ;
    height: 100% ;

    position: relative ;

    @media (max-width : 899px){
        height: 100vh ;
    }

    .notfound{
        width: 50% ;
        height: 50% ;

        position: absolute ;
        transform: translate(-50%, -50%);
        left: 50% ;
        top: 50%
    }

`

export const NotFound = () => {

    return(
        <Container>
            <ContainerBack title="Not Found"/>
            <img className="notfound" src={imgNotFound}/>
        </Container>
    )
}