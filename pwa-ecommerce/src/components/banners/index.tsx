import { BigBanner, SmallBanner, ImageBanner } from "./styles";

type Props = {
    length: "small" | "big",
    imgSrc: "string"
}

export const Banner = (props : Props) => {
    return (
        props.length == "small" ? 
        (
            <SmallBanner>
                <ImageBanner src={props.imgSrc}/>
            </SmallBanner>
        ) : 
        (
            <BigBanner>
                <ImageBanner src={props.imgSrc}/>
            </BigBanner>
        )

    )
}