const { meili } = require('../client');
const { INDEX_ID, INDEX_PRIMARY_KEY, INDEX_DISTINCT_ATTR } = require('../const');

async function migrate(client) {
  let shouldCreateIndex = false;

  try {
    await client.index(INDEX_ID).getRawInfo(locale);
  } catch (err) {
    shouldCreateIndex = true;
  }

  if (shouldCreateIndex) {
    const indexResult = await client.createIndex(INDEX_ID, { primaryKey: INDEX_PRIMARY_KEY });
    console.log('Sku Index created:', indexResult);

    const distinctResult = await client.index(INDEX_ID).updateDistinctAttribute(INDEX_DISTINCT_ATTR);
    console.log('Sku Distinct Attribute created:', distinctResult);
  }
  
  const distinctResult = await client.index(INDEX_ID).updateFilterableAttributes([
    'brand',
    'productType',
  ]);
  console.log('Sku Filter Attribute created:', distinctResult);
}

migrate(meili);
