import express from 'express';

import config from '../config.js';
import userRoutes from './components/user/network.js'
import authRoutes from './components/auth/network.js'

const app = express();

app.use(express.json());

// Router
app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.listen(config.api.port, 
    () => console.log('listening on port ' + config.api.port));


