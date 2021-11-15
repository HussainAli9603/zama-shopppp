var PORT = process.env.PORT || 3000;
  bodyParser = require("body-parser"),
  path = require('path');
  express = require("express"),
  fs = require('fs'),
  app = require('express')();
var http = require('http');
var server = http.createServer(app);

var cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))


const jsonServer = require('json-server')
const server1 = jsonServer.create(app)
const router = jsonServer.router('data.json')
const middlewares = jsonServer.defaults(app)

server1.use(middlewares)
server1.use(router)




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// index = require('./routes/index');

adminRouter = require('./routes/admin/index');

let options = {
  priority: 'high',
  timeToLive: 60 * 60 * 24
};

app.use(express.static(__dirname + '/public', { maxAge: '30 days' }));

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/images', express.static(__dirname + '/images'));
// This folder is used for admin side
app.use('/admin', express.static(__dirname + '/admin'));
const fileUpload = require('express-fileupload');
require('dotenv').config();
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());

app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.locals.currentUser = req.user;
  next();
});

// app.use(index);
app.use(adminRouter);

app.get('/zama-shop/login', (req, res) => {
  res.render('login')
})


//server.listen(9000);
server.listen(PORT, () => {
  console.log("Server is Listening on port :", PORT);
});
server1.listen("3003", () => {
  console.log("Server Json is Listening on port :", "3003");
});

