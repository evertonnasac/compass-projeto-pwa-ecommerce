import styled from "styled-components";
import typography from "../../UI/typography";
import { colours } from "../../UI/colours";
import { Button } from "../../components/buttons/Button";
import { ContainerBack } from "../../components/mobile/HeaderBack";
import { ContainerGoto } from "../../components/mobile/Goto";
import { Link, useNavigate } from "react-router-dom";
import iconGoto from "../../../public/icons/arrow-goto.png"
import imgUser from "../../../public/images/signup/user.png"
import { useEffect, useReducer, useState } from "react";
import { BottonNavigate } from "../../components/mobile/BottonNavigate";

const StyleContainer = styled.section`  
    width: 100% ;
    height: 100vh;

    display: flex ;
    justify-content: space-between ;
    flex-direction: column ;
    align-items: center ;
    

    @media (min-width : 899px){
        display: none ;
    }

`

const ContainerPhoto = styled.div` 
    height: 20% ;
    width: 95% ;
    display: flex ;
    align-items: center ;
    justify-content: space-around ;
    background-color: ${colours.accent} ;

    .profile_info{
        width: 50% ;

        .name{
            font-size: ${typography.headingS20.fontSize} ;
            font-weight: ${typography.headingS20.fontWeight} ;
        }

        .email, .number {
            font-size: ${typography.headingM14.fontSize} ;
            font-weight: ${typography.headingM14.fontWeight};
            color: ${colours.low_emphasis} ;
        }
        
    }

    .img_photo{
        width: 30% ;
        max-width: 100px ;
        height: 80% ;
    }

    .img_arrow{
        width: 10px ;
        height: 20px ;
    }

`

const ContainerMenu = styled.div`  
    width: 90% ;
    height: 60% ;
   

`

const ContentOption = styled.div`  
    width: 100% ;
    height: 13% ;

   
    a{
        text-decoration : none;
        color: ${colours.high_emphasis};
        width: 100% ;
        height: 100% ;

    }

    
`

export const itemsMenu = [
    {
        item : "Personal Information",
        link : "/notfound"
    },
    {
        item: "Refer and Earn",
        link : "/notfound"
    },
    {
        item : "My Orders",
        link : "/myorders",
    },
    {
        item: "My Wishlist",
        link : "/wishlist"
    },
    {
        item : "My Reviews",
        link : "/notfound",
    },
    {
        item: "My Address Book",
        link : "/notfound"

    },
    {
        item: "My Saved Cards",
        link : "/notfound"
        
    }
    
]

export const ProfileMobile = () =>{


    const nav = useNavigate()

    const logout = () =>{
        localStorage.removeItem("bag")
        localStorage.removeItem("userPWA")
        nav("/login")
    }

    const [user, setUser] = useState({name: "", email: "", phone : ""})

    useEffect(() =>{

        let userLogin = JSON.parse(localStorage.getItem("userPWA")||"")
        setUser({name: userLogin.name, email: userLogin.email, phone: userLogin.phone })
    
    },[])

    return (
        <StyleContainer>
            <ContainerBack title="Profile"/>
            <ContainerPhoto>
                <img src={imgUser} className="img_photo"/>
                <div className="profile_info">
                    <p className="name">{user.name}</p>
                    <p className="email">{user.email}</p>
                    <p className="number">{user.phone}</p>
                </div>
                <img src={iconGoto} className="img_arrow" />
            </ContainerPhoto>
            <ContainerMenu>
                {itemsMenu.map((item, index) => { 
                    return <ContentOption key={index}>
                                <Link to={item.link}><ContainerGoto title={item.item}/></Link>
                           </ContentOption>
                })}
               
            </ContainerMenu>
            <Button onclick={logout} type="outline" height="40px" width="95%" className="btn_logout_profie">Logout</Button>
            <BottonNavigate/>
        </StyleContainer>
    )
}