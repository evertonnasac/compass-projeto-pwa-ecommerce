import {BagDesktop} from "../components/cards/products/DesktopBag"
import {MobileItemOrdered} from "../components/cards/products/MobileItemOrdered"
import {MobileItemSheet} from "../components/cards/products/MobileItemSheet"

interface ContainerProp{
    width: string,
    height: string,
}

const Container : React.FC <ContainerProp> =  () => {
    return(
        <div style={{"width":"900px", "display" : "flex" , "justifyContent" : "space-between"}}>
            <div ><BagDesktop/></div>  
            <div style={{"width":"285px"}}><MobileItemOrdered/></div>   
            <div><MobileItemSheet/></div>    
        </div>

    )
}

export default {
    title: 'Components/ProductSpecific',
    component: Container,

}

export const Default = {}