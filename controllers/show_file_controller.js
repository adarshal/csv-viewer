const File = require("../models/files");
const parse = require("csv-parse").parse;
const fs = require("fs");
const path = require("path");
module.exports.show = async function (req, res) {
  let file = await File.findById(req.params.id);
  if (file) {
    console.log(file)
    const data = fs.readFileSync(path.join(__dirname, '../uploads/files/'+ file.name)) ;
    parse(data, (err, records) => {
      if (err) {
        console.error(err);
        return res
          .status(400)
          .json({ success: false, message: "An error occurred" });
      }

      return res.render("viewer", {
        title:"viewer",
        data: records,
      });
    });
  } else {
    res.status(200).json({
      status: "err",
      message: "File created successfully!!",
    });
  }
};
