const path = require('path');
const express = require('express');
//create express app
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

//use public dir to server
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, ()=>{
  console.log('server is up!');
});

