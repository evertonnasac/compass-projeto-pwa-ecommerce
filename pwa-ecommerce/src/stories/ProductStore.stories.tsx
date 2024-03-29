import { ComponentStory } from "@storybook/react"
import { ProductStore } from "../components/cards/products/ProductStore"
import { withRouter } from 'storybook-addon-react-router-v6';


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
                thin = {false}
            />
        </div>

    )
}

export default {
    title: 'Components/ProductStore',
    component: Container,
    decorators: [withRouter],


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
    width : "136px", 
    height :"220px"
}
