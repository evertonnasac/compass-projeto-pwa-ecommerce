import styled from "styled-components";
import { RadioButton } from "../../components/inputs/RadioButton";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";

interface Prop{
    open: boolean
}

const StylerContainer = styled.div<Prop>` 

    position: fixed ;
    top: 0;
    width: 99.6vw ;
    height: 100vh ;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props => props.open ? "bloc" : "none"} ;
    z-index: 100 ;
    
    
    p{
        color: ${colours.low_emphasis} ;
        font-size: ${typography.headingS14.fontSize} ;
        font-weight: ${typography.headingS14.fontWeight} ;
        width: 85% ;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12) ;
        margin-left: 20px
    }

    .content{
        height: 200px;
        width: 95% ;

        position: absolute ;
        bottom: -2px ;
        transform: translateX(-50%) ;
        left: 50%;
        
        border-radius: 24px 24px 0 0 ;
        background-color: white ;
        margin: 0 2% 2% 0 ;
        box-sizing: border-box ;
        padding: 0 2% 2% 2% ;
    
    }

`

export const FilterCategory = ({open, setClose} : {open:boolean, setClose:any}) =>{
    return(
        <StylerContainer open = {open}>
            <div className="content">
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
                </div>
            </div>
        </StylerContainer>
    )
}