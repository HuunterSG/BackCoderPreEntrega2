
import ProductsMongoDao from "../persistence/Daos/productsMongoDaos.js";

const db = new ProductsMongoDao();

const productGet = async(req, res)=>{
    try {
        db.getAll().then(response=>res.json(response))
    } catch (error) {
        return{error:'Productos no disponibles'}
    }
}

const productGetById = async (req,res) => {
    try {
        const {id} = req.params
        const product = await db.getById(id)
        res.send(product)
    } catch (error) {
        return{error:'Producto no encontrado'}

    }
}

const productPost = async (req,res) => {
    try {
        db.save(req.body).then(response => res.json(response))
    } catch (error) {
        return{error:'Producto no guardado'}
    }
}

const productPut = async (req,res) => {
    try {
        const {id} =req.params;
        const {name,price,stock}= req.body;
        const productUpdate = await db.update(id, {name,price,stock})
        res.send(productUpdate)
    } catch (error) {
        return{error:'Producto no Modificado'}
    }
}

export {productGet,productGetById,productPost,productPut}