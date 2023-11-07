import styled from "styled-components";
import { RadioButton } from "../../components/inputs/RadioButton";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import {ModalInferior} from "../../components/modais/modal-inferior/ModalInferior"
 

const StylerContainer = styled.div` 
    
    p{
        color: ${colours.low_emphasis} ;
        font-size: ${typography.headingS14.fontSize} ;
        font-weight: ${typography.headingS14.fontWeight} ;
        width: 85% ;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12) ;
        margin-left: 20px
    }
`

export const Modal = ({open, setClose, children} : {open:boolean, setClose:any, children: React.ReactNode}) =>{
    return(
        <ModalInferior open = {open}>
            {children}
            <p onClick={setClose}>Fechar</p>
        </ModalInferior>
    )
}