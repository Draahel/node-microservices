import express from 'express';

import config from '../config.js';
import routes from './network.js';
import errors from '../network/errors.js';

const app = express();

app.use(express.json());

// Router
app.use('/', routes);

app.use(errors);

app.listen(config.mysqlApi.port, 
    () => console.log('listening on port ' + config.mysqlApi.port));


