import api from "../../api/api";
import { IUser } from "../../pages/checkout/Checkout";

type ProductsBagInfo = {
    _id : string | undefined,
    brand: string | undefined,
    description: string | undefined,
    qte : number | undefined,
    price : number | undefined,
    rebate: number | undefined,
    urlPhoto: string | undefined,
}


export interface ISale {
    _id? : string
    id_user: string,
    products : ProductsBagInfo[],
    total: number,
    payment : string,
    status : string,
    address : Object,
    date : string
}

export interface IAddress {
    city : string,
    street : string,
    state : string,
    pinCode : string
    
}


export const registerSale = (payment : string) => {

    let listProducts = JSON.parse(localStorage.getItem("bag") || "")
    listProducts = listProducts.products

    let subtotal =  Number (listProducts.reduce((acc : number, {price , rebate, qte}: ProductsBagInfo) => 
        price && rebate && qte ?  acc + ((price  * rebate /100) * qte) : price? price : acc, 0)).toFixed(2)

    let addressCurrent: IAddress  =  JSON.parse(localStorage.getItem("address_current") || "")

    let user = JSON.parse(localStorage.getItem("userPWA") || "")

    const sale : ISale = {
        id_user : user["_id"],
        payment : payment,
        products : listProducts,
        address : addressCurrent,
        status : "Processing",
        total : Number (subtotal),
        date : "data"
    }

    api.post("/sale", {...sale})
    .then(result => localStorage.removeItem("address_current"))
    .catch(err => console.log(err))
}