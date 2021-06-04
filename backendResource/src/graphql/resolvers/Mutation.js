import Libros from "../../models/libros";
const Mutation = {
    
    createLibro: async (_, {libro, genero, autor, enlace}) => {
        const newLibro = new Libros({libro, genero, autor, enlace});
        //Nos sirve para guardar cada una de los datos que estan en la constante
        //y nos devuelve el dato que se haya creado
        return await newLibro.save();
    }
};

export default Mutation;