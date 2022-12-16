import { Stepper } from "../components/stepper/Stepper" 
import { useState } from "react"

const Content : React.FC = () => {
    const updateValue = (operation : string) => {} 
    return (
        <Stepper updateValue={updateValue} className="stepper"></Stepper>
    )
}

export default {
    title: 'Components/Stepper',
    component: Content,

}

export const Default = {}