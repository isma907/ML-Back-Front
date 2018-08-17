import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "./Header"
import Producto from "./Producto"
import Busqueda from "./Busqueda"


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header></Header>
                </div>
                <div className="breadnav container">
                </div>
                <div className="container main-container">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Busqueda} />
                            <Route exact path="/items/" component={Busqueda} />
                            <Route exact path="/items/:id" component={Producto} />
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

export default App;