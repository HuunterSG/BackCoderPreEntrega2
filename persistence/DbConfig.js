import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config()

export async function connect(){
    const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.9mm5lez.mongodb.net/SegundaPreEntrega?retryWrites=true&w=majority`
    mongoose.connect(URL)
    mongoose.connection.on('open', () => console.log(`Conectado a MongoDB`))
    mongoose.connection.on('error', (e) => console.log(e))
}