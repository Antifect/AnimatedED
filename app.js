const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.IP || 'localhost';

app.use('/app', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'app','index.html'));
});

app.listen(port, host, () => console.log(`listening on ${host}:${port}`))