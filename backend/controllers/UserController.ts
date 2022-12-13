import { Request, Response } from "express";
import { UserModel } from "../models/User";

export class UserContoller {

    static saveUser = async (req : Request, res : Response) => {

        const {name, password, email, phone} = req.body

        try{
            const user = new UserModel(
                {
                    name,
                    email, 
                    password,
                    phone,
                    bag : {},
                    wishList : [],
                    urlPhoto : "public/user/user.png"
                }   
            )
    
            const newUser = await user.save()
            res.status(200).json(newUser._id)

        }
        catch(err){
            res.status(500).json({message: "Tente novamente mais tarde"})
            return
        }
       
    }

    

}