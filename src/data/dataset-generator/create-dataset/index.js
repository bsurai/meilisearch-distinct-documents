const { isArray } = require('../../../utils');
const { Document } = require('../document');

module.exports.createDataset = function({ brands = [], productTypes = [], sizes = [] }) {
  const dataSet = [];
  const validArrays = isArray(brands) && isArray(productTypes) && isArray(sizes);

  if (validArrays) {
    brands.forEach((brand) => {
      productTypes.forEach((productType) => {
        sizes.forEach((size) => dataSet.push(new Document({ brand, productType, size })));
      });
    });
  }

  return dataSet;
}
