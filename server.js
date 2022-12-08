import express from "express";
import {connect } from './persistence/DbConfig.js';
import { cartRouter } from "./routes/cartRoutes.js";
import { productsRouter } from "./routes/productRouter.js";

const app= express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/products',productsRouter)
app.use('/carts', cartRouter)

const PORT = process.env.PORT || 8080;
try{
    await connect();
    app.listen(PORT,()=> console.log(`Escuchando en el puerto: ${PORT}`));
} catch (error){
    console.log(error)
}