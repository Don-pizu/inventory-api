// controllers/productController.js 

const Product = require('../models/productModel'); 

// @desc    Get all products 
exports.getAllProducts = async (req, res) => { 
	const products = await Product.find(); 
	res.json(products); 
}; 

// @desc    Get product by ID 
exports.getProductById = async (req, res) => { 
	const product = await Product.findById(req.params.id); 
	if (!product) { 
	return res.status(404).json({ message: 'Product not found' }); 
	} 
	res.json(product); 
};

// @desc    Create a new product 
exports.createProduct = async (req, res) => { 
	const { name, price, category, inStock } = req.body; 
	const newProduct = await Product.create({ name, price, category, inStock 
	}); 
	res.status(201).json(newProduct); 
};

// @desc    Update product by ID
exports.updateProduct = async (req, res) => { 
	const updatedProduct = await Product.findByIdAndUpdate( 
	req.params.id, 
	req.body, 
	{ new: true, runValidators: true } 
	); 
	if (!updatedProduct) { 
	return res.status(404).json({ message: 'Product not found' }); 
	} 
	res.json(updatedProduct); 
};

// @desc    Delete product 
exports.deleteProduct = async (req, res) => { 
	const deletedProduct = await Product.findByIdAndDelete(req.params.id); 
	if (!deletedProduct) { 
	return res.status(404).json({ message: 'Product not found' }); 
	} 
	res.status(204).send(); 
};
