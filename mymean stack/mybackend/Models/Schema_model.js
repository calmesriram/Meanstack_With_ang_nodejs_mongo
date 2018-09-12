var mongoose = require('mongoose');

var createschema = mongoose.Schema({
    title:String,
    content:String,
    firstname:String,
    secondname:String,
    thirdname:String
});

module.exports = mongoose.model('Myschema',createschema);