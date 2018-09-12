var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var dbconfig = require('./Config/config.js');
var cors = require('cors');

mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.url,{useNewUrlParser:true}).then(()=>{
    console.log("Server is listening successfully /database is connected :8080")
}).catch(err=>{
    console.log(err+"could not connect the database");
});

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());

require('./Routes/routes.js')(app);


app.listen(3000);
