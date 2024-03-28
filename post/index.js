import express from 'express';

import config from '../config.js';
import errors from '../network/errors.js';

import postRoutes from './components/post/network.js'

const app = express();

app.use(express.json());

// Router
app.use('/post', postRoutes);

app.use(errors);

app.listen(config.postApi.port, 
    () => console.log('listening on port ' + config.postApi.port));


