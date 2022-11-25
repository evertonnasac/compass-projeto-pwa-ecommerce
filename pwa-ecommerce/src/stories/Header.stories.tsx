import { Header } from '../components/header/Header';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
    title: 'Components/Header',
    component: Header,

    decorators: [withRouter],
   

}

export const Default = {}