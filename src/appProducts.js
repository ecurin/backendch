const express = require("express");

const manager = require("./ProductManager");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // para que nuestro server sepa entender JSON

productsManager = new manager();

app.get("/", async (req, res) => {
  res.end("Bienvenido...");
});

app.get("/products", async (req, res) => {


    const limit = req.query.limit
    let nLimit = 0

    if( !isNaN(limit)){
        nLimit = parseInt(limit)
    }

    console.log("limit => ",nLimit);


    let products = await productsManager.getProducts();

    if(limit >0)
        products = products.slice(0, limit);

  res.json(products);
});



app.get("/products/:id", async (req, res) => {

  const product = await productsManager.getProductById(parseInt(req.params.id)); //req.params.id)

  if (product) {
    res.json(product);
  } else {
    res.end("error, Producto no Encontrado");
  }
});

productsManager.initialize()
    .then(() => {
    app.listen(8080, function (err) {
      console.log("Server listening on Port", 8080)
    })
    }).catch(err => {
      console.log("Error in server setup")
      console.err(err);
    });

