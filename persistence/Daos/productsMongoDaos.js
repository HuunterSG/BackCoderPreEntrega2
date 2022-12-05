import MongoContainer from '../containers/MongoContainer.js';
import { productsModel } from '../Models/ProductsModel.js';

class ProductsMongoDao extends MongoContainer{
    constructor(){
        super(productsModel)
    }
}

export default ProductsMongoDao