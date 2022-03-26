const express = require('express');
const photoController = require('../controllers/photoController')

const router = express.Router();

router.post('/', photoController.photo_create_post);

module.exports = router