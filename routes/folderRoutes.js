const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    return {
        "response": "success"
    }
});

module.exports = router