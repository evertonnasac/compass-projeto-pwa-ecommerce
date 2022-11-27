import { ReactNode } from "react";
import styled from "styled-components";


interface Prop{
    open: boolean
}

const StyleContainer = styled.div<Prop>` 

    position: fixed ;
    top: 0;
    width: 99.6vw ;
    height: 100vh ;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props => props.open ? "block" : "none"} ;
    z-index: 100 ;
    overflow: hidden ;

`

const Content = styled.div` 
    width: 99% ;

    position: absolute ;
    bottom: 0 ;
    transform: translateX(-50%) ;
    left: 50%;
    
    border-radius: 24px 24px 0 0 ;
    background-color: white ;
    box-sizing: border-box ;
    padding: 0 2% ;
`
interface PropModal extends Prop {
    children: ReactNode
}

export const ModalInferior = ({open, children}: PropModal) => {
    return(
        <StyleContainer open = {open}>
            <Content>
                {children}
            </Content>
        </StyleContainer>
    )
}

