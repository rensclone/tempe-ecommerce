const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.get('/', getAllProducts);
router.post('/', upload.single('image'), addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
