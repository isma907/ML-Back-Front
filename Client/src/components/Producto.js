import React, { Component } from "react"
import ProductDescription from "./ProductDescription"
export class Producto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            pageError: null
        };
        this.product_id = props.match.params.id;
        this.product_data = {};
    }

    componentDidMount() {
        console.log(this.state)
        this.getProductData()
    }

    getProductData() {
        fetch("http://localhost:4500/api/items/" + this.product_id)
            .then(
                response => {
                    if (!response.ok) { throw response }
                    return response.json()
                }
            )
            .then(
                (result) => {
                    this.product_data = result
                    this.setState({
                        loading: false
                    });
                },
                (err) => {
                    this.setState({
                        loading: false,
                        pageError: true
                    })
                }
            )

    }

    render() {

        if (!this.state.loading && !this.state.pageError) {
            return (
                <div className="row" id="product-container">
                    <div className="col-sm-8 galery-container">
                        <img className="img-fluid" src={this.product_data.item.price.picture} alt="" />
                        <div className="row">
                            <ProductDescription data={this.product_data.item.description} />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <span className="product-status">
                            <span>{this.product_data.item.price.condition === "new" ? 'Nuevo' : 'Usado'} - </span>
                            <span>{this.product_data.item.price.sold_quantity} Vendidos</span>
                        </span>
                        <h1 className="product-title">{this.product_data.item.title}</h1>
                        <h2 className="product-price">$ {this.product_data.item.price.amount}</h2>
                        <div className="product-btn-container">
                            <a className="btn btn-lg btn-comprar" href={this.product_data.link} target="_blank">Comprar</a>
                        </div>
                    </div>
                </div >
            )
        }
        if (this.state.loading) {
            return (<div>Loading...</div>)
        }

        if (this.state.pageError) {
            return (<div>Producto no encontrado...</div>)
        }


    }

}

export default Producto;