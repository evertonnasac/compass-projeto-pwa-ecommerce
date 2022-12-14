import { Request, Response } from "express";
import { UserModel } from "../models/User";
import connect from "../db/connect";
import bcrypt from "bcrypt"

export class UserContoller {

    static saveUser = async (req : Request, res : Response) => {

        const {name, password, email, phone} = req.body


        await connect.getConnect()

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        try{
            const user = new UserModel(
                {
                    name,
                    email, 
                    password : passwordHash,
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
            res.status(500).json(err)
            return
        }
       
    }

    static login = async (req : Request, res : Response) => {

        const {email, password} = req.body

        await connect.getConnect()

        try{
            
            let user = await UserModel.findOne({email : email}) 

            if(!user){
                res.status(404).json({message: "Uusario não encontrado"})
            }

            const comparePassword = bcrypt.compare(password, user?.password ? user?.password : "")

            if(!comparePassword){
                res.status(422).json({message: "Senha inválida"})
                return
            }

            res.status(200).send(user?.id)

        }
        catch(err){
            res.status(500).json(err)
            return
        }
    }

}