const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();


//ROUTES
const itemsRoutes = require("./routes/Items")

//settings
app.set("port", process.env.PORT || 4500)

//middlewares
app.use(cors({
    origin: [
        "http://localhost:3000"
    ], credentials: true
}));


app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/items", itemsRoutes);
// app.get('/', function(req, res){
//     res.sendfile('index.html', { root: __dirname + "/Client/build/" } );
// });

//statics
app.use(express.static(path.join(__dirname, "/Client/build/")))

//start server
app.listen(app.get("port"), () => {
    console.log("server listo")
})