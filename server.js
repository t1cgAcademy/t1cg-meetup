const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3002;
const app = express();

//if the host environment is in production, use files from client/build
if (app.get('env') === 'production') {
  app.use(express.static('client/build'));
} else {
  //otherwise, use middleware morgan in development
  const logger = require('morgan');
  app.use(logger('dev'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//using the routes
app.use(require('./routes'));

//make the server listen for requests
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
