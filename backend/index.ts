import express, { application, Request, Response } from "express"
import connect from "./db/connect"
import {ProductModel} from "./models/Product"
import {AttributesSchemaModel} from "./models/ProductAttributes"
import cors from "cors"
import { productRoute } from "./routes/productRoute"
import { saleRoute } from "./routes/saleRoute"
import { userRoute } from "./routes/userRoute"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use("/products", productRoute)
app.use("/sale", saleRoute)
app.use("/user", userRoute)


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