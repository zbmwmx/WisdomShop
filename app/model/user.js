var mongoose = require('mongoose');
var {Schema,model}= mongoose;

var userSchema = new Schema({
    __v: { type: Number, select: false },
    username :{type:String,required:true},
    password :{type : String ,required:true ,select:false},
    // avatar_url:{type}, // todo
    gender:{type:String,enum :['male','female'],default:'male', required :true},
    headline:{type:String,required:false},
    locations:{type:String,required:true},
    business:{type:String},
    profession:{type:String},
    education:{type:String},
    certification:{type:String},
    resume:{type:String},
});

module.exports = model('User', userSchema);