import { Schema, model } from 'mongoose';

interface IProduct {
    productId? : number,
    brand?: string
    category: string,
    description: string
    price: number,
    rebate?: number
    rate?: number
    totalRatings?: number,
    urlImage : string,
    options?: [],
    attributes: {}

}

export const productSchema = new Schema<IProduct> ({
    brand: {type: String},
    category: {type: String},
    description: {type: String},
    price : {type: Number},
    rate: {type: Number},
    rebate : {type: Number},
    totalRatings : {type: Number},
    urlImage: {type: String},
    options: {type: Array},
    attributes: {type: Object}

})

export const ProductModel = model("products", productSchema)

