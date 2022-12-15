import { AxiosError, AxiosResponse } from "axios";
import api from "../../api/api";



export const login = async (user : {email : string, password : string}) => {


    let result

    try{
        result = await api.post("user/login", {...user})
        console.log(result.data)
        localStorage.setItem("userPWA", JSON.stringify (result.data))
        return true

    }
    catch (err : AxiosError | any) {

        console.log(err.response.data.message)
        return false
    }
   


}