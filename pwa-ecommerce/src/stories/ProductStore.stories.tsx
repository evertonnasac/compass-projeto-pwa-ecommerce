import { ComponentStory } from "@storybook/react"
import { ProductStore } from "../components/cards/ProductStore"

interface ContainerProp{
    width: string,
    height: string,
}

const Container : React.FC <ContainerProp> =  (props) => {
    return(
        <div style={{...props}}>
            <ProductStore
                category={"Grande"}
                description={"Blossom Pouch"} 
                price= {78.66}
                rate = {4}
                totalRatings = {43}
                rebate = {50}
                urlImage = "public/images/product/product-store.png"
            />
        </div>

    )
}

export default {
    title: 'Components/ProductStore',
    component: Container,

}

const Template : ComponentStory <typeof Container> = 
                (args : ContainerProp) => <Container {...args} ></Container>  


export const CardsDesktop = Template.bind({})
CardsDesktop.args = {
    width : "286px", 
    height :"403px"
}
                

export const CardsMobile = Template.bind({})
CardsMobile.args = {
    width : "150px", 
    height :"220px"
}
