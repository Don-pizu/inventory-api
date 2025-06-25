// routes/orderRoute.js

const express = require('express'); 
const router = express.Router(); 
const { 
getAllOrders,
createOrder, 
getOrderById,
updateOrder,
deleteOrder 
} = require('../controllers/orderController'); 

const { protect } = require('../middlewares/authMiddleware'); 

// Protect all order routes 
router.use(protect); 
router.get('/', protect, getAllOrders); 
router.post('/', protect, createOrder); 
router.get('/:id', protect, getOrderById); 
router.put('/:id', protect, updateOrder);
router.delete('/:id', protect, deleteOrder); 

module.exports = router;