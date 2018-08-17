import React from "react"
import IconoEnvio from "../img/ic_shipping.png";

const ProductList = (props) => {
    this.producto = props.data;

    return (
        <a className="row-result row" href={"/items/" + this.producto.id}>
            <div className="image-container">
                <img src={this.producto.picture} alt="" />
            </div>
            <div className="col-12 col-sm-8">
                <div className="precio">
                    $ {this.producto.price}
                    {this.producto.free_shipping ? (<span> <img src={IconoEnvio} alt="envio gratis" /></span>) : ""}
                </div>
                <div className="descripcion">
                    {this.producto.title}
                </div>
            </div>
            <div className="ciudad col">
                {this.producto.state_address}
            </div>
        </a>
    )
}

export default ProductList;