const express = require('express');
const router = express.Router();
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

// Add to cart
router.post('/add', protect, addToCart);

// Get user's cart
router.get('/', protect, getCart);

// Remove item
router.post('/remove', protect, removeFromCart);

module.exports = router;