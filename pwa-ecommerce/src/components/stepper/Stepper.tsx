import styled from "styled-components";
import { colours } from "../../UI/colours";
import { Context } from "../../Contexts/ContextStepper";
import { useState, useContext } from "react";

const border = `1.5px solid ${colours.primary}` 

const StyleStepper = styled.div` 
    width: 79px;
    height: 30px ;
    border-radius: 5px;
    display:  flex;
   

    & button:first-child{
        border-radius: 4px 0px 0px 4px;
        border-left: ${border}; 
        
    }

    & button:last-child{
        border-radius: 0px 4px 4px 0px;
        border-right:  ${border}; 
        font-size: 18px ;

    }
`

const StepperButton = styled.button` 
    width: 33% ;
    height: 30px;
    border-style: none;
    border-bottom:  ${border} ;
    border-top:  ${border} ;
    background-color: ${colours.white};
    cursor: pointer;

    &:active{
        background-color: ${colours.primary} ;
    }

    &:active{
        color: ${colours.white} ;
    }

`
const StepperValue = styled.div` 
    width: 33% ;
    height: 30px ;
    color: ${colours.high_emphasis} ;
    line-height: 30px;
    text-align: center ;
    border-top:  ${border};
    border-bottom:  ${border} ;
    box-sizing: border-box ;
   
`

export const Stepper = ({className} : {className:string}) => {

    const {qtd, setQtd, setOperation} = useContext(Context)


    const addItem = (item: number) => {
        setOperation("plus")
        setQtd(item + 1)
    }

    const removeItem = (item: number) =>{
        if(item > 1){
            setOperation("minus")
            setQtd(item - 1)
        }
    }

    return(
        <StyleStepper className={className}>
            <StepperButton onClick={() => removeItem(qtd)}> &#8212; </StepperButton>
            <StepperValue>{qtd}</StepperValue>
            <StepperButton onClick={() => addItem(qtd)}>&#43;</StepperButton>
        </StyleStepper>
    )

}
