import styled from "styled-components";
import imgArrow from "../../../public/icons-menu/arrow-menu.png"
import { colours } from "../../UI/colours";
import {Link} from "react-router-dom"


const StyleBreadcrumbs = styled.div`
    height: 50px ;
    display: flex ;

    @media (max-width : 899px){
        display: none ;
    }

    label{

        a{
            text-decoration: none ;
            color: ${colours.primary};
            margin: 0 10px
        }

        &:last-child a{
            color: ${colours.dark};
            pointer-events: none;
            cursor: default;
        } 

        &:last-child img{
            display: none ;
        } 

    }
  
    
`
export interface ItemProp  {
    item: string,
    link: string
}

export interface Props {
    itens: ItemProp[]
}

export const Breadcrumbs = (props: Props) =>{
    return(
        <StyleBreadcrumbs>
            {props.itens.map(({item, link}: ItemProp, index) => {
                return(
                    <label key={index}>
                        <Link to = {link }>{item}</Link>
                        <img src={imgArrow} alt="Seta" />
                    </label>   
                )
            })}
        </StyleBreadcrumbs>
    )
}