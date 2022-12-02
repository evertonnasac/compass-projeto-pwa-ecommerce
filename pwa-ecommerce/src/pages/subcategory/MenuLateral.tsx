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
    setFilters :  React.Dispatch<React.SetStateAction<Object[]>>
}

export const MenuLateral = ({optionsFilters, setFilters, filters} : MenuLateralProps) => {

    const handleFilters = (key: string, value: string) =>{
        const option = filters.find((option : any) => (option.hasOwnProperty(key) && 
                                option[Object.keys(option)[0]] == value))
        if(option){
            setFilters(filters => filters.filter(( option : any) => !(Object.keys(option)[0] == key && 
            option[Object.keys(option)[0]] == value) ))
            return
        }

        setFilters(filters => [...filters, {[key] : value}])
        
    }

    console.log(filters)

    return(
        <StyleContainer>
            {optionsFilters.map((option : any, index) => {
                return(
                    <AccordianMinusPlus title={Object.keys(option)[0]} key = {index}>
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