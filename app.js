const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'../app')));
app.use(express.static(path.join(__dirname,'app')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'app','index.html'));
});

app.listen(port, () => console.log(`listening on ${port}`));