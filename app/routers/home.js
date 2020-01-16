const Router = require("koa-router");
const router = new Router();

router.get('/',ctx =>{
    ctx.body = 'welcome to WisdomShop homepage';
});

module.exports = router;