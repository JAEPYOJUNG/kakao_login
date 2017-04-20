const express =  require('express');
const app = express();

const PORT = 8080;
const ROOT = `${__dirname}/app/`;

app.use('/', express.static(ROOT));
app.use((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
});
app.listen(PORT, () => {
  console.log('Express listening on port', PORT);
});