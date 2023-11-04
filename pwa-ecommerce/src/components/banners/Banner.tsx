import styled from "styled-components";

interface PropsStyle {
    width: string,
    height: string,
}

const StyleBanner = styled.div<PropsStyle>`
    width: ${props => props.width};
    height: ${props => props.height};
    
    img{
        width: 100% ;
        height: 100% ;
        border-radius: 24px;
    }

`
  

interface PropsBanner extends PropsStyle{
    urlImage : string,
    className: string
}

export const Banner = ({urlImage, width, height, className} : PropsBanner) => {
    return (
        <StyleBanner width = {width} height = {height} className = {className} >
            <img src= {urlImage} alt="" />
        </StyleBanner>
    )
    
}