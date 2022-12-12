import styled from "styled-components";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import { Context } from "../../Contexts/ContexBag";
import { useContext, useEffect , useState} from "react";
import { MobileItemSheet as ProductCard } from "../../components/cards/products/MobileItemSheet";
import { OrderSumary } from "./OrderSumary";
import { Button } from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, ItemProp as ItemsBreacrumbs  } from "../../components/tabs/Breadcrumbs";


const StyleContainer = styled.main`  

    width: 98%;
    margin: 15px auto ;
    

`
const StyleTitle = styled.p` 
    color: ${colours.primary};
    font-size: ${typography.headingS34.fontSize};
    font-weight: ${typography.headingS34.fontWeight} ;

`

const MainContent = styled.section` 
    width: 100% ;
    display: flex ;
    justify-content: space-between ;

`

const ProductContainer = styled.section` 
    display: flex;
    flex-direction: column ;
    width: 60% ;

    .head {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12); ;
        color: ${colours.low_emphasis};
        padding-bottom: 10px ;
        margin-bottom: 25px ;
    }

    .content_info{
        position: relative ;
        width: 100% ;
        display: flex ;
        justify-content: space-between ;
        margin: 2% 0;

        .product {
            width: 40%;
            .price {
                display: none ;
            }
        }
        .price, .rebate, .subtotal {
            width: 20% ;
            text-align: center ;
        }
        .controls{
            width: 50% ;
            position : absolute;
            bottom: 0 ;
            right: 5% ;
            text-align: end ;
            font-size: 14px ;
            span {
                cursor: pointer;
            }
            
            .remove{
                margin-left: 5% ;
                text-decoration: underline ;
                color: ${colours.red}
            }
            .move_wishlist{
                text-decoration: underline ;
                color: ${colours.primary}

            }
        }
    }
`

const SumaryContainer = styled.section`  
    width: 25% ;
    display: flex ;
    flex-direction: column ;

    .container_button{
        width: 100% ;
        display: flex ;
        justify-content: space-between ;
        margin-top: 10px ;
    }

`

const itensBreadcrumbs : ItemsBreacrumbs[] = [
    {
        item: "Home",
        link: "/"
    },
    {
        item: "My Cart",
        link: ""
    }
]


export const Cart = () => {

    const {getBag, setBag, currentBag, setCurrentBag} = useContext(Context)

    const [bagChange, setBagChange] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        setCurrentBag(getBag)
    }, [])

    useEffect(() => {
        setBag(currentBag)
    }, [bagChange])


    const handleCart = (id : string | undefined) => {
        setCurrentBag(bag => {
            return {...bag, products : bag.products.filter(item => item._id != id )}
        })   
        setBagChange(!bagChange)
    }

    return(
        <StyleContainer>
            <Breadcrumbs itens={itensBreadcrumbs}/>
            <StyleTitle>My Cart</StyleTitle>
            <MainContent>
            <ProductContainer>
                <div className="head content_info">
                    <div className="product">Produc Name</div>
                    <div className="price">Price</div>
                    <div className="rebate">Discount</div>
                    <div className="subtotal">Subtotal</div>
                </div>
                {currentBag.products.map((item) => {
                return(
                <div className="content_info">
                    <div className="product"> 
                        <ProductCard
                            _id= {item._id}
                            description = {item.description}
                            qtd = {item.qte}
                            brand = {item.brand}
                            price = {Number (item.price && item.rebate ? item.price * item.rebate / 100 : item.price)}
                            urlImage = {item.urlPhoto}
                        />
                    </div>
                    <div className="price">${Number (item.price).toFixed(2)}</div>
                    <div className="rebate">{item.rebate + "%" || ""}</div>
                    <div className="subtotal">${Number(item.price && item.rebate && item.qte? (item.price * item.rebate / 100) * item.qte : item.price).toFixed(2)}</div>
                    <div className="controls"> 
                        <span className="move_wishlist">Move To Wishlist</span>
                        <span className="remove" onClick={() => handleCart(item._id) }>Remove</span>
                        
                    </div>
                </div>
                )
            })}
            </ProductContainer>
            <SumaryContainer>
                <OrderSumary bagCurrent={currentBag}/>
                <div className="container_button">
                    <Button 
                        className="btn_next"
                        type="primary"
                        height="35px"
                        width="45%"
                        onclick={()=> nav("/contact")}> 
                         
                        Place Order
                    </Button>
                    <Button 
                        className="btn_next"
                        type="outline"
                        height="35px"
                        width="45%"
                        onclick={()=> nav("/")}
                        > 
                        Continue Shopping
                    </Button>
                </div>
            </SumaryContainer>
            </MainContent>
        </StyleContainer>
    )
}