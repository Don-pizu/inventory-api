// routes/categoryRoute.js

const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const { protect } = require("../middlewares/authMiddleware");

// Apply `protect` to all category routes
router.use(protect);

router.route('/')
  .get(protect, getAllCategory)
  .post(protect, createCategory);

router.route('/:id')
  .get(protect, getCategoryById)
  .put(protect, updateCategory)
  .delete(protect, deleteCategory);

module.exports = router;

