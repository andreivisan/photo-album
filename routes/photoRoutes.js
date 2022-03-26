const express = require('express');
const photoController = require('../controllers/photoController')

const router = express.Router();

router.post('/', photoController.photo_create_post);
router.get('/', photoController.photo_index);
router.get('/:uuid', photoController.photo_details);
router.delete('/:uuid', photoController.photo_delete);
router.put('/:uuid', photoController.photo_update);

module.exports = router