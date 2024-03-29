import React from "react"
import styled from "styled-components"
import {btn_primary, btn_outline} from "../../UI/buttons"
import { colours } from "../../UI/colours"


const StyleButtonPrimary = styled.button`
    background-color: ${btn_primary.background_color};
    color: ${btn_primary.color} ;
    border-radius: ${btn_primary.border_radius};
    border-style: none ;
    outline: none ;
    display: flex ;
    align-items: center ;
    justify-content: center ;
    gap: 5px;
    cursor: pointer;
  
    
    &:hover{ 
        background-color: ${colours.primary_tint} ;
    }

    &:active{
        background-color: ${colours.primary};
        border: 2px solid ${colours.primary} ;
        outline-style: none;
    }

    &:focus{
        outline: none ;
    }
`

const StyleButtonSecondary = styled.button`
    background-color: ${btn_outline.background_color} ;
    color: ${btn_outline.color};
    border-radius: ${btn_outline.border_radius} ;
    border: ${btn_outline.border} ;
    display: flex ;
    align-items: center ;
    justify-content: center ;
    gap: 5px;
    

    cursor: pointer;
    
    &:hover{ 
        color: ${colours.primary_tint} ;
    }

    &:active{
        border: 2px solid ${colours.primary_tint} ;
        color: ${colours.primary} ;
        outline-style: none;
    }

    &:focus{
        outline: none ;
    } 
`

interface PropsButton {
type: "primary" | "outline" | "secondary",
    width?: string,
    height?: string,
    size?: "sm" | "lg",
    icon?: string,
    className?: string,
    onclick? : () => void,
    children?: React.ReactNode
    
}

export const Button = (props: PropsButton) => {

    let Component : any

    if(props.type == "primary")
        Component = StyleButtonPrimary
    else if(props.type == "outline")
        Component = StyleButtonSecondary

    return (
        <Component onClick = {props.onclick} className = {props.className ? props.className : ""}  style={{
            "width": (props.width? props.width :  props.size == "sm" ? "150px" : "300px"),
            "height": (props.height? props.height : "30px" ) }} >
               {props.children}
        </Component>
   
    )

}