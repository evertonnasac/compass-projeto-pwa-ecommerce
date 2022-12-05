import styled from "styled-components"
import typography from "../../UI/typography"


const ContainerInput = styled.div`  
    width: 100% ;
    height: 80px ;

    input{
        background-color: #F1F1F1;
        border: none ;
        width: 100% ;
        height: 50% ;
        padding-left : 5%;
    }

    label {
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight} ;
    }
`

interface TextsProps {
    type: string,
    text: string,
    name: string,
    placeholder : string,
    value: string,
    handleOnChange: (e : React.ChangeEvent<HTMLInputElement>) => void
    onKey? : (e: React.KeyboardEvent<HTMLInputElement>) => void
    
}

export const Text = ({type, text, name, placeholder, handleOnChange, value, onKey} : TextsProps)  => {

    return(
        <ContainerInput>
            <label htmlFor={name}>{text}:</label>
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

