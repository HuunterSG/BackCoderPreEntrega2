
import CartsMongoDao from "../persistence/Daos/cartsMongoDaos.js";

const db = new CartsMongoDao();

const cartGetAll = async(req, res)=>{
    try {
        db.getAll().then(response=>res.json(response))
    } catch (error) {
        return{error:'Productos no disponibles'}
    }
}

const cartGetById = async (req,res) => {
    try {
        const {id} = req.params
        const product = await db.getById(id)
        res.send(product)
    } catch (error) {
        return{error:'Producto no encontrado'}

    }
}

const cartPost = async (req,res) => {
    try {
        db.save(req.body).then(response => res.json(response))
    } catch (error) {
        return{error:'Producto no guardado'}
    }
}

const cartPut = async (req,res) => {
    try {
        const {id} =req.params;
        const {name,price,stock}= req.body;
        const productUpdate = await db.update(id, {name,price,stock})
        res.send(productUpdate)
    } catch (error) {
        return{error:'Producto no Modificado'}
    }
}

const cartDelete = async (req,res) =>{
    try {
        const {id} = req.params
        const productsDelete = await db.deleteById(id)
        res.json(
            {   response: "Producto eliminado",
                product: productsDelete
            })
    } catch (error) {
        return{error:'Producto no eliminado'}
    }
}

export {cartGetAll,cartGetById,cartPost,cartPut,cartDelete}