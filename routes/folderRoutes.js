const express = require('express');
const folderController = require('../controllers/folderController')

const router = express.Router();


router.post('/', folderController.folder_create_post);
router.get('/', folderController.folder_index);
router.get('/:uuid', folderController.folder_details);
router.delete('/:uuid', folderController.folder_delete);
router.put('/:uuid', folderController.folder_update);

router.get('/', (req, res) => {
    res.send({
        "response": "success"
    })
});

module.exports = router