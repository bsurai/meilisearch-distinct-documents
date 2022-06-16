const { existsSync, writeFileSync } = require('fs');

module.exports.saveDataset = function(text, path) {
  writeFileSync(path, text, { encoding: 'utf-8' });
}
