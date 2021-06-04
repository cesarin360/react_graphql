import {Schema, model} from 'mongoose'

const librosSchema =  new Schema({
    libro: {
        type: String,
        required: true 
    },
    genero: {
        type: String,
        required: true 
    },
    autor: {
        type: String,
        required: true 
    },
    enlace: {
        type: String,
        required: true
    }
});

export default model('Libros', librosSchema);