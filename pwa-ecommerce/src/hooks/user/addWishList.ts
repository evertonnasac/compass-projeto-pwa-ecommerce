import { AxiosError } from "axios";
import api from "../../api/api";



export const addProductWishList = (product : string | undefined ) => {

    if(!product){
        return
    }

    let idUser = JSON.parse(localStorage.getItem("userPWA") || "")["_id"]
    console.log(idUser)
    try{

        api.post("user/addwishlist", {idUser, product })

        .then(result => console.log(result))
        .catch(err => console.log(err))
    
    }
    catch(err : AxiosError | any){
        console.log(err.response.data.message)
        return false
    }
}