const jsontoken = require('jsonwebtoken');
const User = require('../model/user.js');
const {seceret} =require('../config.js');

class UserCrtl {
    
    async getUserList(ctx)  {      
        try {
            ctx.body = await User.find(); 
        } catch (error) {
            throw error.message;
        }   
        }   
    async getUserById(ctx){
        const user = await User.findById(ctx.params.id);
        if(!user){ctx.throw(404,'user is not exsit'); }
        ctx.body = user;
    //    var user = User.findById();
    //    console.log(user);
    }
   async createUser(ctx){
        const user = await new User(ctx.request.body).save();
        if(!user){ctx.throw(412,'parameter is not right,please check');}
         ctx.body = user;
         ctx.status = 204;
    } 

    async login(ctx){
        ctx.verifyParams({
            username: { type: 'string', required: true },
            password: { type: 'string', required: true },
          });
        const user =  await User.findOne(ctx.request.body);
        if(!user){ctx.throw(401,'username or password is not correct');}
        const {_id,username} = user;
        const token= jsontoken.sign({_id,username},seceret,{expiresIn: '1d'});
        if(token){
            ctx.body = {
                status:200,
                token
            }
        }
    }
    async updateUser(ctx){
       await findByIdAndUpdate(ctx.params.id * 1) ;
        ctx.body = ctx.request.body;
    }
    deleteUser(ctx){
        try {
            if (ctx.params.id >= 1) {
                findByIdAndDelete(ctx.params.id);
            }
        } catch (error) {
            throw error('param is not right,please recheck');
        }
    }
    register(ctx){
       const user = this.getUserById();
       if(user){
           ctx.body={
               message:"user exsit,please register another name"
           } 
       }else{
        const user = this.createUser(ctx);
           
       }
          

    }
    


}

module.exports = new UserCrtl();