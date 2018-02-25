const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')

// Do work here
// router.get('/', storeController.myMiddleware, storeController.homePage);
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

/* router.get('/', (req, res) => {
  res.send('Hey! It works!');

  // const wes = {name: 'Wes', age: 100, cool: true};
  // res.json(wes);
  // res.send(req.query.name);
}); */

router.get('/reverse/:name', (req, res) => {
  res.send(req.params.name);
});

router.get('/hello', (req, res) => {
  res.render('hello', {
    name: 'wes',
    dog: 'snickers'
  })
})

router.get('/hello2', (req, res) => {
  res.render('hello2')
})

module.exports = router;
