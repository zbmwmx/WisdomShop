const Koa = require("koa");
const mongoose = require("mongoose");
const bodyparser = require('koa-body');
const parameter = require('koa-parameter');
// const Jwt = require('koa-jwt');
const { connstr } = require("./config");
const app =  new Koa();

const directing = require('./routers');

mongoose.connect(connstr, { useNewUrlParser: true, useUnifiedTopology: true} , () => console.log('connected'));
mongoose.connection.on('error',console.error);
mongoose.connection.once('open',function(){
    console.log("open mongoDB once");
  });

app.use(bodyparser());
app.use(parameter(app));
directing(app);
app.listen(3000);




