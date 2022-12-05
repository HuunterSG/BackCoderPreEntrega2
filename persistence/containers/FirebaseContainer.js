class FirebaseContainer{
    constructor(collection){
        this.collection = collection;
    }

    async getAll() {
        try {
            const data = await this.collection.get()
            const dataArray = data.docs.map(item=> {return {id: item.id, ...item.data()}})
            return dataArray
        } catch (error) {
            return {error: 'Algo ha salido mal'}
        }
    }

    async getById(id){
        try {
            const data = await this.collection.doc(id).get().then((docRef)=> {return docRef.data()})
            return data
        } catch (error) {
            return {error: 'Algo ha salido mal'}
        }
    }

    async save(obj){
        try {
            await this.collection.doc().create(obj)
            return {success: 'Objeto Guardado con Exito'}
        } catch (error) {
            return {error: 'Algo ha salido mal'}
        }
    }

    async deleteById(id){
        try {
            const data = await this.collection.doc(id).delete()
            return data
        } catch (error) {
            return {error: 'Algo ha salido mal'}
        }
    }

    async deleteAll(){
        try {
            const data = await this.collection.get().then(res => { res.forEach(element => { element.ref.delete() }) });
            return data;
        } catch (error) {
            return { error: 'Algo ha salido mal' }
        }
    }
}

export default FirebaseContainer;