import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom" //Renderizamos los componentes 

import LibrosList from './components/LibrosList'
import LibrosForm from './components/LibrosForm'
import "bootswatch/dist/lux/bootstrap.min.css" //Para el estilo css
import { Navigation } from "./components/Navbar"; //importamos el navbar
function App() {
  return (
    <Router>
      <Navigation/>
      <div className = "container p-4">
      <Switch>
        {/* Cada vez que se visite una de estas paginas se va a ejecutar los componentes que le estoy pasando */}
        <Route exact path="/" component={LibrosList} />
        <Route exact path="/new-libro" component={LibrosForm} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
