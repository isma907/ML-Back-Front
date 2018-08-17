function ProductDetail() {
    var producto = {
        link: "",
        author: {
            name: "String",
            lastname: "String"
        },
        item: {
            id: "String",
            title: "String",
            price: {
                currency: "String",
                amount: "Number",
                decimals: "Number",
                picture: "String",
                condition: "String",
                free_shipping: "Boolean",
                sold_quantity: "Number",
            },
            description: "String"

        }
    }
    return producto
}


module.exports = ProductDetail