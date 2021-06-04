import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
//Se utiliza GraphQL para hacer la consulta 
const getLibros = gql`
{
    libros{
        _id
        libro
        genero
        autor
        enlace
  }
}
`;
//Mostramos los datos y declaramos constantes para error y carga
const LibrosList = () => {
    const { loading, error, data } = useQuery(getLibros)//Se hace la consulta 
    if (loading) return <p>Cargando libros...</p>
    if (error) {
        return <p>Oops... Ha ocurrido un error. 404</p>
    }

    return (
        //recorriendo los datos 
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    //map nos ayuda a recorrer cada datos a partir del inicial hasta el ultimo 
                    data.libros.map(({ _id, libro, genero, autor, enlace }) => (
                        <div key={_id} className="card m-2">
                            <div className="card-body">
                                <a className="btn btn-outline-secondary" target={"_blank"} rel="noreferrer" href={enlace} ><h4>{libro}</h4></a>
                                <br></br>
                                <br></br>
                                <p>&nbsp;Género: {genero}</p>
                                <p>&nbsp;Autor: {autor}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LibrosList;