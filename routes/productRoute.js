// routes/productRoutes.js 
const express = require('express'); 
const router = express.Router(); 
const { 
getAllProducts, 
getProductById, 
createProduct, 
updateProduct, 
deleteProduct, 
} = require('../controllers/productController'); 

const { protect } = require('../middlewares/authMiddleware'); 


///Publiv routes
router.get('/', protect, getAllProducts); 
router.get('/:id', protect, getProductById); 

//Protected routes
router.post('/', protect, createProduct); 
router.put('/:id', protect, updateProduct); 
router.delete('/:id', protect, deleteProduct); 
module.exports = router;