import { colours } from "../../UI/colours";
import styled from "styled-components";
import { InputText } from "../../components/inputs/Text";
import { useState } from "react";
import { Button } from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

const StyleContainer = styled.section` 
    width: 95% ;
    height: 100vh ;
    margin: 0 auto ;
    display: flex ;
    flex-direction: column ;
    justify-content : space-evenly;
    align-items: center ;

    & > div {
        max-width: 500px ;
    }

    input{
        font-size: 24px ;
       
    }

    p{
        margin: 0 ;
    }

    .title_login{
        font-size: 40px ;
        color: ${colours.primary} ;
        font-weight: 600 ;
    }

    .btn_login{
        margin: 0 auto ;
        max-width: 500px ;
    }

`


const GradeNumbers = styled.div`
    display: grid ;
    grid-template-columns: repeat(3, 1fr) ;
    grid-template-rows: repeat(4, 1fr) ;
    align-items: center ;
    justify-content: center ;
    width: 100%;
    height: 50% ;
    background-color: #F4F4F4 ;

    max-width: 500px ;

    div{
        background-color: #fff ;
        width: 75% ;
        height: 75% ;
        text-align: center ;
        cursor: pointer;
    }

`

export const Register = () => {

    const [number, setNumber] = useState("")
    const nav = useNavigate()

    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {

        setNumber(e.target.value)
    }

    const handleNumberByClick = (e : String) => {
        setNumber(number => number + e)

    }
    
    return (
        <StyleContainer>
            <p className="title_login">Enter your phone number</p>
            <InputText
                name="number"
                placeholder=""
                type="number"
                value={number}
                handleOnChange={handleNumber}
            />
            <Button type="primary" onclick={() => nav(`/newuser?phone=${number}`)} className="btn_login" height="40px" width="95%">Next</Button>
            <GradeNumbers>
                <div onClick={() => handleNumberByClick("1")}>1</div>
                <div onClick={() => handleNumberByClick("2")}>2</div>
                <div onClick={() => handleNumberByClick("3")}>3</div>
                <div onClick={() => handleNumberByClick("4")}>4</div>
                <div onClick={() => handleNumberByClick("5")}>5</div>
                <div onClick={() => handleNumberByClick("6")}>6</div>
                <div onClick={() => handleNumberByClick("7")}>7</div>
                <div onClick={() => handleNumberByClick("8")}>8</div>
                <div onClick={() => handleNumberByClick("9")}>9</div>
                <div></div>
                <div onClick={() => handleNumberByClick("0")}>0</div>
                <div onClick={() => setNumber(number => number.slice(0, -1))}> *</div>
            </GradeNumbers>
        </StyleContainer>
    )
}