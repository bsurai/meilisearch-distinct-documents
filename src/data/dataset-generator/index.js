const { brands } = require('../raw-data/brands');
const { productTypes } = require('../raw-data/product-types');
const { sizes } = require('../raw-data/sizes');
const { createDataset } = require('./create-dataset');
const { saveDataset } = require('./save-dataset');
const { resolve } = require('path');

const FILE_PATH = resolve(__filename, '../../dataset/dataset.json');

const generateDataset = function() {
  const dataset = createDataset({ brands, productTypes, sizes });
  saveDataset(JSON.stringify(dataset), FILE_PATH);
}

generateDataset();
