import styled from "styled-components";
import typography from "../../UI/typography";
import { colours } from "../../UI/colours";
import { Button } from "../../components/buttons/Button";
import { ContainerBack } from "../../components/mobile/HeaderBack";
import { ContainerGoto } from "../../components/mobile/Goto";
import { Link } from "react-router-dom";
import iconGoto from "../../../public/icons/arrow-goto.png"
import imgUser from "../../../public/images/signup/user.png"

const StyleContainer = styled.section`  
    width: 100% ;
    height: calc(100vh - 60px) ;

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

const ContentOptiont = styled.div`  
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
        link : "/"
    },
    {
        item: "Refer and Earn",
        link : "/"
    },
    {
        item : "My Orders",
        link : "/",
    },
    {
        item: "My Wishlist",
        link : "/wishlist"
    },
    {
        item : "My Reviews",
        link : "/reviews",
    },
    {
        item: "My Address Book",
        link : "/address"

    },
    {
        item: "My Saved Cards",
        link : "/"
        
    }
    
]

export const ProfileMobile = () =>{

    return (
        <StyleContainer>
            <ContainerBack title="Profile"/>
            <ContainerPhoto>
                <img src={imgUser} className="img_photo"/>
                <div className="profile_info">
                    <p className="name">nome</p>
                    <p className="email">email</p>
                    <p className="number">444</p>
                </div>
                <img src={iconGoto} className="img_arrow" />
            </ContainerPhoto>
            <ContainerMenu>
                {itemsMenu.map((item, index) => { 
                    return <ContentOptiont>
                                <Link to={item.link}><ContainerGoto title={item.item}/></Link>
                           </ContentOptiont>
                })}
               
            </ContainerMenu>
            <Button type="outline" height="40px" width="95%" className="btn_logout_profie">Logout</Button>
        </StyleContainer>
    )
}