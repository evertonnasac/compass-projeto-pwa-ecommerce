import { ComponentStory } from "@storybook/react"
import { RadioButton } from "../components/inputs/RadioButton"

const RadioGroup : React.FC = () => {
    return(
        <div>
            <RadioButton disabled = {false} label = {"Label"}  id = {"teste1"} name = {"teste"} value = {"teste1"}/>
            <RadioButton disabled = {false} label = {"Label"}  id = {"teste2"} name = {"teste"} value = {"teste2"} />
            <RadioButton disabled = {false} label = {"Label"}  id = {"teste3"} name = {"teste"} value = {"teste3"}/>
            <RadioButton disabled = {true}  label = {"Label"}  id = {"teste4"} name = {"teste"} value = {"teste4"}/>
        </div>
    )
}

export default {
    title: 'Components/RadioButton',
    component: RadioGroup,

}
export const Default = {}