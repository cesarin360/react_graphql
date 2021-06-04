import  Libros from "../../models/libros";

const Query = {
    //Consultamos el tipo de dato y devuelve la consulta
    libros: async () => {
        return await Libros.find()
    }
}
export default Query;