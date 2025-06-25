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
const { restrictTo } = require('../middlewares/roleMiddleware');


 
// Vendor-only routes
router.use(protect);
router.get('/', restrictTo('vendor'), getAllOrders);
router.get('/:id', restrictTo('vendor'), getOrderById);

// Authenticated user (customer or vendor) can create, update, delete
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
module.exports = router;