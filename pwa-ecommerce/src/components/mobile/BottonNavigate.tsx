import { useState } from "react"
import styled from "styled-components"
import { colours } from "../../UI/colours"

import imgHome from "../../../public/icons-botton-nav/home.png"
import imgCategories from "../../../public/icons-botton-nav/categories.png"
import imgProfile from "../../../public/icons-botton-nav/profile.png"
import imgBag from "../../../public/icons-botton-nav/bag.png"

import imgHomeSelect from "../../../public/icons-botton-nav/home-selected.png"
import imgCategoriesSelect from "../../../public/icons-botton-nav/categories-selected.png"
import imgProfileSelect from "../../../public/icons-botton-nav/profile-selected.png"
import imgBagSelect from "../../../public/icons-botton-nav/bag-selected.png"

import {Link} from "react-router-dom"

const StyleBottonNavigate = styled.nav`
    width: 100% ;
    height: 56px ;
    display: flex ;
    margin-top: 25px ;

    a{
        width: 100% ;
        text-decoration: none ;
        display: flex ;
        justify-content: center ;
        align-items: center ;
    }
`
const ItemsNavigate = styled.div`
    width: 25% ;
    display: flex ;
    flex-direction: column ;
    text-align: center ;
    align-items: center ;
    cursor: pointer;

    

    img {
        width: 17px ;
        height: 17px ;
        margin-bottom: 5px ;
    }

    span{
        color : ${colours.primary};
        font-size: 12px ;
    }
`

const items = [
        
    {
        item: "Home",
        imagePath: imgHome,
        imageSelectedPath: imgHomeSelect,
        link : "/home"
    },
     
    {
        item: "Categories",
        imagePath: imgCategories,
        imageSelectedPath: imgCategoriesSelect,
        link : "/categories"
       
    },
     
    {
        item: "Profile",
        imagePath: imgProfile,
        imageSelectedPath: imgProfileSelect,
        link : "/profile"
       
    },
     
    {
        item: "Bag",
        imagePath: imgBag,
        imageSelectedPath: imgBagSelect,
        link : "/mybag"
        
    }
]

export const BottonNavigate = () => {

    const [itemSelected, setItemSelected] = useState("Home")

    return (
        <StyleBottonNavigate>
         {items.map(({item, imagePath, imageSelectedPath, link}) => {
            return (
                <Link to = {link}>
                    <ItemsNavigate onClick={() => setItemSelected(item)}>
                        <img src= {itemSelected == item ? imageSelectedPath : imagePath} 
                            alt = {"incone " + item} />
                            {itemSelected == item && <span>{item}</span>}
                    </ItemsNavigate>
                </Link>
                
            )
          
        })}
        </StyleBottonNavigate>
    )
}