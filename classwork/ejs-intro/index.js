const path = require('node:path');
const express = require('express');
// const ejs = require('ejs');app.set("views", "./views");

const Config = require('./config');

const app = express();
app.set('views', path.join(__dirname, 'views'));

const index = path.join(__dirname, 'views', 'index.ejs');
// const about = path.join(__dirname, 'public', 'about.html');
const user = { name: 'James', age: 33 };
app.use(express.static('public'));

// app.get('/styles.css', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'styles.css'));
// });
//

// app.get('/change-name', (req, res) => {
//   user.name = 'Bob';
//   res.render(index, { user: user.name });
// });

// app.get('/', (req, res) => {
//   res.render(index, { user: user.name });
// });

// app.get('/about', (req, res) => {
//   res.sendFile(about);
// });

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, 'public', '404.html'));
// });

// app.set('some_setting', 55);
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // ejs.renderFile(index).then((template) => {
  //   console.log(template);
  //   res.send(template);
  // });

  const template = ejs.render(index);
  res.render(template);
});

app.listen(Config.PORT, () => {
  console.log(`Server is runing on port: ${Config.PORT}`);
});
