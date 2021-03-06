import config from './config';
import apiRouter from './api';
import express from 'express';

const server = express();

server.set('view engine', 'ejs');

// serve api urls
server.use('/api', apiRouter);
// serve static files
server.use(express.static('public'));

server.get('*', (req, res) => {
  res.render('index');
});

// listen to requests
server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});