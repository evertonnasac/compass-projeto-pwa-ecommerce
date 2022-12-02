import express, { application, Request, Response } from "express"
import connect from "./db/connect"
import {ProductModel} from "./models/Product"
import {AttributesSchemaModel} from "./models/ProductAttributes"
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
        await connect.getConnect()
        ProductModel.find((err: any, result)=>{
            resp.status(200).send(result)
        })
    }
    catch(err){
        console.log(err)
        resp.status(404).send(err)
    }
   
})

app.get("/products/:cat", async (req:Request, resp: Response)=>{

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

    
})

app.post("/products/filter/:cat", async (req: Request, resp: Response ) =>{

    let filters = req.body.filters
    const category = req.params.cat
    console.log(filters)
    

    try{
    
       const list = await ProductModel.find({$and : [{$or : filters}, {category:category}]})
       console.log(list)
       resp.send(list)
       
     }
     catch(err){
         console.log(err)
     }
 
})

/*
const product =  new ProductModel({
    options : ["P", "M", "G"],
    category:"sungless", 
    brand:"Oackley",
    description:"Juliet Orange Master",
    price:599.90,
    rebate:50,
    rate: 1500,
    totalRatings:500,
    urlImage:"public/images/product/product6-store.png",
    attributes: {color: "Orange", frame: "Sporty", lens: "Mirrored"},

})

const insert = async () => {
    await connect.getConnect()
    product.save()
}


insert()
*/

app.listen(5000, ()=>{
    console.log("rodando na 5000")
})