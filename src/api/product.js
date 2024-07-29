// src/api/product.js
async function search(query) {
  // Dummy function to simulate an API call
  return Promise.resolve(`Results for ${query}`);
}

async function info(id) {
  // Dummy function to simulate an API call
  return Promise.resolve(`Info for product ${id}`);
}

module.exports = {
  search,
  info
};
