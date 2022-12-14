import styled from "styled-components";
import { InputText } from "../components/inputs/Text";
import { Button } from "../components/buttons/Button";
import { useState } from "react";
import { ContainerBack } from "../components/mobile/HeaderBack";
import { login } from "../hooks/user/login";

const StyleContainer = styled.section` 
    width: 95% ;
    max-width: 500px ;

    position: relative ;

`

const ContainerForm = styled.div` 
    width: 70% ;
    height: 500px ;

    display: flex ;
    flex-direction: column ;
    justify-content: space-evenly ;

    

`




export const Login = () => {

    const [user, setUser] = useState({email : "", password : ""})

    const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

   
    return (
        <StyleContainer>
            <ContainerBack  title="Login"/>
            <ContainerForm>
                <InputText
                    name="email"
                    placeholder="Enter Email"
                    type="text"
                    value={user.email}
                    handleOnChange = {handleUser}
                    text = "Email"
                />
                 <InputText
                    name="password"
                    placeholder="Enter Password"
                    type="password"
                    value={user.password}
                    handleOnChange = {handleUser}
                    text = "Password"
                />
                <Button type="primary" width="100%" height="40px" onclick={() => login(user)}>Login</Button>
            </ContainerForm>

        </StyleContainer>
    )
}


