const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const mongoose = require('mongoose');
const Task = require('./src/models/Person');
const bodyParser = require('body-parser');
const routes = require('./src/api/routes/UserRoutes'); //importing route
const compiler = webpack(webpackConfig);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TiChiBudjet');

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  console.log('requested Url', req.url);
  next()
});

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));


routes(app); //register the route

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
