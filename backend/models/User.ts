import { Schema, model } from 'mongoose';


export const userSchema = new Schema ({
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    password: {type: String},
    wishList: {type: Array},
    bag: {type: Object},
    urlPhoto: {type: Object},
})

export const UserModel = model("users", userSchema)

