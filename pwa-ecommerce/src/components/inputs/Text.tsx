import styled from "styled-components"
import typography from "../../UI/typography"

interface IInput {
    text? : string
}

const ContainerInput = styled.div<IInput>`  
    width: 100% ;
    height: ${props => props.text ? "80" : "40px"} ;

    input{
        background-color: #F1F1F1;
        border: none ;
        width: 100% ;
        height: ${props => props.text ? "50%" : "100%"} ; ;
        padding-left : 5%;
        box-sizing: border-box ;
    }

    label {
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight} ;
    }
`

interface TextsProps {
    type: string,
    text?: string,
    name: string,
    placeholder : string,
    value: string,
    handleOnChange: (e : React.ChangeEvent<HTMLInputElement>) => void
    onKey? : (e: React.KeyboardEvent<HTMLInputElement>) => void
    
}

export const InputText = ({type, text, name, placeholder, handleOnChange, value, onKey} : TextsProps)  => {

    return(
        <ContainerInput text={text && text}>
            <label htmlFor={name}>{text}</label>
            <input 
             type={type}
             name={name} 
             placeholder={placeholder}
             onChange = {handleOnChange}
             value = {value}
             onKeyUp = {onKey}
             />
        </ContainerInput>
  
    )
}

