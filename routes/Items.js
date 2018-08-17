const router = require("express").Router();
const request = require('request');
const axios = require('axios');
const ProductDetail = require("../models/Products")
const ProductList = require("../models/ProductList")


router.get("/:id", (req, res, next) => {
    var auxID = req.params.id;
    if (auxID) {
        axios.all([
            axios.get('https://api.mercadolibre.com/items/' + auxID),
            axios.get('https://api.mercadolibre.com/items/' + auxID + '/description')
        ])
            .then(axios.spread((resA, resB) => {
                const datos = resA.data;
                const description = resB.data;
                const producto = new ProductDetail;
                producto.link = datos.permalink
                producto.author.lastname;
                producto.author.lastname
                producto.item.id = datos.id
                producto.item.title = datos.title
                producto.item.price.currency = datos.currency_id
                producto.item.price.amount = parseInt(datos.price)
                producto.item.price.decimals = parseInt(datos.price.toFixed(2).split(".")[1]);
                producto.item.price.picture = datos.pictures[0].secure_url;
                producto.item.price.condition = datos.condition
                producto.item.price.free_shipping = datos.shipping.free_shipping
                producto.item.price.sold_quantity = datos.sold_quantity
                producto.item.description = description.plain_text
                res.json(producto);
            })).catch((err) => {
                res.status(err.response.status).send({ error: err.response.statusText });
            })
    }
})




router.get("/search/:query", (req, res, next) => {
    var query = req.params.query;
    var limit = req.query.limit;
    if (query) {
        axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=' + limit)
            .then(function (response) {
                var data = response.data;
                var productList = [];

                data.results.forEach(el => {
                    const producto = new ProductList;
                    producto.id = el.id
                    producto.title = el.title
                    producto.category = el.category_id
                    producto.picture = el.thumbnail
                    producto.price = el.price
                    producto.free_shipping = el.shipping.free_shipping
                    producto.state_address = el.address.state_name
                    productList.push(producto)
                });
                res.json(productList);
            }).catch((error) => {
                res.send(err.response.data)
            })
    }
})

module.exports = router;