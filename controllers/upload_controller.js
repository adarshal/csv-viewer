const File = require("../models/files");


  module.exports.createFile= async function (req, res) {
    File.upload(req, res, function(err){
        if (err) {
            console.log('*****Multer Error: ', err);
            res.json({
                err,
              });
            return}
        if (req.file){
            const newFile =  File.create({
                name: req.file.filename,
              });
              res.status(200).json({
                status: "success",
                message: "File created successfully!!",
              });
            }
    })
}
  