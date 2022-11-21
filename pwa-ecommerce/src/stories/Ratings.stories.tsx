import { Ratings, PropsRatings } from "../components/ratings/Retings";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";


const star : number[] = [5,4,3,2,1] 

const Content : React.FC = () => {
    return(
    <div>
        {star.map(number => {
            return(
                <Ratings rate={number} />
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

const Template: ComponentStory<typeof Ratings> = (args : PropsRatings) => <Ratings rate={args.rate}></Ratings>;

export const Rating = Template.bind({})

Rating.args = {
   rate : 1
}