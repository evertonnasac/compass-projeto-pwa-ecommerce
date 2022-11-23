import { AccordianShowHidden } from "../components/accordians/AccordianShowHidden";
import { AccordianMinusPlus } from "../components/accordians/AccordianMinusPlus";


const Accordian : React.FC = () => {
    return(
        <div style={{"width": "650px", "display" : "flex", "gap" : "50px"}}>
            <div style={{"display" : "flex", "gap" : "50px"}}>
                <div style={{"width": "250px" }}>
                <AccordianShowHidden title="Loren ispun">
                    <p>Label</p>
                    <p>Label</p>
                    <p>Label</p>
                    <p>Label</p>
                    <p>Label</p>
                </AccordianShowHidden> 
                <AccordianShowHidden title="Loren ispun">
                    <p>Label</p>
                    <p>Label</p>
                    <p>Label</p>
                    <p>Label</p>
                    <p>Label</p>
                </AccordianShowHidden>
                </div>
            </div>
            <div style={{"width": "250px", "display" : "flex", "gap" : "50px"}}>
                <div style={{"width": "250px" }}> 
                     <AccordianMinusPlus title="Loren ispun">
                        <p>Label</p>
                        <p>Label</p>
                        <p>Label</p>
                        <p>Label</p>
                        <p>Label</p>
                    </AccordianMinusPlus>
                    <AccordianMinusPlus title="Loren ispun">
                        <p>Label</p>
                        <p>Label</p>
                        <p>Label</p>
                        <p>Label</p>
                        <p>Label</p>
                    </AccordianMinusPlus>
                </div>
               
            </div>
        </div>
    )
}

export default {
    title: 'Components/Accordians',
    component: Accordian,

}

export const Default = {}