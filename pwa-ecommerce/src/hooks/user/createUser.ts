import { AxiosError } from "axios";
import api from "../../api/api";

interface IUser{ 
    name : string,
    phone : string,
    email: string,
    password : string,
    comfirmPassword : string
}

export const createUser =  async (user : IUser) => {


    try{

        if (user.password != user.comfirmPassword){
            console.log("Password no matches")
            return false
        }
    
        let result = await api.post("/user/register", {...user})
        console.log(result.data)
        saveSessionUser(result.data)
        return true
    
    }
    catch(err : AxiosError | any){
        console.log(err.response.data.message)
        return false
    }

  

}

const saveSessionUser = (user : Object) => {
    localStorage.setItem("userPWA", JSON.stringify (user))
}