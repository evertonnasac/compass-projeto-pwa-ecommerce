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

export const FilterCategory = ({open, setClose} : {open:boolean, setClose:any}) =>{
    return(
        <ModalInferior open = {open}>
            <StylerContainer>
                <p>
                    Sort By
                </p>
                <div>
                    <RadioButton 
                        id="lastproduct"
                        name="filter"
                        value="last"
                        label="Last Product"
                        disabled = {false}
                        onchange = {setClose}
                    />
                    <RadioButton 
                        id="price-lh"
                        name="filter"
                        value="price-lh"
                        label="Price- Low to High"
                        disabled = {false}
                        onchange = {setClose}
                    />
                    <RadioButton 
                        id="price-hl"
                        name="filter"
                        value="price-hl"
                        label="Price- High to Low"
                        disabled = {false}
                        onchange = {setClose}
                    />
                    <RadioButton 
                        id="pop"
                        name="filter"
                        value="pop"
                        label="Popularity"
                        disabled = {false}
                        onchange = {setClose}
                    />
                    <RadioButton 
                        id="costumer"
                        name="filter"
                        value="costumer"
                        label="Customer Ratings"
                        disabled = {false}
                        onchange = {setClose}
                    />
                    <RadioButton 
                        id="default"
                        name="filter"
                        value="costumer"
                        label="No filters"
                        disabled = {false}
                        onchange = {setClose}
                    />
                </div>
            </StylerContainer>
        </ModalInferior>
    )
}