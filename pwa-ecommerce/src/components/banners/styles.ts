import styled, { css } from "styled-components";




const styleDefault = css<{$url : string}>`
    background-image: url(${(props) => props.$url});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 2%;
`
  
export const SmallBanner = styled.div<{$url : string}>`
    width: 45vw;
    height: 25vw;
    ${styleDefault};

`
export const BigBanner = styled.div<{$url : string}>`
    width: 100%;
    height: 33vw;
    ${styleDefault};

`
export const ImageBanner = styled.img`
    width: 100%;
    height: 100%;
    ${styleDefault};
`

export const CustomBanner = styled.div<{$width?: string, $height? : string, $url : string}>`
    width: ${props => props.$width};
    height: ${props => props.$height};
    ${styleDefault};

`
