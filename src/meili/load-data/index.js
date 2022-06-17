const data = require('../../data/dataset/dataset.json')
const { isArray } = require('../../utils');
const { meili } = require('../client');
const { INDEX_ID } = require('../const');

async function loadData(client, data) {
  if (!isArray(data)) {
    console.warn(new Date(), 'Data should be an array type');
    return;
  }

  console.log(new Date(), 'Data is loading');

  try {
    await client.index(INDEX_ID).addDocuments(data);
    console.log(new Date(), 'Data has been loaded');
  } catch (err) {
    console.error(new Date(), 'Failed Data loading', err);
  }
}

loadData(meili, data);
