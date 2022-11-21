import { AppBar } from "../components/mobile/AppBar"
import React from 'react';

const Content : React.FC = () => <div style={{"width":"500px"}} ><AppBar></AppBar></div>

export default {
    title: 'Components/App Bar',
    component: Content,

}

export const Default = {}