import { Stepper } from "../components/stepper/Stepper" 
import { ContextBag } from "../Contexts/ContextBag"

const Content : React.FC = () => {
    return (
        <ContextBag>
            <Stepper className="stepper"></Stepper>
        </ContextBag>
    )
}

export default {
    title: 'Components/Stepper',
    component: Content,

}

export const Default = {}