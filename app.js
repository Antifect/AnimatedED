const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'app','index.html'));
});

app.listen(port, () => console.log(`listening on ${port}`))