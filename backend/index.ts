import express, { Request, Response } from "express"
const app = express()


app.get("/teste", (req:Request, resp:Response) =>{
    resp.send("teste")
})


app.listen(5000, ()=>{
    console.log("rodando na 5000")
})