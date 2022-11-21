import { ComponentStory } from "@storybook/react"
import { CheckBox } from "../components/inputs/Checkbox"

const CheckGroup : React.FC = () => {
    return(
        <div>
            <CheckBox disabled = {false} label = {"Label"}  id = {"teste1"} name = {"teste"} value = {"teste1"}/>
            <CheckBox disabled = {false} label = {"Label"}  id = {"teste2"} name = {"teste"} value = {"teste2"} />
            <CheckBox disabled = {false} label = {"Label"}  id = {"teste3"} name = {"teste"} value = {"teste3"}/>
            <CheckBox disabled = {true}  label = {"Label"}  id = {"teste4"} name = {"teste"} value = {"teste4"}/>
        </div>
    )
}

export default {
    title: 'Components/CheckBox',
    component: CheckGroup,

}

export const Default = {}
