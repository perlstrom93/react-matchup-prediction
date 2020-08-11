const express = require('express');

const router = express.Router();

const registration = require('./registration');
const signin = require('./signin');

router.get('/test', async (req, res) => {
  res.send('test');
})

router.post('/register', registration);
router.post('/signin', signin);

module.exports = router;
