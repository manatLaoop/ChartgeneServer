const mongoose = require('mongoose');


const Schema = mongoose.Schema({
       
    nameLastname:{type:String},
    username:{type:String , required:true , uniunique : true , trim: true},
    password:{type:String , required:true , trim: true} ,
    profile:{type:String , trim: true},
    address:{type:Array , required:true}, 
    email:{type:String , required:true , trim:true},
 Status:{  type:Number ,  enum:[1 , 2 , 3] , default:1 }
} ,  { timestamps: true });

module.exports = mongoose.model('user' ,  Schema);
