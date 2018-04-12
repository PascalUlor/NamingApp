import config from './config'
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';

const server = express();

// sassMiddleware config
server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'), // source directory
    dest: path.join(__dirname, 'public') // destination directory
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'These are raw text'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});