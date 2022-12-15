import styled from "styled-components";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import iconArrow from "../../../public/icons/arrow-goto.png"
import api from "../../api/api";
import { AccordianOrder } from "./AccordianOrder";
import { useEffect, useState , useContext} from "react";
import { ISale } from "../../hooks/sale/sale";
import { MobileItemSheet as ProductCard } from "../cards/products/MobileItemSheet";
import { TabHoriz , ItemPropNav} from "../tabs/TabHoriz";
import { Context } from "../../Contexts/ContexNavTab";
import { init } from "@storybook/api/dist/ts3.9/modules/refs";


const StyleContainer = styled.section`  
    width: 100% ;

`

const ProductContainer = styled.section` 
    display: flex;
    flex-direction: column ;
    width: 100% ;

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
    }

    @media (max-width : 899px){
        .price, .rebate{
            display: none ;
        }
    }
`

const ContainerAddress = styled.div` 
    margin: 15px 0 0 20px ;
    
    .title_address {
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight} ;
        margin: 0 0 10px 0 ;
        color: ${colours.low_emphasis}
    }
    .street, .city, .state, .pincode{
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight} ;
        margin: 5px 0 0 0 ;
        color: ${colours.high_emphasis}
    }

`
const itemNav : ItemPropNav[] = [
    {
        item: "Completed",
    },
    {
        item: "Processing"
    },
    {
        item: "Cancelled"
    },
]
   
export const Orders = () => {

    const [order, setOrder] = useState<ISale[]>([])
    const {itemSelected} = useContext(Context)



    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userPWA") || "")
        let status

        if(itemSelected == "init"){
            status = "Completed"
        }
        else{
            status = itemSelected
        }

        if(user){
            api.get(`http://localhost:5000/sale?id=${user._id}&status=${status}`)
            .then(result => setOrder(result.data))
            .catch(err => console.log(err))
        }  
    },[itemSelected])


    return (
        <StyleContainer>
            <TabHoriz array={itemNav}/>
           {order.map((item, index) => {
            return <AccordianOrder
                        date={item.date}
                        id_order={item._id}
                        price={item.total}
                        status={item.status}
                        key={index}>
                        <ProductContainer>
                            <div className="head content_info">
                                <div className="product">Produc Name</div>
                                <div className="price">Price</div>
                                <div className="rebate">Discount</div>
                                <div className="subtotal">Subtotal</div>
                            </div>
                            {item.products.map((item) => {
                            return(
                            <div className="content_info">
                                <div className="product"> 
                                    <ProductCard
                                        _id= {item._id}
                                        description = {item.description}
                                        qtd = {item.qte}
                                        brand = {item.brand}
                                        price = {Number (item.price && item.rebate ? 
                                            item.price * item.rebate / 100 : item.price)}
                                        urlImage = {item.urlPhoto}
                                    />
                                </div>
                                <div className="price">${Number (item.price).toFixed(2)}</div>
                                <div className="rebate">{item.rebate + "%" || ""}</div>
                                <div className="subtotal">${Number(item.price && item.rebate && item.qte? 
                                    (item.price * item.rebate / 100) * item.qte : item.price).toFixed(2)}
                                </div>
                            </div>
                       
                        )})}
                        </ProductContainer>
                        <ContainerAddress>
                            <p className="title_address">Address Datails</p>
                            <div className="street">
                                <span className="number">{item.address.number}</span>
                                <span className="city">{item.address.city}</span>
                            </div>
                            <p className="state">{item.address.state}</p>
                            <p className="pincode">{item.address.pinCode}</p>
                        </ContainerAddress>
                    </AccordianOrder>
           })}
        </StyleContainer>
    )

}