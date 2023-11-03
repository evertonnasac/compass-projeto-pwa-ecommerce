//@ts-nocheck
import React, { Component } from "react";
import Carousel from 'better-react-carousel'
import styled from "styled-components";

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;

`

type Props = {
    cols : number
    autoPlay? : number
    loop: boolean 
    items : any[]
}

export const ContainerCarousel = (props : Props) => {

    return (
        <Carousel cols = {props.cols} autoplay = {props.autoPlay} loop = {props.loop}>
           {props.items.map((item, id) => (
            <Carousel.Item key={id}>
               {item}
            </Carousel.Item>
           ))}
        </Carousel>
    )
}

//@ts-nocheck