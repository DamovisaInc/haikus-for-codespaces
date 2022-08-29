let express = require('express');
let app = express();
let ejs = require('ejs');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // randomize haikus
  let randomHaikus = haikus.sort(() => Math.random() - 0.5);
  res.render('index', {haikus: randomHaikus});
});

app.listen(port); 
