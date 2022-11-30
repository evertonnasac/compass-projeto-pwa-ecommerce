import express, { Request, Response } from "express"
const app = express()
import connect from "./db/connect"
import {ProductModel} from "./models/Product"


app.get("/products", async (req:Request, resp:Response) =>{

    try{
        const conn = await connect.getConnect()
        ProductModel.find((err: any, result)=>{
            resp.send(result)
        })
    }
    catch(err){
        console.log(err)
        resp.send(err)
    }
   
})


app.listen(5000, ()=>{
    console.log("rodando na 5000")
})