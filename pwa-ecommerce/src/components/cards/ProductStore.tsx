import styled from "styled-components";
import { colours } from "../../UI/colours";
import { Rating } from "../../stories/Ratings.stories";

const StyleContainer = styled.div`
    width: 100% ;
    min-width: 136px;
    max-width: 286px ;

    height: 100% ;
    min-height: 200px;
    max-height: 406px ;

    position: relative ;

`

const StyleTrending = styled.div`
    width: 40%;
    height: 10%;
    position: absolute;

    right: 3,75% ;
    top: 3,81%;
`


const StyleContainerInfo = styled.div`
    width: 100% ;
    height: 26,6% ;
    position: relative ;
`

interface PropsProductStore {
    description: string
    price: number,
    rebate?: number
    rate: 0 | 1 | 2 | 3 | 4 | 5,
    totalRatings: number
}


export const ProductStore = (props : PropsProductStore) => {
    <StyleContainer>
        <img src="" alt="produto" />
        <StyleContainerInfo>
            <img src="" alt="coracao" />
            <p className="description">{props.description}</p>
            <div className="rates">
                <Rating rate={props.rate}></Rating>
                {props.totalRatings && <span>{props.totalRatings} Ratings</span>}
            </div>
            <div className="price">
                <span>{props.price}</span>
                {props.rebate && <span>{props.price - props.rebate}</span>}
                {props.rebate && <span>{props.rebate}% OFF</span>}
            </div>
        </StyleContainerInfo>
    </StyleContainer>
}