var express = require('express');
var cors = require('cors');

const canonize = (url) => {
    let result = url.replace(/\s{2,}/g, '').match( /((http:|https:)?(\/\/)?(www.)?([a-z0-9-]+\.)?([a-z0-9-]+\/)?)?@?([a-zа-яё0-9._]+)/ );
    result = result[result.length - 1];
    return "@" + result;   
}

const app = express();
app.use(cors());

app.get('/task2c', (req, res) => {
    res.send(canonize(req.param('username')));
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});