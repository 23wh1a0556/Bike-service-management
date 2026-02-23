const express = require('express');
const router = express.Router();

const {
  createSparePart,
  getAllSpareParts,
  getSparePartById,
  updateSparePart,
  deleteSparePart
} = require('../controllers/sparePartController');

const upload = require('../middleware/uploadMiddleware');
const { protect } = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

// ================= PUBLIC ROUTES =================

// Get all spare parts
router.get('/', getAllSpareParts);

// Get single spare part
router.get('/:id', getSparePartById);

// ================= ADMIN ROUTES =================

// Add spare part with image
router.post(
  '/add',
  protect,
  authorizeRoles('admin'),
  upload.single('image'),
  createSparePart
);

// Update spare part
router.put(
  '/:id',
  protect,
  authorizeRoles('admin'),
  upload.single('image'),
  updateSparePart
);

// Delete spare part
router.delete(
  '/:id',
  protect,
  authorizeRoles('admin'),
  deleteSparePart
);

module.exports = router;



// const express = require('express');
// const router = express.Router();

// const {
//   addSparePart,
//   getAllSpareParts,
//   getSparePartById,
//   updateSparePart,
//   deleteSparePart
// } = require('../controllers/sparePartController');

// const upload = require('../middleware/uploadMiddleware');
// const { protect, isAdmin } = require('../middleware/authMiddleware');


// // ================= ROUTES =================

// // Public Routes
// router.get('/', getAllSpareParts);
// router.get('/:id', getSparePartById);


// // Admin Routes

// // Add spare part with image
// router.post('/add', protect, isAdmin, upload.single('image'), addSparePart);

// // Update spare part (with optional image)
// router.put('/:id', protect, isAdmin, upload.single('image'), updateSparePart);

// // Delete spare part
// router.delete('/:id', protect, isAdmin, deleteSparePart);


// module.exports = router;





// const express = require('express');
// const router = express.Router();

// const {
//   createSparePart,
//   getAllSpareParts,
//   getSparePartById,
//   updateSparePart,
//   deleteSparePart
// } = require('../controllers/sparePartController');

// const { protect } = require('../middleware/authMiddleware');
// const authorizeRoles = require('../middleware/roleMiddleware');

// // Public
// router.get('/', getAllSpareParts);
// router.get('/:id', getSparePartById);

// // Admin only
// router.post('/', protect, authorizeRoles('admin'), createSparePart);
// router.put('/:id', protect, authorizeRoles('admin'), updateSparePart);
// router.delete('/:id', protect, authorizeRoles('admin'), deleteSparePart);

// module.exports = router;




// const express = require('express');
// const router = express.Router();

// const {
//   createSparePart,
//   getAllSpareParts,
//   getSparePartById,
//   updateSparePart,
//   deleteSparePart
// } = require('../controllers/sparePartController');

// const protect = require('../middleware/authMiddleware');
// const authorizeRoles = require('../middleware/roleMiddleware');


// // Public
// router.get('/', getAllSpareParts);
// router.get('/:id', getSparePartById);


// // Admin only
// router.post('/', protect, authorizeRoles('admin'), createSparePart);
// router.put('/:id', protect, authorizeRoles('admin'), updateSparePart);
// router.delete('/:id', protect, authorizeRoles('admin'), deleteSparePart);

// module.exports = router;


