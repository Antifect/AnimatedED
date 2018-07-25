const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const appDir=path.join(__dirname,'app');

const port = process.env.PORT || 3000;

app.use(express.static(appDir));

app.get('/', function(req, res) {
    res.sendFile(path.join(appDir,'index.html'));
});

fs.readdir(appDir, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})


app.listen(port, () => console.log(`listening on ${port}`));