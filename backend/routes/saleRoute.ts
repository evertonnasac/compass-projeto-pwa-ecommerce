import {Router} from "express"
import { SaleController } from "../controllers/SaleController"

const saleRoute = Router()

saleRoute.post("/", SaleController.registerSale)
saleRoute.get("/:id", SaleController.getSaleByUser)


export {saleRoute}