const fs = require('fs');

const product = {
  name: 'Cellphone',
  price: 1233.23,
  discount: 0.15,
};

fs.writeFile(`${__dirname}/archiveGenerated.json`, JSON.stringify(product), (err) => {
  console.log(err || 'Saved file!');
});
