import styled from "styled-components";
import typography from "../../UI/typography";
import { colours } from "../../UI/colours";
import { InputText } from "../../components/inputs/Text";
import { ContainerBack } from "../../components/mobile/HeaderBack";
import { useState } from "react";
import { Button } from "../../components/buttons/Button";
import { registerSale } from "../../hooks/sale/sale";
import { useNavigate } from "react-router-dom";
import { IAddress } from "../../hooks/sale/sale";
import { IUser } from "./Checkout";


const StyleContainer = styled.section` 
    width: 100%;
    min-height: 100vh ;


    @media (min-width: 899px){
        display: none ;
    }

    .btn_contact_mobile{
        position: fixed ;
        bottom: 10px ;
        transform: translateX(-50%);
        left:50% ;
        
    }


`

const StyleContact = styled.div`  
    color : ${colours.low_emphasis};
    width: 90% ;
    margin: 0 auto ;

    .container_contact{
        div{
            margin-bottom: 20px ;
        }
    }

    .title_contact{
        border-bottom: 1px solid   rgba(0, 0, 0, 0.12); 
        padding-bottom: 5px ;
    }

   

`


const StyleAddress = styled.div`  
    color : ${colours.low_emphasis};
    width: 90% ;
    margin: 0 auto ;

    .container_address{
        div{
            margin-bottom: 20px ;
        }
    }
   

    .title_address{
        border-bottom: 1px solid rgba(0, 0, 0, 0.12); 
        padding-bottom: 5px ;
    }

`


interface Props {
    user : IUser
    handleUser : (e : React.ChangeEvent<HTMLInputElement>) => void
    setUser :  React.Dispatch<React.SetStateAction<IUser>>
}

export const ContactMobile = ({user, handleUser, setUser} : Props) => {


    const nav = useNavigate()

    const saveAddressCurrent = () => {

        const address  : IAddress = {
            city : user.city,
            street : user.street,
            state : user.state,
            pinCode : user. pinCode

        }

        localStorage.setItem("address_current", JSON.stringify(address))
        nav("/payment")
    }


    return(
        <StyleContainer>
            <ContainerBack title="Add New Address"/>
            <StyleContact>
                <p className="title_contact">Contact Information</p>
                <div className="container_contact">
                    <InputText
                        name="name"
                        placeholder="Full Name"
                        type="text"
                        handleOnChange={handleUser}
                        value = {user.name}
                    />
                    <InputText
                        name="phone"
                        placeholder="Contact Number"
                        type="text"
                        handleOnChange={handleUser}
                        value = {user.phone}
                    />
                </div>
            </StyleContact>

            <StyleAddress>
                <p className="title_address">Delivery Address</p>
                <div className="container_address">
                    <InputText
                        name="pinCode"
                        placeholder="Pin Code"
                        type="number"
                        value={user.pinCode}
                        handleOnChange = {handleUser}
                    />
                    <InputText
                        name="street"
                        placeholder="Street Address"
                        type="text"
                        value={user.street}
                        handleOnChange = {handleUser}
                    />
                    <InputText
                        name="city"
                        placeholder="City"
                        type="text"
                        value={user.city}
                        handleOnChange = {handleUser}
                    />
                     <InputText
                        name="state"
                        placeholder="State"
                        type="text"
                        value={user.state}
                        handleOnChange = {handleUser}
                    />
                </div>
            </StyleAddress>
            <Button onclick={() => saveAddressCurrent() } type="primary" className="btn_contact_mobile" width = "90%" height="45px" >Save Address</Button>
        </StyleContainer>
      
    )

}