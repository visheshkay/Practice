const exp = require('express')
const imageApp = exp.Router();
const mongoose = require('mongoose');
const Grid = require('gridfs-stream')
const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage')
const bodyParser = require('body-parser')
const verifyToken = require('../Middleware/VerifyToken')
const methodOverride = require('method-override')
const crypto = require('crypto');
const path = require('path');
require('dotenv').config()

// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
imageApp.use(bodyParser.json())
imageApp.use(methodOverride('_method'))
const conn = mongoose.createConnection(process.env.FILE_DB_URL)
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

let bucket;
conn.once('open', () => {
  bucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });
});


  const storage = new GridFsStorage({
    url: process.env.FILE_DB_URL,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

  imageApp.post('/upload-product-image', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
  });

  imageApp.get('/get-product-images',verifyToken, async (req, res) => {
      console.log("Started")
      try {
        let files = await gfs.files.find().toArray();
        res.json({files})
    } catch (err) {
        res.json({err})
    }
  });

  imageApp.get('/get-product-image/:filename', async (req, res) => {
    try {
      const filename = req.params.filename;
      const downloadStream = bucket.openDownloadStreamByName(filename);
      downloadStream.on('error', (err) => {
        res.status(404).json({ err: 'File not found' });
      });
      res.setHeader('Content-Type', 'image/jpeg'); // Set content type to image/jpeg
      downloadStream.pipe(res);
    } catch (err) {
      console.log(err);
      res.json({ error: err });
    }
  });



module.exports = imageApp

