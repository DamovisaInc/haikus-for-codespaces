let express = require('express');
let app = express();
let ejs = require('ejs');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const query = req.query.q;
  let filteredHaikus = haikus;

  if (query) {
    filteredHaikus = haikus.filter(haiku => haiku.text.includes(query));
  }

  res.render('index', {haikus: filteredHaikus, query: query});
});

app.listen(port); 
