require("dotenv/config");
const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;

//IMAGE UPLOAD CONFIGURATION
const multer = require("multer");
const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
const imageFilter = function(req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are accepted!"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter });

const cloudinary = require("cloudinary");
const Image = require("./models/Image");
cloudinary.config({
  cloud_name: "abcasdasdasca",
  api_key: '449243343278218',
  api_secret: 'xFvbUVr_bThCN8MEfpAQ7JuRogM'
});

//connect to the database
mongoose
  .connect('mongodb+srv://sonnlh:Hongson571997@cluster0.vpsgw.mongodb.net/test')
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log(err));

// mongoose.set("useCreateIndex", true, "useFindandModify", false);

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));



//ROUTES

app.get("/", (req, res) => {
  Image.find(function(err, images) {
    if (err) {
      res.json(err.message);
    } else {
      res.json(images);
    }
  });
});

app.post("/add", upload.single("image"), (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
    console.log(result)
    // create.create()
    let img = new Image({
      image: result.secure_url,
      imageId: result.public_id,
    })
    img.save().then((data) => {
      res.send(data);
    });
  });
});

app.listen(port, () => {
  console.log("App is running on port " + port);
});

module.exports = app;
