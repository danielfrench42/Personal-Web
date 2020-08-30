
const express = require('express');
const router = express.Router();
const path = require('path');

const app = express();

//MIDDLEWARES

// app.use('/about', () => {
//     console.log('This is a middleware running')
// });



//ROUTES
app.get('/', (req, res) => {
    res.send('/index.html')
});

app.get('/about', (req, res) => {
    res.send('On About')
});

app.listen(8080);