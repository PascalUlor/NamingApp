import config from './config'
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';
import serverRender from './serverRender';

const server = express();
server.use(bodyParser.json());

// sassMiddleware config
server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'), // source directory
    dest: path.join(__dirname, 'public') // destination directory
}));

server.set('view engine', 'ejs');

server.get(['/', '/contest/:contestId'], (req, res) => {
    serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
        res.render('index', {
          initialMarkup, initialData
        });
    })
    .catch(error => {
        console.error(error);
        res.status(404).send("Bad request");
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});