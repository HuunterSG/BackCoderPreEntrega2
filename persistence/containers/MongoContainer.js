class MongoContainer {
    constructor(model){
        this.model=model;
    }

    async save(obj){
        try{
            const productSchema = this.model(obj);
            const productCreated = await productSchema.save();
            return(productCreated)
        }catch(error){
            return {error:'El producto no ha podido ser guardado'}
        }
    }

    async getAll(){
        try {
            const data = await this.model.find({}) 
            return data
        } catch (error) {
            return {error:'No se ha encontrado nada'}
        }
    }

    async getById(id){
        try {
            const data = await this.model.findById(id)
            return data
        } catch (error) {
            return {error:'No hemos podido encontrara nada'}
        }
    }

    async update(id, obj){
        try {
            const updateItem= await  this.model.updateOne({ _id: id }, { $set: obj });
            return updateItem
        } catch (error) {
            return {error: 'No se ha podido Actualizar'}
        }
    }


    async deleteById(id){
        try {
            const data = await this.model.deleteOne({ _id: id });
            return data
        } catch (error) {
            return {error: 'No se pudo eliminar el item Seleccionado'}
        }
    }

    async deleteAll(){
        try {
            const data = await this.model.deleteMany({});
            return data
        } catch (error) {
            return{error: 'Algo salio mal, no se ha podido eliminar'}
        }
    }
}

export default MongoContainer