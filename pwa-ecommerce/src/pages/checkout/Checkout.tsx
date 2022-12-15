import { ContactMobile } from "./ContactMobile"
import { ContactDesktop } from "./ContactDesktop"
import styled from "styled-components"
import { useState } from "react"



const StyleContainer = styled.main`  
    width: 100% ;

`

export interface IUser {
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

export const Checkout = () => {

    const [user, setUser] = useState<IUser>(userDefaut)

    const handleUser = (e : React.ChangeEvent<HTMLInputElement>) => {
     setUser({...user, [e.target.name] : e.target.value})
    }

    
    return(
        <StyleContainer>
           <ContactDesktop handleUser={handleUser} user ={user} setUser={setUser}/>
           <ContactMobile setUser={setUser} handleUser={handleUser} user ={user}/>
        </StyleContainer>
    )
 
}