import styled from "styled-components";
import { CheckBox } from "../../components/inputs/Checkbox";
import { AccordianMinusPlus } from "../../components/accordians/AccordianMinusPlus";

const StyleContainer = styled.section` 
    width : 100%;

`

const listAccordian = [
    
    {
        label: "Size",
        options: [ "Blue","Maroon Red","Crimson Red", "Seinna Pink","Teal","Aquamarine","Off-White","Muave Orange"]

    },
    {
        label: "Color",
        options: [ "Blue","Maroon Red","Crimson Red", "Seinna Pink","Teal","Aquamarine","Off-White","Muave Orange"]

    },
    {
        label: "Brand",
        options: [ "Blue","Maroon Red","Crimson Red", "Seinna Pink","Teal","Aquamarine","Off-White","Muave Orange"]

    },
  
    {
        label: "Price Range",
        options: [ "Blue","Maroon Red","Crimson Red", "Seinna Pink","Teal","Aquamarine","Off-White","Muave Orange"]

    },
    {
        label: "Discount",
        options: [ "Blue","Maroon Red","Crimson Red", "Seinna Pink","Teal","Aquamarine","Off-White","Muave Orange"]

    },
    {
        label: "Avaliability",
        options: [ "Blue","Maroon Red","Crimson Red", "Seinna Pink","Teal","Aquamarine","Off-White","Muave Orange"]

    },
  

]

export const MenuLateral = () => {
    return(
        <StyleContainer>
            {listAccordian.map((title, index) => {
                return(
                    <AccordianMinusPlus title={title.label} key = {index}>
                        {title.options.map((option, index) => {
                            return(
                                <CheckBox id={option}
                                 name = {option} 
                                 label = {option} 
                                 disabled={false}
                                 value = {option}/>
                            )
                        })}
                    </AccordianMinusPlus>
                )
            })}
        </StyleContainer>
    )
}