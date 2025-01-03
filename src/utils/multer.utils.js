const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public')); 
  },
  filename: function (req, file, cb) {
    const mimetype = file.mimetype.split('/')[1];
    cb(null, Date.now() + `.${mimetype}`);
  }
});

const upload = multer({ storage });

module.exports = upload;
