import styled from "styled-components";
import { CheckBox } from "../../components/inputs/Checkbox";
import { AccordianMinusPlus } from "../../components/accordians/AccordianMinusPlus";
import { useState } from "react";

const StyleContainer = styled.section` 
    width : 100%;

`

const [filters, setFilters] = useState<Object[]>([])

const handleFilters = (key:string, value:string) =>{
    filters.forEach(item  => {
        item.hasOwnProperty(key) ? setFilters()
    })
}

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
                                <CheckBox 
                                    id={option}
                                    name = {option} 
                                    label = {option} 
                                    disabled={false}
                                    value = {option}
                                    key = {index}
                                />
                            )
                        })}
                    </AccordianMinusPlus>
                )
            })}
        </StyleContainer>
    )
}