import mongoose from "mongoose";//Para utilizar mongo DB
//Le pasamos el enlace de la base de datos 
mongoose.connect("mongodb://localhost/Books",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('>Conexión BD Exitosa<'))
    .catch(err => console.log(err));