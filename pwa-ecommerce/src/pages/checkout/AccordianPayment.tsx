import styled from "styled-components";
import { AccordianShowHidden } from "../../components/accordians/AccordianShowHidden";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import { RadioButton } from "../../components/inputs/RadioButton";
import iconAmazon from "../../../public/images/payment/amazon.png"
import iconApple from "../../../public/images/payment/apple.png"
import iconCart from "../../../public/images/payment/card.png"
import iconUpi from "../../../public/images/payment/upi.png"
import { InputText } from "../../components/inputs/Text";
import { useState } from "react";
import { Button } from "../../components/buttons/Button";
import { registerSale } from "../../hooks/sale/sale";
import { IUser } from "./Checkout";
import { IAddress } from "../../hooks/sale/sale";
import { useNavigate } from "react-router-dom";

const StyleContainer = styled.div` 
    width: 100%;
    margin-bottom: 50px ;
    
`
const ContainerCards = styled.div`  
    width: 100% ;
    display: flex ;
    justify-content: space-between ;
    margin-top: 20px ;

    & label{
        width: 20% ;
        height: 150px ;
        border: 1px solid #E3E3E3 ;
        border-radius:16px;
        flex-direction: column ;
        gap: 10%;
        padding: 2% ;

        p{
            font-size: 16px ;
            margin: 0 ;
           
        }

        .card_payment{

            img {
                width: 60% ;
                height: 50px ;
            }
        }              
    }

`

const ContainerInput = styled.div`  
    width: 60% ;
    height: 50px ;

`

interface Props {
    user : IUser
}

export const AccordianPayment = ( {user} : Props) => {
    
    const [payment, setPayment] = useState("")

    const nav = useNavigate()

    const saveAddressCurrent = () => {

        const address  : IAddress = {
            city : user.city,
            street :user.street,
            state : user.state,
            pinCode : user.pinCode
        }

        localStorage.setItem("address_current", JSON.stringify(address))
        registerSale(payment)
        nav("/home")
        setPayment("")
    }

    return(
        <StyleContainer>
            <AccordianShowHidden title="Payments">
            <ContainerCards>
                <RadioButton
                    disabled = {false}
                    name="pay"
                    value="amazon"
                    id="amazon" >
                        <div className="card_payment">
                            <img src = {iconAmazon}  />
                        </div>
                        <p>Amazon Pay</p>
                </RadioButton>
                <RadioButton
                    disabled = {false}
                    name="pay"
                    value="apple"
                    id="apple" >
                        <div className="card_payment">
                            <img src = {iconApple}  />
                        </div>
                        <p>Apple Pay</p>
                </RadioButton>
                <RadioButton
                    disabled = {false}
                    name="pay"
                    value="cart"
                    id="cart" >
                        <div className="card_payment">
                            <img src = {iconCart}  />
                        </div>
                        <p>Debit/Credit Card</p>
                </RadioButton>
                <RadioButton
                    disabled = {false}
                    name="pay"
                    value="ups"
                    id="ups" >
                        <div className="card_payment">
                            <img src = {iconUpi}  />
                        </div>
                        <p>UPI Pay</p>
                </RadioButton>
            </ContainerCards>
            <ContainerInput>
                <InputText
                    name="card"
                    type="number"
                    placeholder="Enter You Card"
                    value={payment}
                    handleOnChange = {(e) => setPayment(e.target.value)}
                />
            </ContainerInput>
            </AccordianShowHidden>
            <Button onclick={() => saveAddressCurrent()} type="primary" size="sm">Next</Button>
        </StyleContainer>
    )
}
