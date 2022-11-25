import { Button } from "../components/buttons/Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,

}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Label</Button>;

export const Primary = Template.bind({})
Primary.args = {
    type : "primary" ,
    size: "lg" 
}

export const Secondary = Template.bind({})
Secondary.args = {
    type : "outline" ,
    size: "lg" 
}

export const SmallPrimary = Template.bind({})
SmallPrimary.args = {
    type : "primary" ,
    size: "sm",
}

export const SmallSecondary = Template.bind({})
SmallSecondary.args = {
    type : "outline" ,
    size : "sm" 
}