module.exports = (app)=>{
    var route = require('../Controlls/controlls.js');


app.get('/',route.none);
// app.get('/',function(req,res){
//     // res.redirect('/viewall');
// });

// create
app.post('/make',route.create);

// view
app.get('/viewall',route.findAll);


app.delete('/erase',route.deleteOne);

}