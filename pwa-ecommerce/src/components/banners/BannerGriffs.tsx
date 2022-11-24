import styled from "styled-components";

interface PropsGriffs {
    width: string,
    height: string,
}

const StyleBannerGriffs = styled.div<PropsGriffs>` 

    width: ${props => props.width} ;
    height: ${props => props.height} ;
    position: relative ;
    

    img{

        position: absolute ;
        transform: translate(-50%, -50%) ;
        top: 50% ;
        left: 50% ;

        height: 30% ;
        width: 50% ;
    }


`

interface Props extends PropsGriffs {
    urlImage: string
}

export const BannerGriffs = ({width, height, urlImage} : Props) => {
    return(
        <StyleBannerGriffs height= {height} width= {width}>
            <img src= {urlImage} alt="grifes" />
        </StyleBannerGriffs>
    )

}