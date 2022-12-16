import { Request, Response } from "express";
import { SaleModel } from "../models/Sale";
import connect from "../db/connect";
import bcrypt from "bcrypt"



export class SaleController {
     
   
    static registerSale = async (req : Request, res : Response) => {

        const {id_user, products, total, payment, address, status} = req.body
        
        await connect.getConnect()
        console.log(req.body)

        const salt = await bcrypt.genSalt(12)
        const paymentHash = await bcrypt.hash(payment, salt)

        try{
            const sale = new SaleModel(
                {
                    id_user,
                    products, 
                    total,
                    payment : paymentHash,
                    status,
                    address
                }   
            )
    
            const newsale = await sale.save()
            res.status(200).json(newsale._id)

        }
        catch(err){
            console.log(err)
            res.status(500).json({message: "Tente novamente mais tarde"})
            return
        }
    }

    static getSaleByUser = async (req: Request, res : Response) => {

        const {id, status}  = req.query;
        await connect.getConnect()
        console.log(id, status)

        try{

            const result = await SaleModel.find({$and : [{id_user : id}, {status : status}]})
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

}