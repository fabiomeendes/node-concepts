const sequence = {
  _id: 1,
  get id() { return this._id; },
};

const products = {};

function saveProduct(product) {
  if (!product.id) {
    product._id = sequence.id;
  }
  products[product.id] = product;
  return product;
}

function getProduct(id) {
  return products[id] || {}; // if null returns {}
}

function getProducts() {
  return Object.values(products);
}

module.exports = { saveProduct, getProduct, getProducts };
