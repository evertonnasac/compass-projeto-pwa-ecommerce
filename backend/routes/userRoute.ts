import {Router} from "express"
const userRoute = Router()
import { UserContoller } from "../controllers/UserController"

userRoute.post("/",UserContoller.saveUser )

export {userRoute}