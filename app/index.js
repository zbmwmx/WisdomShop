const Koa = require("koa");
const mongoose = require("mongoose");
const bodyparser = require('koa-bodyparser');
const { connstr } = require("./config");
const app =  new Koa();

const directing = require('./routers');
app.use(bodyparser());
directing(app);
app.listen(3000);


mongoose.connect(connstr, { useNewUrlParser: true } , () => console.log('connected'));
mongoose.connection.on('error',console.error);
//middleware
// router.get('/',async(ctx,next) =>{  
// });
 


