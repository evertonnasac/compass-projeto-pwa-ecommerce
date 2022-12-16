import styled from "styled-components";
import typography from "../../../UI/typography";
import { colours } from "../../../UI/colours";
import { Button } from "../../../components/buttons/Button";
import { ContainerGoto } from "../../../components/mobile/Goto";
import { Link } from "react-router-dom";
import iconGoto from "../../../../public/icons/arrow-goto.png"
import imgUser from "../../../../public/images/signup/user.png"
import { useState, useContext } from "react";
import { Context } from "../../../Contexts/ContexNavTab";

const StyleContainer = styled.aside `  
    width: 30% ;

`

const ContainerItems = styled.div` 
    width: 100% ;
    height: 50px ;
    display: flex ;
    justify-content: space-around ;
    align-items: center ;
    box-sizing: border-box ;
    background-color: ${colours.accent} ;
    cursor: pointer;

    .item_menu{
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight};
        height: 70%;
        width: 95% ;
        padding-left: 10px ;
        border-left: 2px solid transparent ;
    }

    .item_menu.select{
        border-left: 2px solid ${colours.primary} ;
        color: ${colours.primary}
    }

    .img_arrow_desktop{
        width: 10px ;
        height: 20px ;
    }

`


export const itemsMenu = [
    {
        item : "Personal Information",
    },
    {
        item: "Refer and Earn",
    },
    {
        item : "My Orders",
    },
    {
        item: "My Wishlist",
    },
    {
        item : "My Reviews",
    },
    {
        item: "My Address Book",

    },
    {
        item: "My Saved Cards",
        
    }
    
]

interface Props {
    itemSelected: string,
    setItemSelected : React.Dispatch<React.SetStateAction<string>>
}

export const MenuLateralProfile = ({itemSelected, setItemSelected} : Props) =>{

 
    return(
        <StyleContainer>
            {itemsMenu.map((item, index) => {
                return <ContainerItems onClick={() => setItemSelected(item.item)} key={index} >
                            <span className={"item_menu " + (itemSelected == item.item? "select" : "")}>{item.item}</span>
                            <img src={iconGoto} className = "img_arrow_desktop"  />
                    </ContainerItems>
            })}
        </StyleContainer>
    )

}