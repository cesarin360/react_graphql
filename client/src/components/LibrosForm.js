import React, {useState} from 'react'
import { gql } from 'apollo-boost';
import { useMutation } from "@apollo/react-hooks";
//Se realiza la sintaxis para la mutación y recibe cada uno de los valores y luego hace la llama createLibro para crear un nuevo libro
//Y hace la llamada a la API de GraphQL en el puerto que esta ejecutandose 
const setLIBROS = gql`
    mutation CreateLibro($libro: String!, $genero: String!, $autor: String!, $enlace: String!){
        createLibro(libro: $libro, genero: $genero, autor: $autor, enlace: $enlace){
            _id
        }
    }
`;
const LibrosForm = () => {

    const [libro, setLibro] = useState('')
    const [genero, setGenero] = useState('')
    const [autor, setAutor] = useState('')
    const [enlace, setEnlace] = useState('')
    //Se crear la funcion a partir de la mutación
    const [createLibro] = useMutation(setLIBROS)
    return (
        //Se crea un formulario con jsx
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className = "card-body">
                        <form onSubmit={async e =>
                            {
                                e.preventDefault();
                                await createLibro(
                                //Le pasamos cada uno de los valores a la función 
                                {variables: {libro, genero, autor, enlace}})
                                //Cuando termine redireccionamos a la pagina de inicio
                                window.location.href="/"
                            }
                        }>
                            <div className="form-group">
                                <input type="text" placeholder="Nombre del Libro" className="form-control" value={libro} onChange={e =>setLibro(e.target.value)} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="text" placeholder="Género" className="form-control" value={genero} onChange={e =>setGenero(e.target.value)}/>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="text" placeholder="Autor" className="form-control" value={autor} onChange={e =>setAutor(e.target.value)}/>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="text" placeholder="Link PDF" className="form-control" value={enlace} onChange={e =>setEnlace(e.target.value)}/>
                            </div>
                            <br></br>
                            <button className="btn btn-primary btn-block">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibrosForm;