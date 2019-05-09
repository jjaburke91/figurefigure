const Express = require('express');
const debug = require('debug')('api');

const app = new Express();
const port = process.env.PORT || 8080;

// express configs
require('./config/express')(app);

// start app
app.listen(port, (error) => {
  if (!error) {
    debug(`📡  Running on port: ${port}`);
  }
});
