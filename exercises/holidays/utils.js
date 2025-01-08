const fs = require('node:fs');
const path = require('node:path');

const readJSONFile = (filePath) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writeJSONFile = (filePath, data) => {
  fs.writeFileSync(
    path.join(__dirname, filePath),
    JSON.stringify(data, null, 2)
  );
};

module.exports = { readJSONFile, writeJSONFile };
