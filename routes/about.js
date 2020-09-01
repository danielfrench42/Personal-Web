const express = require('express');

const router = express.Router();

// don't need /about anymore in function once middleware is used
router.get('/', (req, res) => {
    res.send('On About')
});

router.get('/more', (req, res) => {
    res.send('On About more')
});

module.exports = router;