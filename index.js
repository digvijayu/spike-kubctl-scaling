const express = require('express')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const body = req.body;
  console.log('body', body);
  const response = JSON.parse(JSON.stringify(body));
  res.json(response).send();
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;