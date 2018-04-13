import config from './config'
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
import serverRender from './serverRender';

const server = express();

// sassMiddleware config
server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'), // source directory
    dest: path.join(__dirname, 'public') // destination directory
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    serverRender()
    .then(content => {
        res.render('index', {
            content
        });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});