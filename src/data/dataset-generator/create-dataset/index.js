const { isArray } = require('../../../utils');
const { Document } = require('../document');

let id = 1;
let productId = 1;

module.exports.createDataset = function({ brands = [], productTypes = [], sizes = [] }) {
  const dataSet = [];
  const validArrays = isArray(brands) && isArray(productTypes) && isArray(sizes);

  if (validArrays) {
    brands.forEach((brand) => {
      productTypes.forEach((productType) => {
        const pId = productId++;

        sizes.forEach((size) => {
          dataSet.push(new Document({
            brand,
            productType,
            size,
            id: id++,
            productId: pId,
          }))
        });
      });
    });
  }

  return dataSet;
}
