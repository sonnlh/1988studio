const Image = require("../models/Image");
const mongoose = require("mongoose");

function create(req, res, next) {
  console.log(req.body);
  let name = req.body.name;
  let image = new Image({
    name
  });
  image.save().then((data) => {
    res.send(data);
  });
}
module.exports.create = create;