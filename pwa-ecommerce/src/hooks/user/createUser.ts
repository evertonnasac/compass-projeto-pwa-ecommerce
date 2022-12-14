import api from "../../api/api";

interface IUser{ 
    name : string,
    phone : string,
    email: string,
    password : string,
    comfirmPassword : string
}

export const createUser =  async (user : IUser) => {
    if (user.password != user.comfirmPassword){
        console.log("Password no matches")
        return
    }

    let result = await api.post("/user/register", {...user})
    console.log(result.data)
    saveSessionUser(result.data)

}

const saveSessionUser = (id : string) => {
    localStorage.setItem("userPWA", id)
}