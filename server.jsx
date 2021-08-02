import express from 'express'

import config from './config';
import apiRouter from './api';

const server = express()

server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use('/api', apiRouter);


server.get('/', (req, res) => {
  res.render('index', {
    content: 'hola cola'
  });
});

server.get('/about.html', (req, res) => {
 res.send('Hola Cola About Page');
});

server.listen(config.port, () => {
 console.info(`Server listening to port ${config.port}`);
});
