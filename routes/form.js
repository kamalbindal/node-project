const express = require('express');

const router = express.Router();

const formController = require('../controllers/form');

router.post('/submit', formController.postForm);

module.exports = router;