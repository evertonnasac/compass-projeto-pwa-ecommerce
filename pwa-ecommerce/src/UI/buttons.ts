import {colours} from "./colours"

const border_radius = "8px"

interface ButtonType{
    border_radius: string,
    background_color: string,
    color: string,
    border?: string,
   
}

export const btn_primary: ButtonType = {
    border_radius: border_radius,
    background_color: colours.primary,
    color: colours.white,
    

}

export const btn_outline : ButtonType ={
    border_radius: border_radius,
    background_color: colours.white,
    color: colours.primary,
    border: `2px solid ${colours.primary}`,
  
}
