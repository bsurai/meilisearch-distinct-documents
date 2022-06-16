const { MeiliSearch } = require('meilisearch');
const { MEILISEARCH_HOST, MEILISEARCH_PORT } = require('../config');

module.exports.meili = new MeiliSearch({ host: `${MEILISEARCH_HOST}:${MEILISEARCH_PORT}` });
