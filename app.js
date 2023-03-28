require('dotenv').config()
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

const genericOpts = {
    name: 'Cesar Lopez',
    title: 'Node Express'
}

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Serve static content
app.use(express.static('public')); //public has preference, if route is not found in public, it searches it in the following route definitions

app.get('/',  (req, res) => {
    res.render('home', genericOpts);
});

app.get('/generic',  (req, res) => {
    res.render('generic', genericOpts);
});

app.get('/elements',  (req, res) => {
    res.render('elements', genericOpts);
});

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});