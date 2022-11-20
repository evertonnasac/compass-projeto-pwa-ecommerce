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

const StyleBottonNavigate = styled.nav`
    width: 100% ;
    height: 56px ;
    display: flex ;
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
        imageSelectedPath: imgHomeSelect
    },
     
    {
        item: "Categories",
        imagePath: imgCategories,
        imageSelectedPath: imgCategoriesSelect
       
    },
     
    {
        item: "Profile",
        imagePath: imgProfile,
        imageSelectedPath: imgProfileSelect
       
    },
     
    {
        item: "Bag",
        imagePath: imgBag,
        imageSelectedPath: imgBagSelect
        
    }
]

export const BottonNavigate = () => {

    const [itemSelected, setItemSelected] = useState("Home")

    return (
        <StyleBottonNavigate>
         {items.map(({item, imagePath, imageSelectedPath}) => {
            return (
                <ItemsNavigate onClick={() => setItemSelected(item)}>
                    <img src= {itemSelected == item ? imageSelectedPath : imagePath} 
                         alt = {"incone " + item} />
                         {itemSelected == item && <span>{item}</span>}
                </ItemsNavigate>
            )
          
        })}
        </StyleBottonNavigate>
    )
}