import { ReactNode } from "react"
import styled from "styled-components"
import {colours} from "../../UI/colours"


interface LabelProps {
    disabled: boolean
}

const Label = styled.label<LabelProps>`
    margin-bottom: 10px ;
    display: flex;
    color: ${props => props.disabled ? colours.light_text : colours.low_emphasis};
    font-weight: 500 ;
    cursor:  ${props => props.disabled ? "text": "pointer" };

    input[type = radio] {
        display : none;
    }

    input[type = radio]:disabled {
       cursor: text;
    }

    input[type = radio]:disabled + div {
        border-color: ${colours.light_text} ;
        cursor : text
    }


    input[type = radio]:checked + div > div {
        display: block ;
    }


    .border{
        width: 18px ;
        height: 18px ;
        border-radius: 100% ;
        border: 2px solid ${colours.primary} ;
        position: relative ;
        margin-right: 10px ;
        cursor: pointer;

        .center{
            display: none ;
            width: 70% ;
            height: 70% ;
            border-radius: 100% ;
            background-color: ${colours.primary} ;
            position: absolute ;
            transform: translate(-50%, -50%) ;
            top: 50%;
            left: 50% ;
            cursor: pointer;
        }

    }

`

interface RadioProps{
    disabled : boolean,
    name: string,
    id: string 
    value: string | number
    label?: string | ReactNode,
    onchange?: any,
    children: React.ReactNode

}
export const RadioButton = ({disabled, id, name, value, label, onchange, children} : RadioProps) =>{

    return(
       <Label disabled = {disabled}>
            {disabled ?
            <input type="radio" id = {id} name = {name} value = {value} onChange = {() => onchange(false)} disabled/> :  
            <input type="radio" id = {id} name = {name} value = {value} onChange = {() => onchange(false)}/>}
            <div className="border">
            <div className="center"></div>
            </div>
            {label || children}
       </Label>
    )
}