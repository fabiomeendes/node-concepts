const port = 3003;

const express = require('express');

const app = express();

app.get('/products', (req, res, next) => {
  res.send({ name: 'Notebook', price: '2949.22' }); // Convert to JSON (send)
});

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
