const express = require('express');
const { Folder, Photo } = require('../models')

const router = express.Router();


router.post('/', async (req, res) => {
    const { name, parent, notes } = req.body;

    try {
        const folder = await Folder.create({ name, parent, notes });
    
        return res.json(folder);
    } catch (err) {
        console.log(err);

        return res.status(500).json(err);
    }
});

router.get('/', (req, res) => {
    res.send({
        "response": "success"
    })
});

module.exports = router