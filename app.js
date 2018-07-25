const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'app','index.html'));
});

fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})

app.listen(port, () => console.log(`listening on ${port}`));