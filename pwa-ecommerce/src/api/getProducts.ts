import api from "./api";
import { PropsProductStore } from "../components/cards/products/ProductStore";


export const getProductsApi = async () =>{
    await api.get<PropsProductStore[]>("/products")
}

