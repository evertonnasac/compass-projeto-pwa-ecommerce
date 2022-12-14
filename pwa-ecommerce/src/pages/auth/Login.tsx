import styled from "styled-components";
import { InputText } from "../../components/inputs/Text";
import { Button } from "../../components/buttons/Button";
import { useState } from "react";
import { ContainerBack } from "../../components/mobile/HeaderBack";
import { login } from "../../hooks/user/login";
import { useNavigate } from "react-router-dom";

const StyleContainer = styled.section` 
    width: 95% ;
    margin: 0 auto ;
    
`

const ContainerForm = styled.div` 
    width: 70% ;
    max-width: 500px ;
    height: 300px ;
    margin: 100px auto ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-evenly ;
    align-items: center ;

    

`

export const Login = () => {

    const [user, setUser] = useState({email : "", password : ""})

    const nav = useNavigate()

    const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const getLogin = async () => {
        if( await login(user)) {
            setUser({email : "", password : ""})
            nav("/home")
        } 

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
                <Button type="primary" width="100%" height="40px" onclick={() => getLogin()}>Login</Button>
            </ContainerForm>

        </StyleContainer>
    )
}


