import mongoose from "mongoose";

async function getConnect() {
    return await mongoose.connect
 ("mongodb+srv://pwaadmin:pwaadmin@cluster0.zcydi.mongodb.net/pwacompass?retryWrites=true&w=majority")
}

export default {getConnect}