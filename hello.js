const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => 
  res.send('Hello World!')
)

app.get('/api', (req, res) => {
  const wes = {name: 'Wes', age: 100, cool: true};
  res.json(wes);
  //res.send(req.query.name);
})

app.post('/form', (req, res) => {
  res.json(req.body)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
