const port = 3003;

const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  res.send(database.getProducts());
});

app.get('/products/:id', (req, res) => {
  res.send(database.getProduct(req.params.id));
});

app.post('/products', (req, res) => {
  const product = database.saveProduct({
    name: req.body.name,
    price: req.body.price,
  });
  res.send(product); // JSON
});

app.put('/products/:id', (req, res) => {
  const product = database.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price,
  });
  res.send(product); // JSON
});

app.delete('/products/:id', (req, res) => {
  const product = database.deleteProduct(req.params.id);
  res.send(product); // JSON
});

// app.get('/products', (req, res, next) => {
//   res.send({ name: 'Notebook', price: '2949.22' }); // Convert to JSON (send)
// });

// app.get('/products', (req, res, next) => {
//   console.log('Middleware 1...');
//   next();
// });

// app.use((req, res, next) => {
//   res.send({ name: 'Notebook', price: '2949.22' }); // Convert to JSON (send)
// });


app.listen(port, () => {
  console.log(`Server is executing on port: ${port}`);
});
