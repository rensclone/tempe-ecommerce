const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : '';

    const newProduct = new Product({
      name,
      description,
      price,
      stock: parseInt(stock),
      image: imagePath
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Gagal menambahkan produk", error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { description, price, stock } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Produk tidak ditemukan" });
    }

    if (description) product.description = description;
    if (price !== undefined) product.price = parseInt(price);
    if (stock !== undefined) product.stock = parseInt(stock);

    await product.save();

    res.json({ message: "Produk berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: "Gagal memperbarui produk", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal menghapus produk', detail: err.message });
  }
};
