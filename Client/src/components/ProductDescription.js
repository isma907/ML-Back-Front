import React from "react"

const ProductDescription = (props) => {
    this.descripcion = props.data;

    return (
        <div id="product_description">
            <h3>Descripción del producto</h3>
            <p>
                {this.descripcion}
            </p>
        </div>
    )
}

export default ProductDescription;