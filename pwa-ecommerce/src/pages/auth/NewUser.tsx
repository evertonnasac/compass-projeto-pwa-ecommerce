import { useEffect } from "react";
import { useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { InputText } from "../../components/inputs/Text";
import { ContainerBack } from "../../components/mobile/HeaderBack";
import { Button } from "../../components/buttons/Button";
import { createUser } from "../../hooks/user/createUser";


const StyleContainer = styled.section` 
    width: 95% ;
    max-width: 500px ;
    height: 100vh ;
    margin: 0 auto ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-between ;
    align-items: center ;

    .btn_new_user{
        margin-bottom: 20px ;
    }


`
const ContainerForm = styled.div`  
    width: 80%;
    height: 70% ;
`

export const NewUser = () => {

    const {search} = useLocation()
    const [user, setUser] = useState({name: "", phone : "", email: "", password : "", comfirmPassword : ""})

    useEffect(() => {

        const searchParams = new URLSearchParams(search)
        if(searchParams.get("phone")){
            let phoneUser = searchParams.get("phone") || ""
            setUser({...user, phone : phoneUser})
    
        }
       
    },[search])

    const handleUser = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    return(
        <StyleContainer>
            <ContainerBack title="New User"/>
            <ContainerForm>
            <InputText
                name="phone"
                placeholder="Enter Phone"
                text="Full Name"
                type="text"
                value={user.phone}
                handleOnChange = {handleUser}
            />
              <InputText
                name="name"
                placeholder="Enter Name"
                text="Full Name"
                type="text"
                value={user.name}
                handleOnChange = {handleUser}
            />
              <InputText
                name="email"
                placeholder="Enter Email"
                text="Email"
                type="text"
                value={user.email}
                handleOnChange = {handleUser}
                
            />
             <InputText
                name="password"
                placeholder="Enter Password"
                text="Password"
                type="password"
                value={user.password}
                handleOnChange = {handleUser}
                
            />
            <InputText
                name="comfirmPassword"
                placeholder="Comfirm Password"
                text="Comfirm Password"
                type="password"
                value={user.comfirmPassword}
                handleOnChange = {handleUser}
            />
            </ContainerForm>
            <Button onclick={() => createUser(user) } type="primary" height="40px" width="80%" className="btn_new_user" >Go!</Button>
        </StyleContainer>

    )
}