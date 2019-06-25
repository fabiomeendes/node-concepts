const fs = require('fs');

const path = `${__dirname}/archive.json`;

// sync
const content = fs.readFileSync(path, 'utf-8');
console.log(content);
// not recommend

// async
fs.readFile(path, 'utf-8', (err, cont) => {
  const config = JSON.parse(cont);
  console.log(`${config.db.host}:${config.db.port}`);
});

//

const config = require('./archive.json');

console.log(config.db);


fs.readdir(__dirname, (err, archives) => {
  console.log('Page content');
  console.log(archives);
});

// __dirname = all current node modules
