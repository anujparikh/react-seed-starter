import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

const server = app.listen(port, function(err) {
    server.keepAliveTimeout = 0;
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});