const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');

const PORT = process.env.PORT || 3002;
const app = express();

//security: https://www.npmjs.com/package/helmet - need to be the first of middleware stack
app.use(
  helmet({
    noCache: true,
    permittedCrossDomainPolicies: true
  })
);

//if the host environment is in production, use files from client/build
if (app.get('env') === 'production') {
} else {
  //otherwise, use middleware morgan in development
}

switch (app.get('env')) {
  case 'production':
    app.use(express.static('client/build'));
    break;

  case 'development':
    app.use(logger('dev'));
    break;

  default:
    app.use(express.static('client/build'));
    break;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//using the routes
app.use(require('./routes'));

//make the server listen for requests
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
