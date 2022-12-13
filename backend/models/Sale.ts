import { Schema, model } from 'mongoose';


export const saleSchema = new Schema ({
    id_user: {type: String},
    products : {type : Array},
    total: {type: Number},
    payment : {type : String},
    status : {type  : String}
})

export const SaleModel = model("sale", saleSchema)

