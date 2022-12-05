import MongoContainer from '../containers/MongoContainer.js';
import { cartModel } from '../Models/CartsModel.js';

class CartsMongoDao extends MongoContainer{
    constructor(){
        super(cartModel)
    }
}

export default CartsMongoDao