import { ComponentStory } from "@storybook/react"
import { CheckBox } from "../components/inputs/Checkbox"

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
    args : {
        label: "Label",
        id: "teste"
    }

}



const Template : ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args}></CheckBox>

export const Enabled = Template.bind({})
Enabled.args = {
    disabled : false
}

export const Disabled = Template.bind({})
Disabled.args = {
    disabled : true
}