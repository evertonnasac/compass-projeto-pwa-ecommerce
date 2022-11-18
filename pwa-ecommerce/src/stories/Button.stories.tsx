import { Button } from "../components/Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
       content: "Label", 
    },
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    type : "primary" ,
    size: "lg" 
}

export const Secondary = Template.bind({})
Secondary.args = {
    type : "secondary" ,
    size: "lg" 
}

export const smallPrimary = Template.bind({})
smallPrimary.args = {
    type : "primary" ,
    size: "sm",
}

export const smallSecondary = Template.bind({})
smallSecondary.args = {
    type : "secondary" ,
    size : "sm" 
}