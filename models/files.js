// Calling the "mongoose" package
const mongoose = require("mongoose");

const multer = require('multer');
const path = require('path');
const FILE_PATH = path.join('/uploads/users/avatars');

// Creating a Schema for uploaded files
const fileSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
},{
  timestamps: true
});

// //Configuration for Multer
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });

// // Multer Filter
// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "csv") {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a CSV File!!"), false);
//   }
// };
// //   const upload = multer({
// //     storage: multerStorage,
// //     fileFilter: multerFilter,
// //   });

// fileSchema.statics.upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// }).single("mycsv");
// fileSchema.statics.uploadPath = FILE_PATH;

// Creating a Model from that Schema
const File = mongoose.model("File", fileSchema);

// Exporting the Model to use it in app.js File.
module.exports = File;
