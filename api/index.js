import express from 'express';

import config from '../config.js';
import userRoutes from './components/user/network.js'

const app = express();

// Router
app.use('/user', userRoutes)

app.use(express.json());
app.listen(config.api.port, 
    () => console.log('listening on port ' + config.api.port));


