// controllers/categoryController.js 

const Category = require('../models/categoryModel'); 

//   Get all categories 
exports.getAllCategory = async (req, res) => { 
	const categories = await Category.find(); 
	res.status(200).json(categories); 
}; 

//  Get category by ID 
exports.getCategoryById = async (req, res) => { 
	const category = await Category.findById(req.params.id); 
	if (!category) { 
		return res.status(404).json({ message: 'Category not found' }); 
	} 
	res.status(200).json(category); 
};

// Create a new category
exports.createCategory = async (req, res) => { 
	const { name, category, review } = req.body; 
	const newCategory = await Category.create({ name, category, review
	}); 
	res.status(201).json(newCategory); 
};

// Update category by ID
exports.updateCategory = async (req, res) => { 
	const updatedCategory= await Category.findByIdAndUpdate( 
	req.params.id, 
	req.body, 
	{ new: true, runValidators: true } 
); 
	if (!updatedCategory) { 
		return res.status(404).json({ message: 'Category not found' }); 
	} 
	res.status(200).json(updatedCategory); 
};

//  Delete product 
exports.deleteCategory = async (req, res) => { 
	const deletedCategory = await Category.findByIdAndDelete(req.params.id); 
	if (!deletedCategory) { 
		return res.status(404).json({ message: 'Category not found' }); 
	} 
	res.status(204).send(); 
};
