let DealController = require('./controllers/Deal.controller');
var express = require('express');
var router = express.Router();
var app = express();

let dealController = new DealController();


app.get('/deals/migrate', async function (req, res) {

    dealController.migrateDeals()
        .then(deals => res.json({ success: true, data: deals }))
        .catch(err => res.json(err));

});

app.get('/deals/day', async function (req, res) {

    dealController.getDeals()
        .then(deals => res.json({ success: true, data: deals }))
        .catch(err => res.json(err));

});


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});