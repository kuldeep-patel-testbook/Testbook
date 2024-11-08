const Product = require('../models/Product');

const getProducts = async (req, res) => {
    const products = await Product.find({ user: req.user._id });
    res.json(products);
};

const createProduct = async (req, res) => {
    const { name, price, description } = req.body;

    const product = new Product({
        name,
        price,
        description,
        user: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product && product.user.toString() === req.user._id.toString()) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const updateProduct = async (req, res) => {
    const { name, price, description } = req.body;

    const product = await Product.findById(req.params.id);

    if (product && product.user.toString() === req.user._id.toString()) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product && product.user.toString() === req.user._id.toString()) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
};
