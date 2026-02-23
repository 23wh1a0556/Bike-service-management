const express = require('express');
const router = express.Router();

const { 
  placeOrder, 
  getOrders, 
  getAllOrders, 
  updateOrderStatus 
} = require('../controllers/orderController');

const { protect } = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');
const admin = require("../middleware/adminMiddleware");

// Place order (User)
router.post('/place', protect, placeOrder);

// Get all orders (Admin only)
router.get('/all', protect, authorizeRoles('admin'), getAllOrders);

// Get logged-in user's orders
router.get('/', protect, getOrders);

// Update order status (Admin only)
// router.put('/:id/status', protect, authorizeRoles('admin'), updateOrderStatus);
router.put("/:id/status", protect, admin, updateOrderStatus);

module.exports = router;