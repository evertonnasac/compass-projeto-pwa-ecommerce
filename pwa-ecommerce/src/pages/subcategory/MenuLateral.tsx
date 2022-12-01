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

interface MenuLateralProps {
    optionsFilters : Array<Object>
}

export const MenuLateral = ({optionsFilters} : MenuLateralProps) => {
    return(
        <StyleContainer>
            {optionsFilters.map((option : any, index) => {
                return(
                    <AccordianMinusPlus title={Object.keys(option)[0]} key = {index}>
                        {option[Object.keys(option)[0]].map((option : string, index:number) => {
                            return(
                                <CheckBox id={option}
                                 name = {option} 
                                 label = {option} 
                                 disabled={false}
                                 value = {option}
                                 key = {index}/>
                            )
                        })}
                    </AccordianMinusPlus>
                )
            })}
        </StyleContainer>
    )
}