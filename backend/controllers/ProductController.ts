import express, { application, Request, Response } from "express"
import connect from "../db/connect"
import {ProductModel} from "../models/Product"
import {AttributesSchemaModel} from "../models/ProductAttributes"



export class ProductController  {
    
    static getproducts =  async (req:Request, resp:Response) =>{

        try{

            await connect.getConnect()
            ProductModel.find((err: any, result)=>{
                resp.status(200).send(result)
            })
        }
        catch(err){
            console.log(err)
            resp.status(404).send(err)
        }
       
    }

    static getProductsByCategory = async (req:Request, resp: Response)=>{

        const cat  = req.params.cat;

        await connect.getConnect()
        let list : any = []
    
        try{
        
           list[0] = await ProductModel.find({category : cat})
        }
        catch(err){
            console.log(err)
        }
    
        try{
            let attr = await AttributesSchemaModel.find({product: cat})
            list[1] = attr[0]["attributes"]
        }
        catch(err){
    
        }
      
        resp.send(list)
    }
    
    static getProductByFilter =  async (req: Request, resp: Response ) =>{

        let filters = req.body.filters
        const category = req.params.cat
        
        try{
        
           const list = await ProductModel.find({$and : [{$or : filters}, {category:category}]})
           resp.send(list)
           
         }
         catch(err){
             console.log(err)
         }
     
    }

    static getProductById =  (req : Request, resp : Response) =>{
    
        let id = req.params.id

        try{

            ProductModel.findById(id, (err:any, result:any) =>{
                if(err){
                    resp.status(404).send(err)
                    console.log(err)
                }
                resp.status(200).send(result)
            })
        }
        catch(err) {
            console.log(err)
        }
    
       
    
    }
}