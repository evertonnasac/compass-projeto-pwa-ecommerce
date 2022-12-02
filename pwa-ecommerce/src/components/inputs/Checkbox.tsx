import styled from "styled-components";
import { colours } from "../../UI/colours";
import iconCheck from "../../../public/icons-inputs/check.png"


interface LabelProp {
    disabled: boolean
}

const Label = styled.label<LabelProp>`

    display: flex ;
    align-items: center ;
    margin-bottom: 10px ;
    color: ${props => props.disabled? colours.light_text : colours.low_emphasis};
    cursor: ${props => props.disabled? "text": "pointer"}; ;

    input[type = checkbox] {
        display: none ;
    }

    input[type = checkbox]:disabled + div{
        border-color: ${colours.light_text} ;
        cursor: text ;
    }


    input[type = checkbox]:checked + div {

        background-color : ${colours.primary};
        position: relative ;

        img{
            display: block ;
            position: absolute ;
            transform: translate(-50%,-50%) ;
            top: 50%;
            left: 50% ;
            width: 80% ;
            height: 80% ;

        }
    }


    div{
        height: 18px;
        width: 18px ;
        background-color: ${colours.white};
        border: 2px solid ${colours.low_emphasis};
        border-radius: 2px ;
        margin-right: 10px;
        

        img{
            display: none ;
        }
       
    }
`

interface CheckProp{
    label : string
    disabled : boolean
    id: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<Element>) => void
}



export const CheckBox = ({label,disabled, id, name, value, onChange} : CheckProp) => {
    return (
        <Label disabled = {disabled}>
            {disabled?  <input type="checkbox" id = {id} name = {name} value = {value} disabled /> :  
                       <input type="checkbox" id = {id} name = {name} value = {value} onChange={onChange} />}
            <div><img src= {iconCheck}/></div>
            {label}
        </Label>
    )
}