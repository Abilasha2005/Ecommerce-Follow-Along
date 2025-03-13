const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define your upload folder
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // Define a unique filename
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png"); // Define
  },
});

const productstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'productuploads/');
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png");
  }
});

// Initialize upload object
 upload = multer({ storage: storage });
module.exports = upload;
 pup = multer({ storage: productstorage });
module.exports=pup