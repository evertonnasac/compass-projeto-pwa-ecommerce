import typography from "../../UI/typography";
import { colours } from "../../UI/colours";
import styled from "styled-components";
import { AccordianMinusPlus } from "../../components/accordians/AccordianMinusPlus";
import { AccordianShowHidden } from "../../components/accordians/AccordianShowHidden";
import { ContainerAddress } from "../cart/CartMobile";
import iconAddress from "../../../public/icons/address-sumary-mob.png"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../Contexts/ContexBag";
import { ContainerItensOrderer } from "../cart/CartMobile";
import { InputText } from "../../components/inputs/Text";
import { RadioButton } from "../../components/inputs/RadioButton";
import { Button } from "../../components/buttons/Button";
import { registerSale } from "../../hooks/sale/sale";




const StyleContainer = styled.section` 
    width: 100% ;
    margin-bottom: 100px ;

    .btn_payment{
        position: fixed ;
        bottom: 10px ;
    }
    
`


export const PaymentsMobile = () => {

    const {currentBag, setCurrentBag, getBag} = useContext(Context)
    const [payment, setPayment] = useState("")

    useEffect(() => {
        setCurrentBag(getBag())
    }, [])



    return (
        <StyleContainer>
             <ContainerAddress >
                <p className="title_address">Deliver To</p>
                <div className="container_address">
                    <div className="resume_address">
                        <p>Ruby S Snively</p>
                        <p>1460  Jenric Lane, Ashmor Drive </p>
                    </div>
                    <img src={iconAddress} alt = "Alterar endereço" />
                </div>
            </ContainerAddress>
            <AccordianShowHidden title="Product Datails">
                <ContainerItensOrderer>
                    {currentBag.products.map((item) => {
                        return  <div className="container_card">
                                    <img src={item.urlPhoto} alt="Imagem do produto" />
                                    <div className="info_orderer_mobile">
                                        <p className="date">09 Dec</p>
                                        <p className="desc">{item.brand}</p>
                                        <p className="desc">{item.description}</p>
                                    </div>
                                </div>
                    })}          
                </ContainerItensOrderer>
            </AccordianShowHidden>
            <AccordianShowHidden title="Select Payment Method">
                <AccordianMinusPlus title="Debit Card/Credit Card">
                    <InputText
                        name="card"
                        placeholder="Number Card"
                        type="text"
                        handleOnChange={(e) => setPayment(e.target.value)}
                        value = {payment}
                    />
                </AccordianMinusPlus>
                <AccordianMinusPlus title="UPI">
                    <RadioButton 
                        label = "Google Play"
                        disabled = {false}
                        id = "gp"
                        name="payment"
                        value="gp"
                    />
                    <RadioButton 
                        label = "Phone Pe"
                        disabled = {false}
                        id = "pp"
                        name="payment"
                        value="pp"
                    />
                    <RadioButton 
                        label = "Paytm"
                        disabled = {false}
                        id = "pt"
                        name="payment"
                        value="pt"
                    />
                    <InputText
                        name="upi"
                        placeholder="Enter your UPI Id"
                        type="text"
                        handleOnChange={(e) => setPayment(e.target.value)}
                        value = {payment}
                    />
                </AccordianMinusPlus>
            </AccordianShowHidden>
            <Button onclick={() => registerSale(payment)} type="primary" className="btn_payment" height="45px" width="90%">Pay Now</Button>
        </StyleContainer>
    )
}