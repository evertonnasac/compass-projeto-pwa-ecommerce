import { BottonNavigate } from "../components/mobile/BottonNavigate";
import { withRouter } from 'storybook-addon-react-router-v6';


const Content : React.FC = () => <div style={{"width":"500px"}}> <BottonNavigate></BottonNavigate></div>

export default {
    title: 'Components/Botton Navigate',
    component: Content,
    decorators: [withRouter],

}

export const Default = {}