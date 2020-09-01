const express = require('express');

const router = express.Router();

router.get('/second', (req, res) => {
        res.send('On Second')
    });

module.exports = router;