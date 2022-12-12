import styled from "styled-components";
import { CheckBox } from "../../components/inputs/Checkbox";
import { AccordianMinusPlus } from "../../components/accordians/AccordianMinusPlus";
import { useState } from "react";

const StyleContainer = styled.section` 
    width : 100%;

`
interface MenuLateralProps {
    optionsFilters : Array<Object>,
    filters: Array<Object>,
    onFilters : boolean
    setFilters :  React.Dispatch<React.SetStateAction<Object[]>>
    setOnFilters : React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuLateral = ({optionsFilters, setFilters, filters, setOnFilters, onFilters} : MenuLateralProps) => {

    const handleFilters = (key: string, value: string) =>{
        const option = filters.find((option : any) => 
        (option.hasOwnProperty(key) && option[Object.keys(option)[0]] == value))

        if(option){
            setFilters(filters => filters.filter(( option : any) => 
            !(Object.keys(option)[0] == key && option[Object.keys(option)[0]] == value) ))
            
            !onFilters && setOnFilters(true)
            return
        }

        setFilters(filters => [...filters, {[key] : value}])
        !onFilters && setOnFilters(true)
        
    }

    return(
        <StyleContainer>
            {optionsFilters.map((option : any, index) => {
                return(
                    <AccordianMinusPlus 
                        title={Object.keys(option)[0][0].toUpperCase() + Object.keys(option)[0].substring(1)} 
                        key = {index}>
                        {option[Object.keys(option)[0]].map((value : string, index:number) => {
                            return(
                                <CheckBox 
                                    id={value}
                                    name = {value} 
                                    label = {value} 
                                    disabled={false}
                                    value = {value}
                                    key = {index}
                                    onChange = {(e) => {
                                        Object.keys(option)[0] == "brand" ? 
                                            handleFilters(Object.keys(option)[0], value):
                                            handleFilters(`attributes.${Object.keys(option)[0]}`, value)
                                        }
                                    }
                                />
                            )
                        })}
                    </AccordianMinusPlus>
                )
            })}
        </StyleContainer>
    )
}