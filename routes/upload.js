const express =require('express');
const multer = require("multer");
const router = express.Router()
const path = require('path');
const File=  require('../models/files');

const FILE_PATH = path.join('/uploads/files');

// const router = express.Router()
//Configuration for Multer
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '..',FILE_PATH));
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

  // Multer Filter
const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "csv") {
      cb(null, true);
    } else {
      cb(new Error("Not a CSV File!!"), false);
    }
  };
  //Calling the "multer" Function
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });

// const uploadController=require('../controllers/upload_controller');
router.post("/uploadFile",  upload.single("myFile"),async (req, res) => {
    
    try {
        const newFile = await File.create({
          name: req.file.filename,
        });
        return res.redirect('back');
      } catch (error) {
        res.json({
          error,
        });
      }
})

module.exports= router;
