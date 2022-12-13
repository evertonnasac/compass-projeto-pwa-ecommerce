import { ContactMobile } from "./ContactMobile"
import { ContactDesktop } from "./ContactDesktop"
import styled from "styled-components"



const StyleContainer = styled.main`  
    width: 100% ;

`



export const Contact = () => {


    return(
        <StyleContainer>
           <ContactDesktop/>
           <ContactMobile/>
        </StyleContainer>
    )
 
}