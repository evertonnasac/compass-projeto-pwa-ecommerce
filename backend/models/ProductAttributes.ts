import { Schema, model } from "mongoose";

const AttributesSchema = new Schema({
    product : {type: String},
    attributes : {types : Array<string>}

})

export const AttributesSchemaModel = model("products_attributes", AttributesSchema)