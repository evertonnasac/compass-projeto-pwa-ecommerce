import { BigBanner, SmallBanner, CustomBanner } from "./styles";

type Props = {
    length: "small" | "big" | "custom",
    imgSrc: string,
    height?: string,
    width?: string
    children?: React.ReactNode
}

export const Banner = (props : Props) => {

    if( props.length == "small"){
        return <SmallBanner $url={props.imgSrc}> {props.children} </SmallBanner>
    }

    if(props.length == "big"){
        return <BigBanner $url={props.imgSrc}> {props.children}</BigBanner>
    }

    return (
        <CustomBanner $url={props.imgSrc} $height={props.height} $width={props.width}>
                {props.children}
        </CustomBanner>
    ) 
}
       
    
