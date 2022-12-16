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
            <div > 
                <BagDesktop 
                brand="Pouch" 
                _id="5"
                description="Blosson Pouch"
                price={99.99}
                qte = {1}
                rebate = {50}
                urlPhoto = "public/images/product/product-store.png"
                />
                
            </div>  

            <div style={{"width":"285px"}}><MobileItemOrdered/></div>  

            <div>
                <MobileItemSheet
                brand="Pouch" 
                _id="5"
                description="Blosson Pouch"
                price={99.99}
                urlImage = "public/images/product/product-store.png"
                qtd={1}
                />         
           </div>  
             
        </div>

    )
}

export default {
    title: 'Components/ProductSpecific',
    component: Container,

}

export const Default = {}