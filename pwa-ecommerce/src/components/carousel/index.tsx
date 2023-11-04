//@ts-nocheck
import Carousel from 'better-react-carousel'

type Props = {
    cols : number
    autoPlay? : number
    loop: boolean 
    items : any[]
}

export const ContainerCarousel = (props : Props) => {

    return (
        <Carousel cols = {props.cols} autoplay = {props.autoPlay} loop = {props.loop} hideArrow = {true}>
           {props.items.map((item, id) => (
            <Carousel.Item key={id}>
               {item}
            </Carousel.Item>
           ))}
        </Carousel>
    )
}

//@ts-nocheck