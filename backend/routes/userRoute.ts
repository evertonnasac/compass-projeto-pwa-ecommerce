import {Router} from "express"
const userRoute = Router()
import { UserContoller } from "../controllers/UserController"

userRoute.post("/register",UserContoller.saveUser )
userRoute.post("/login" , UserContoller.login)
userRoute.post("/addwishlist", UserContoller.addWishList )

export {userRoute}