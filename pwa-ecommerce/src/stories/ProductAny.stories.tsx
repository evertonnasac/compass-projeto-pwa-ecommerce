import {ProductAny} from "../components/cards/ProductAny"

interface ContainerProp{
    width: string,
    height: string,
}

const Container : React.FC <ContainerProp> =  () => {
    return(
        <div style={{"width":"900px", "display" : "flex" , "justifyContent" : "space-between"}}>
            <div ><ProductAny type="Bag-Desktop"/></div>  
            <div style={{"width":"285px"}}><ProductAny type="Mobile-Ordered"/></div>   
            <div><ProductAny type="Mobile-Itemsheet"/></div>    
        </div>

    )
}

export default {
    title: 'Components/ProductSpecific',
    component: Container,

}

export const Default = {}