const Router = require('koa-router');
const router = new Router({prefix:'/users'});
const DB = [{name :'JOHN'}] 

router.get('/',(ctx) => {
    ctx.body = DB;
});


router.get('/:id',(ctx)=>{
    ctx.body = DB[(ctx.params.id-1)*1];
});

router.post('/',(ctx)=>{
    DB.push(ctx.request.body);
    ctx.body = DB;     
    ctx.status = 202;
})

router.put('/:id',(ctx)=>{
    DB[ctx.params.id*1]= ctx.request.body;
    ctx.body=ctx.request.body;
    
})

router.delete('/:id',(ctx)=>{
    try {
        if(ctx.params.id>=1){
            ctx.body = DB.splice((ctx.params.id-1)*1,1);
            ctx.status = 204;
        }
    } catch (error) {
        throw error('param is not right,please recheck');
    }
    
  
})


module.exports = router 