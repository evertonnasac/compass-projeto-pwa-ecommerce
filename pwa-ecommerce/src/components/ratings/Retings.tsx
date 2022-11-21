import styled from "styled-components";
import iconStarGray from "../../../public/icons-ratings/star-gray.png"
import iconStarGold from "../../../public/icons-ratings/star-gold.png"

const StyleRatings = styled.div`  
    height: 19px ;
    display: flex ;

`

const star : number[] = [1,2,3,4,5] 

export interface PropsRatings {
    rate : 0 | 1 | 2 | 3 | 4 | 5
}

export const Ratings = ({rate}: PropsRatings) => {
    return (
        <StyleRatings>
            {star.map((star) => {
                let icon = iconStarGray
                if(star <= rate){
                    icon = iconStarGold
                }
                return <img src= {icon}></img>
               
            } )}
        </StyleRatings>
    )

}