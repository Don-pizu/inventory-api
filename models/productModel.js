const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
{
	name: {
		type: String,
		required: [true, 'Product name is required'],
	},
	price: {
		type: Number,
		required: [true, 'Price is required'],
	},
	category: {
		type: String,
		default: 'General',
	},
	inStock: {
		type: Boolean,
		default: true,
	},
},
	{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);


