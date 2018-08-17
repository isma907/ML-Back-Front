import React, { Component } from "react"
import ProductList from "./ProductList"
import queryString from 'query-string'

export class Busqueda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            productos: [],
            searchLimit: 4
        };
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);

        const option = {
            q: qs.search,
            limit: this.state.searchLimit
        }
        if (qs.search) {
            this.buscar(option);
        }
    }

    buscar = function (query) {

        fetch("http://localhost:4500/api/items/search/" + query.q + "?limit=" + query.limit)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        productos: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div id="search_page">
                {this.state.productos.map((producto, i) => (
                    <ProductList key={i} data={producto} />
                ))}
            </div>
        )
    }

}

export default Busqueda;