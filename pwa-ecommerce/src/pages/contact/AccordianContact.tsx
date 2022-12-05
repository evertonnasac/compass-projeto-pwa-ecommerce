import styled from "styled-components";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import { AccordianShowHidden } from "../../components/accordians/AccordianShowHidden";
import {Text} from "../../components/inputs/Text"
import { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";

const StyleContainer = styled.div`  
    width: 100% ;
    display: flex ;
    justify-content: space-between ;
    margin-bottom: 100px ;
 

`

const FormContainer = styled.form` 
    width: 100% ;
    display: flex ;
    justify-content: space-between ;
    height: 500px ;

    .form_sideA, .form_sideB  {
        display: flex ;
        flex-direction:column ;
        width: 35% ;

        div input:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
            
        }
    }
    .form_sideB {
        width: 55% ;
    }
`

interface IUser {
    name: string,
    phone: string,
    street: string,
    city: string,
    state: string,
    pinCode:string
}

const userDefaut : IUser = {
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
}



export const AccordianContact = () => {

    const [user, setUser] = useState<IUser>(userDefaut)

    const handleUser = (e : React.ChangeEvent<HTMLInputElement>) => {
     setUser({...user, [e.target.name] : e.target.value})
    }

    const onKeyEnter = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key == "Enter"){
            let pin = user.pinCode

            axios.get(`http://viacep.com.br/ws/${pin}/json/`)
                .then(result => {
                    setUser({...user, 
                        city: result.data.localidade,
                        state: result.data.uf,
                        street: result.data.logradouro
                    })     
                } )
                .catch()

        }
    }

    return(
        <StyleContainer>
            <AccordianShowHidden title="Add New Address">
                <FormContainer>
                    <aside className="form_sideA">
                        <Text 
                        name="name"
                        placeholder="Enter Name"  
                        text="Full Name"
                        handleOnChange={handleUser}
                        type="text"
                        value={user.name}
                        />
                        <Text 
                        name="street"
                        placeholder="Enter Address"  
                        text="Street Address"
                        handleOnChange={handleUser}
                        type="text"
                        value={user.street}
                        />
                        <Text 
                        name="city"
                        placeholder="Enter City"  
                        text="City"
                        handleOnChange={handleUser}
                        type="text"
                        value={user.city}
                        />
                    </aside>
                    <aside className="form_sideB">
                       <Text 
                        name="phone"
                        placeholder="Enter Phone"  
                        text="Mobile Number"
                        handleOnChange={handleUser}
                        type="number"
                        value={user.phone}
                        />
                        <Text 
                        name="state"
                        placeholder="Enter State"  
                        text="State Address"
                        handleOnChange={handleUser}
                        type="text"
                        value={user.state}
                        />
                         <Text 
                        name="pinCode"
                        placeholder="Enter Pin Code"  
                        text="Pin Code"
                        handleOnChange={handleUser}
                        onKey = {onKeyEnter}
                        type="text"
                        value={user.pinCode}
                        />
                    </aside>
                </FormContainer>
            </AccordianShowHidden>
        </StyleContainer>
    )
}