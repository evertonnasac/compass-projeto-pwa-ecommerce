import { Ratings } from "../components/ratings/Retings";
import React from "react";


const star : number[] = [5,4,3,2,1] 

const Content : React.FC = () => {
    return(
    <div>
        {star.map(number => {
            return(
                <Ratings ratings={number} ></Ratings>
            )
        })}
        </div>
    )
    
}

export default {
    title: 'Components/Ratings',
    component: Content,

}

export const Default = {}