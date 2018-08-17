import React, { Component } from "react"
import Logo from "../img/Logo_ML.png"
import IconoBuscar from "../img/ic_Search@2x.png";


export class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-default navbar-expand-lg navegacion" id="search_header">
                <div className="container p-0">
                    <div className="col-1 p-0">
                        <a href="/"><img src={Logo} alt="Mercado Libre" /></a>
                    </div>

                    <div className="col-11 pr-0">
                        <form method="get" action="/items">
                            <div className="input-group">
                                <input type="text" name="search" className="form-control buscador" placeholder="Nunca dejes de buscar" />
                                <div className="input-group-append">
                                    <button className="btn btn-sm buscar-btn">
                                        <img src={IconoBuscar} alt="buscar" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;