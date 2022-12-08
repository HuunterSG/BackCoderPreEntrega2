import { Router } from "express";
import { isAdmin } from "../middlewares/admin.js";
import { cartGetAll,cartGetById,cartPost,cartPut,cartDelete } from "./cartLogic.js";
const cartRouter = Router()

cartRouter.get('/',cartGetAll)
cartRouter.get('/:id', cartGetById)
cartRouter.post('/',isAdmin ,cartPost)
cartRouter.put('/:id',isAdmin ,cartPut)
cartRouter.delete('/:id',isAdmin ,cartDelete)

export{cartRouter}