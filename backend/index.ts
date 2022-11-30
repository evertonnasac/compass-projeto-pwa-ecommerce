import express, { Request, Response } from "express"
import connect from "./db/connect"
import {ProductModel} from "./models/Product"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


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