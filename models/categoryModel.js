// models/categoryModel.js

const mongoose = require('mongoose'); 

const categorySchema = new mongoose.Schema({ 
	name: { 
		type: String,
		required: true 
	}, 
	category: { 
		type: String, 
		required: true, 
	}, 
	review: { 
		type: String, 
		required: true, 
	} 
	}, { 
	timestamps: true }
); 

module.exports = mongoose.model('Category', categorySchema);