import  {GraphQLServer}  from 'graphql-yoga';//Nos ayuda a crear la API de GraphQL
import  resolvers  from './graphql/resolvers'; 
import  path  from 'path';

//propiedades del servidor
//instanciamos el servidor y le pasamos el schema  
export const server = new GraphQLServer({
    typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
    resolvers
})