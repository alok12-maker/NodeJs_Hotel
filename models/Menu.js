const moongose= require('mongoose');

const menuItemSchema = new moongose.Schema({
    name:{
        type : String ,
        require: true
    },
    price :{
        type : Number,
        require: true
    },
    taste : {
        type : String,
        enum : ['sweet ','spicy','sour'],
        required: true
    },
    Is_drink :{
        type :Boolean,
        default: false
    },
    ingredients :{
        type :[String],
        default: []
    },
    num_sales :{
        type:Number,
        default:0
    },
   
})

const menuItem =moongose.model('menuItem',menuItemSchema);
module.exports=menuItem;