import api from "./api";
import { PropsProductStore } from "../components/cards/products/ProductStore";


export const getProductsByCategory =  (cat : string) =>{
    api.get("/products/" + cat)
    .then((resp : any) => {

        const listProducts = resp.data[0]
        let filter = resp.data[1]

        return  {filter, listProducts}
    })
    .catch(err => console.log(err))
}

export const getProductsByFilters = async(filters : Array<Object>) =>{

}