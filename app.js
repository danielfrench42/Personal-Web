
const express = require('express');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv/config');

//MIDDLEWARES
const aboutRoute = require('./routes/about');


// app.use('/about', () => {
//     console.log('This is a middleware running')
// });
// app.use('/public', express.static('landing-page'));


//ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'))
    // console.log(__dirname);
});

app.use('/about', aboutRoute);

// app.get('/second', (req, res) => {
//     res.send('On Second')
// });

//Wildcard redirect
// app.get('/*', (req, res) => {
//     res.redirect('/')
// });

//Connect to DB
//err is needed to cover the rejected promise

//.env file contains the uri for the DB but this is so people on github can't see the password
// const uri = "mongodb+srv://<RestUser>:<Restful12>@rest-api-test.dcnbg.mongodb.net/<Rest-API-Test>?retryWrites=true&w=majority";
const uri = process.env.DB_CONNECTION;

//newUrlParser and Unified Topology are needed in order to get past the deprecated errors
const client = new MongoClient(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true },    
);

//arrow function before err to say connected
client.connect( () => console.log('connected to DB'),
    err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });




app.listen(8080);