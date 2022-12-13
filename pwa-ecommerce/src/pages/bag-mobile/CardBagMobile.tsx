import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import styled from "styled-components";
import { ProductsBagInfo as ICard, Context } from "../../Contexts/ContexBag";
import { Stepper } from "../../components/stepper/Stepper";
import { useState, useContext, useEffect} from "react";


const StyleContainer = styled.section`  
    width: 100% ;

`

const StyleCard = styled.div`  
    width: 100% ;
    margin: 20px auto ;
    display: flex ;
    gap: 5%;

    img{
        width: 100px ;
        height: 100px ;
        border-radius: 16px ;
    }

`

const ContentInfoProduct = styled.div`  
    width: 100% ;
    P{
        margin: 0 ;
    }

    .brand{
        font-size: ${typography.paragraphS12.fontSize} ;
        font-weight: ${typography.paragraphS12.fontWeight} ;
    }

    .description{
        font-size: ${typography.paragraphM12.fontSize} ;
        font-weight: ${typography.paragraphM12.fontWeight} ;
        color: ${colours.low_emphasis};
        margin: 3px 0 7px 0
    }
    .price_content{

        display: flex ;
        gap: 5%;
        margin-top: 5px ;

        .price{
            font-size: ${typography.headingM14.fontSize} ;
            font-weight: ${typography.headingM14.fontWeight} ;
        }
        .price_before{
            font-size: ${typography.paragraphR14.fontSize} ;
            font-weight: ${typography.paragraphR14.fontWeight} ;
            color: ${colours.low_emphasis}
        }
        .rebate{
            font-size: ${typography.paragraphR14.fontSize} ;
            font-weight: ${typography.paragraphR14.fontWeight} ;
            color: ${colours.error}
        }
    }

`
const ContainerControlls = styled.div`  
    width: 100%;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    border-top:  1px solid  rgba(0, 0, 0, 0.12);

    span{
        height: 60% ;
        width: 50% ;
        text-align: center ;
        color: ${colours.primary} ;
        font-size: 14px ;
        font-weight: 600;
        padding-top: 5px ;
        cursor: pointer;
    }

    & span:first-child{
        border-right:  1px solid  rgba(0, 0, 0, 0.12);
;
    }


`
interface ICardMobile extends ICard{
    bagChange :  React.Dispatch<React.SetStateAction<boolean>>
    init :  React.Dispatch<React.SetStateAction<boolean>>

}

export const CardBagMobile = (props : ICardMobile) => {

    const [product, setProduct] = useState<ICard>(props)
    const {setCurrentBag, currentBag, setBag, getBag} = useContext(Context)


    useEffect(()=> {
        setCurrentBag(bag  => {
            return {...bag, 
                products : bag.products.map((item :ICard ) => 
                item._id == product._id ? product : item)}
        })
        props.init(false)
        props.bagChange(bag => !bag)

    }, [product])

    
    const handleCart = (id : string | undefined) => {
        setCurrentBag(bag => {
            return {...bag, products : bag.products.filter(item => item._id != id )}
        })   
        props.init(false)
        props.bagChange(bag => !bag)

    }

    const handleQte = (operation : string) =>{
        if(operation == "minus" ){
            setProduct(product => {return {...product, qte: product.qte && product.qte > 1 ?
                 product.qte -1  : product.qte}})  
        }

        else if(operation == "plus"){
            setProduct(product => {return {...product, qte: product.qte ? product.qte  + 1  : 1}})
        }
    }

    return(
        <StyleContainer>
            <StyleCard>
                <img src={props.urlPhoto} alt="" />
                <ContentInfoProduct>
                    <p className="brand">{props.brand}</p>
                    <p className="description">{props.description}</p>
                    <div className="stepper_content">
                        <Stepper updateValue={handleQte} qte = {props.qte} className="" /></div>
                    <div className="price_content">
                        <span className="price">${Number(props.price && props.rebate ? props.price * props.rebate /100 : props.price).toFixed(2)}</span>
                        {props.rebate && <span className="price_before">${Number(props.price).toFixed(2)}</span> }
                        {props.rebate && <span className="rebate">{Number(props.rebate).toFixed(2)}% OFF</span> }
                    </div>    
                </ContentInfoProduct>
            </StyleCard> 
            <ContainerControlls>
                <span>Move to Wishlist</span>
                <span onClick={() => handleCart(props._id)}>Remove</span>
            </ContainerControlls>
        </StyleContainer>
    )
}