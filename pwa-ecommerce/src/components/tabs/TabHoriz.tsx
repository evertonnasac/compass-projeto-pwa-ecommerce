
import { useState, useEffect, useContext } from "react";
import { Context } from "../../Contexts/ContexNavTab";
import styled from "styled-components";
import { colours } from "../../UI/colours"

const Tab = styled.nav`
    height: 48px ;
    width: 100% ;

    display: flex ;
    background-color: ${colours.grey};

    .selected{
        background-color:${colours.primary} ;
        color: ${colours.white};
        border-radius: 8px ;
    }
`

const ItensTab = styled.button`
    height: 100% ;
    color: ${colours.low_emphasis};
    padding: 0 5% ;
    border-style: none ;
    cursor: pointer;

`

export interface ItemPropNav {
    item: string,
}

interface Props{
    array: ItemPropNav[],
  
}

export const TabHoriz = (props: Props) => {

    const {itemSelected, setItemSelected} = useContext(Context)
   
    return(
        <Tab>
            {props.array.map(({item}, index) => {
                return(
                    <ItensTab className = {itemSelected == item ? "selected" : 
                                            index == 0 && itemSelected == "init" ? "selected" : ""}
                              onClick = {() => setItemSelected(item)}>
                        {item}
                    </ItensTab>
                )   
            })}
        </Tab>
    )
}