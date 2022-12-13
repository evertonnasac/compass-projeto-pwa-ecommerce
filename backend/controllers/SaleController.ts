import { Request, Response } from "express";
import { SaleModel } from "../models/Sale";


export class SaleController {
     
    static registerSale = async (req : Request, res : Response) => {

        const {id_user, products, total, payment} = req.body

        try{
            const sale = new SaleModel(
                {
                    id_user,
                    products, 
                    total,
                    payment,
                    status : "Processing"
                }   
            )
    
            const newsale = await sale.save()
            res.status(200).json(newsale._id)

        }
        catch(err){
            res.status(500).json({message: "Tente novamente mais tarde"})
            return
        }
    }

    static getSaleByUser = async (req: Request, res : Response) => {

        const id  = req.params.id_user;

        try{

            const result = await SaleModel.find({id_user : id})
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

}