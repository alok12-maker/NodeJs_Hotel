const moongose= require('mongoose');

const personSchema = new moongose.Schema({
    name : {
        type : String,
        required: true
    },
    age :{
        type : Number
    },
    work: {
        type : String,
        enum : ['chef','waiter','manager'],
        required: true
    },
    mobile :{
        type :String,
        required: true
    },
    email :{
        type :String,
        required: true,
        unique : true
    },
    address :{
        type:String
    },
    salary: {
        type : Number,
        required: true,
    }


});
const Person =moongose.model('Person',personSchema);
module.exports=Person;