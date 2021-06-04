import { server } from './server';
import './DB';
//Arrancamos el servidor en el puerto 4000
server.start({port: 4000}, ({port}) => {
    console.log('El servidor esta en el puerto', port)
})
