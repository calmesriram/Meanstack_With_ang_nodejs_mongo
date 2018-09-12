var myschema = require('../Models/Schema_model.js');

exports.none = (req,res) =>{
    // res.render('/viewall');
     res.send("running successfully, select or navigate route");
}
exports.create =(req,res) =>{

    // schema
    var table = new myschema({
        title:req.body.title,
        content:req.body.content,
        firstname:req.body.firstname,
        secondname:req.body.secondname,
        thirdname:req.body.thirdname
        
    });

    // save

    table.save().then(data=>{
        res.send(data);
    }).catch(err =>{
        res.send({message:"save unsuccessfull"});
    })
}


exports.findAll = (req, res) => {
    myschema.find()
    .then(myschema => {
        res.send(myschema);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
}

exports.deleteOne = (req, res) => {
    myschema.findByIdAndRemove(id)
    .then(myschema => {
        res.send(myschema);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
}

// 
// exports.findAll = (req,res) =>{
//     table.find().then(data=>{
// res.send(data);
//     }).catch(err =>{
//         message:"unable to read"
//     })
// }
